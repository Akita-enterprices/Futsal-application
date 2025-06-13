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
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Image2 from "../Asset/_b3ab286a-7bdc-4643-b89a-90940be5e5e0.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/nearcourt");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await googleLogin();
      console.log("Google login success");
    } catch (error) {
      console.error("Google login failed:", error);
    }
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
        backgroundImage: `url(${Image2})`,
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
                placeholder="Email or NIC/Passport"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            <Typography sx={{ opacity: "35%", textAlign: "left", mb: 2 }}>
              <a href="/forgotpassword">Forgot password?</a>
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#0F3D3E",
                "&:hover": { bgcolor: "#0F3D3E" },
                width: "50%",
                mx: "auto",
                display: "block",
                borderRadius: 2,
                textAlign: "center",
                mb: 2,
              }}
            >
              Continue
            </Button>

            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: 2,
                mb: 2,
                bgcolor: "#0F3D3E",
                color: "white",
                borderColor: "#DADCE0",
                "&:hover": {
                  bgcolor: "#F5F5F5",
                  color: "black",
                  borderColor: "#DADCE0",
                },
              }}
            >
              Sign in with Google
            </Button>

            <Typography
              sx={{
                color: "grey",
                "& a": { color: "#0F3D3E" },
                mt: 2,
                textAlign: "center",
              }}
            >
              Don't have an account? <a href="/createaccount">Sign Up</a>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
