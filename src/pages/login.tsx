import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import Image2 from "../Asset/_b3ab286a-7bdc-4643-b89a-90940be5e5e0.jpg"; // Background image
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate("/nearcourt");
    setEmail("");
    setPassword("");
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
        backgroundImage: `url(${Image2})`, // Background image from the second code
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        sx={{
          maxWidth: { sm: 500, xs: 300 },
          width: "100%",
          p: 2,
          boxShadow: 3,
          borderRadius: 10,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Card view from the second code
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: { sm: "30px", xs: "20px" },
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            sx={{
              opacity: "55%",
              fontSize: { sm: "15px", xs: "14px" },
              mb: 2,
              textAlign: "center",
            }}
          >
            We missed you! Login to continue your journey with us.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box>
              <Typography sx={{ textAlign: "center", mb: 2 }}>
                _____________ or ____________
              </Typography>
              <TextField
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2, width: "100%" }}
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
                sx={{ mb: 2, width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyOutlinedIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Typography sx={{ opacity: "35%", textAlign: "left" }}>
              <a href="/forgotpassword">Forgot password</a>
            </Typography>
            <br />

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#0F3D3E",
                "&:hover": { bgcolor: "#0F3D3E" },
                width: "50%", // Login button styled as the second code
                mx: "auto", // Centered horizontally
                display: "block",
                borderRadius: 2,
                textAlign: "center",
                mb: 2,
              }}
            >
              Continue
            </Button>

            <Typography
              sx={{
                color: "grey",
                "& a": { color: "#0F3D3E" },
                mt: 2,
                textAlign: "center",
              }}
            >
              Does not have an account? <a href="/createaccount">Sign Up</a>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
