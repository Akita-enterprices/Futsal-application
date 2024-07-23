import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

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

      setAuthToken(response.data.access_token);
      localStorage.setItem("authToken", response.data.access_token); // Store token in local storage
      // const userInfo = await axios.get(
      //   `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${response.data.access_token}`,
      //     },
      //   }
      // );

      // setUser(userInfo.data);
      setIsLoggedIn(true); // Set isLoggedIn to true after successful login
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred");
    }
  };

  const signup = async (email, password, phoneNumber, username) => {
    try {
      // Example: Registering user with Auth0
      const response = await axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/dbconnections/signup`,
        {
          client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
          email,
          password,
          user_metadata: {
            phone_number: phoneNumber,
            username: username,
          },
          connection: "futsalApplications", // Replace with your Auth0 connection type
        }
      );

      // Optionally handle response or set user state after signup
      console.log("Signup successful:", response.data);
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred");
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
