import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "./../utils/axios"; // Adjust the import path as necessary
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("accessToken"));
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!authToken);

  // ✅ Login using custom backend
  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // Save tokens and user info in localStorage (or useContext / state)
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
  
      // You can also set a loggedIn state here if you're managing it via context
  
      return data;
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };
  

  // 🔁 Refresh access token
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) return logout();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/refresh-token`, {
        refreshToken,
      });

      const { accessToken } = response.data;

      localStorage.setItem("accessToken", accessToken);
      setAuthToken(accessToken);
      return accessToken;
    } catch (error) {
      console.error("Token refresh failed", error);
      logout();
    }
  };

  // 🔐 Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuthToken(null);
    setUser(null);
    setIsLoggedIn(false);
  };

  // 🔁 Auto-initialize on load
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setAuthToken(accessToken);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authToken,
        user,
        isLoggedIn,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
