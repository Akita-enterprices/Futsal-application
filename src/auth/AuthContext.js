import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     axios
  //       .get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         setUser(response.data);
  //         setIsLoggedIn(true);
  //         console.log("User info fetched successfully");
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user info", error);
  //         setIsLoggedIn(false);
  //       });
  //   }
  // }, []);

  const login = async (email, password) => {
    try {
      console.log(email, password);
      const response = await axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
        {
          grant_type: "password",
          client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
          username: email,
          password: password,
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: "openid profile email",
        }
      );

      // Store token and set login state
      setAuthToken(response.data.access_token);
      localStorage.setItem("authToken", response.data.access_token); // Store token in local storage
      setIsLoggedIn(true); // Set isLoggedIn to true after successful login

      // SweetAlert for successful login
      Swal.fire({
        title: "Login Successful!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#0F3D3E", // Button color
      });
    } catch (error) {
      // Check for specific "invalid_grant" error
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "invalid_grant"
      ) {
        // SweetAlert for invalid credentials
        Swal.fire({
          title: "Login Failed",
          text: "Wrong email or password. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#F27474", // Error button color
        });
      } else {
        // SweetAlert for any other errors
        Swal.fire({
          title: "Login Error",
          text:
            error.response?.data?.error_description ||
            "An error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#F27474",
        });
      }
    }
  };

  const signup = async (email, password, phoneNumber, username) => {
    try {
      // Call the backend API to sign up
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        {
          email,
          password,
          phone: phoneNumber,
          username,
        }
      );

      console.log(response);
      // SweetAlert for successful sign-up
      Swal.fire({
        title: "Sign-Up Successful!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#0F3D3E", // Button color
      });

      console.log("Signup successful:", response.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during sign-up.";

      // SweetAlert for errors
      if (errorMessage === "User already exists") {
        Swal.fire({
          title: "User Already Exists",
          text: "An account with this email already exists. Please log in or use another email.",
          icon: "warning",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#F27474", // Warning button color
        });
      } else {
        Swal.fire({
          title: "Sign-Up Failed",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#F27474", // Error button color
        });
      }

      // Optionally set the error state
      setError(errorMessage);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    setIsLoggedIn(false); // Set isLoggedIn to false on logout
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("hello", isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ login, logout, signup, authToken, user, error, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const CustomAuthProvider = ({
  children,
  domain,
  clientId,
  redirectUri,
}) => {
  return (
    <AuthProvider domain={domain} clientId={clientId} redirectUri={redirectUri}>
      {children}
    </AuthProvider>
  );
};
