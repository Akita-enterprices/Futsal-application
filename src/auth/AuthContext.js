import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    const getUserDetails = async () => {
      const params = new URLSearchParams(window.location.search);
      const authorizationCode = params.get("code");

      if (authorizationCode) {
        try {
          const domain = process.env.REACT_APP_AUTH0_DOMAIN;
          const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
          const redirectUri = `${window.location.origin}`;

          // Exchange the authorization code for tokens
          const tokenResponse = await axios.post(
            `https://${domain}/oauth/token`,
            {
              grant_type: "authorization_code",
              client_id: clientId,
              code: authorizationCode,
              redirect_uri: redirectUri,
            }
          );

          const { access_token, id_token } = tokenResponse.data;

          // Use the access token or ID token to retrieve user information
          const userInfoResponse = await axios.get(
            `https://${domain}/userinfo`,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );

          // Log the user information (or store it in state/localStorage)
          console.log("User Info:", userInfoResponse.data);

          // Optionally, store the tokens in localStorage for further use
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("id_token", id_token);
        } catch (error) {
          console.error("Error exchanging code for token:", error);
          Swal.fire({
            title: "Error",
            text: "There was an issue logging in with Google.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      }
    };

    getUserDetails();
  }, []);

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

  const userDetails = async (token) => {
    try {
      const response = await axios.get(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userData = response.data;

      setUser(userData);
      if (!userData.email_verified) {
        Swal.fire({
          title: "Verify Your Email",
          text: "A verification email has been sent to your email address. Please verify your email before logging in.",
          icon: "info",
          confirmButtonText: "Okay",
          confirmButtonColor: "#0F3D3E", // Button color
        });
        setIsLoggedIn(false);
      } else {
        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "Continue",
          confirmButtonColor: "#0F3D3E",
        });
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
      }

      console.log("User info fetched successfully", userData);
    } catch (error) {
      console.error("Error fetching user info", error);
    }
  };

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

  const googleLogin = async () => {
    try {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;
      const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
      const redirectUri = `${window.location.origin}/Futureoffutsal`; // or use a custom redirect URI
      console.log("Redirect URI:", redirectUri);

      // Construct the Auth0 Google login URL
      const googleAuthUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&connection=google-oauth2&scope=openid profile email`;

      // Redirect the user to the Google login page
      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error("Error during Google login:", error);

      Swal.fire({
        title: "Login Failed",
        text: "There was an issue logging in with Google. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#F27474",
      });
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
          user_metadata: {
            phone_number: phoneNumber,
            username: username,
          },
          connection: "futsalApplications",
        }
      );

      // const newUser = {
      //   email,
      //   phoneNumber,
      //   username,
      //   auth0UserId: response.data._id,
      // };

      // await axios.post("http://localhost:4000/api/users", newUser);

      if (!response.email_verified) {
        Swal.fire({
          title: "Verify Your Email",
          text: "A verification email has been sent to your email address. Please verify your email before logging in.",
          icon: "info",
          confirmButtonText: "Okay",
          confirmButtonColor: "#0F3D3E", // Button color
        });
      } else {
        Swal.fire({
          title: "Sign-Up Successful!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonText: "Continue",
          confirmButtonColor: "#0F3D3E", // Button color
        });
      }
      // Optionally handle response or set user state after signup
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
      console.log("Login", isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signup,
        authToken,
        user,
        error,
        isLoggedIn,
        googleLogin,
      }}
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
