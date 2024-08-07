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

// // Mock function to validate email and password
// const validateCredentials = (email: string, password: string) => {
//   // This is a mock validation. Replace with actual API call in production.
//   const registeredUsers = [
//     { email: "user1@example.com", password: "password123" },
//     { email: "user2@example.com", password: "password456" },
//   ];

//   return registeredUsers.some(
//     (user) => user.email === email && user.password === password
//   );
// };

const LoginAdmin: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/welcome");
    // if (validateCredentials(email, password)) {
    //   console.log("Submitted email:", email);
    //   console.log("Submitted password:", password);
    //   setError(""); // Clear any previous error

    //   // Proceed with successful login actions, like redirecting to a welcome page
    //   window.location.href = "/welcome";
    // } else {
    //   setError("Invalid email or password. Please try again.");
    // }

    // // Reset the form fields
    // setEmail("");
    // setPassword("");
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
          {/* {error && (
            <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>
          )} */}
          <Typography sx={{ opacity: "35%", textAlign: "left" }}>
            <a href="/forgotpassword">Forgot password</a>
          </Typography>
          <Button
            href="/"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E", // Same color as background
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
    </Box>
  );
};

export default LoginAdmin;
