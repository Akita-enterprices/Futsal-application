// src/components/Login.js

import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, authToken, error: authError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    // if (authToken) {
    //   console.log("Auth0 token:", authToken);
    localStorage.setItem("authToken", authToken);
    navigate("/welcome");
    // } else {
    //   setError(authError);
    // }
    setEmail("");
    setPassword("");
  };

  // Handle back button click
  const goBack = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "90vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          width: { sm: "42%", xs: "90%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2" }} />
      </Box>

      <Typography
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold", mb: 2 }}
      >
        <span style={{ color: "black" }}>Welcome</span>
        <span style={{ color: "#E2DCC8" }}>Back</span>
      </Typography>
      <Typography sx={{ opacity: "55%", fontSize: { sm: "15px", xs: "14px" } }}>
        We missed you! Login to continue your journey with us.
      </Typography>
      <Box
        sx={{
          mt: 2,
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {error && (
            <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>
          )}
          <Typography sx={{ opacity: "35%", textAlign: "left" }}>
            <a href="/forgotpassword">Forgot password</a>
          </Typography>
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E",
              },
              width: {
                sm: "50%",
                xs: "50%",
              },
              borderRadius: 2,
              mb: 2,
            }}
          >
            Login
          </Button>
          <Typography sx={{ opacity: "35%", textAlign: "center" }}>
            _______ Or continue with ______
          </Typography>
        </form>
      </Box>
      <Typography sx={{ color: "grey", "& a": { color: "yellow" } }}>
        Does have an account? <a href="/createaccount">signUp</a>
      </Typography>
      <br />
      <Button
        type="submit"
        href="/createAdminaccount"
        variant="contained"
        sx={{
          bgcolor: "gray",
          "&:hover": {
            bgcolor: "gray",
          },
          width: {
            sm: "10%",
            xs: "50%",
          },
          borderRadius: 2,
          mb: 2,
        }}
      >
        ADMIN
      </Button>
    </Box>
  );
};

export default Login;
