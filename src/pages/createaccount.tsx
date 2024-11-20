import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Image2 from "../Asset/_b3ab286a-7bdc-4643-b89a-90940be5e5e0.jpg"; // Import your background image

const Createaccount: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password, phone, username);
      navigate("/nearcourt");
    } catch (error) {
      console.error("Error:", error);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "120vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        backgroundImage: `url(${Image2})`, // Add background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Box
        sx={{
          width: { sm: 500, xs: 300 },
          p: 3,
          bgcolor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background for card view
          borderRadius: 10,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "30px", xs: "20px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Get’s Started
        </Typography>

        <Typography
          sx={{
            fontSize: { sm: "15px", xs: "14px", color: "grey" },
            padding: { sm: 0, xs: 3 },
            mb: 2,
          }}
        >
          Get started now and unlock exclusive benefits tailored just for you!
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box>
            <Typography sx={{ textAlign: "center", mb: 2 }}>
              _____________ or ____________
            </Typography>
            <TextField
              placeholder="User name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ mb: 2, width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
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
              placeholder="Phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              sx={{ mb: 2, width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlinedIcon color="action" />
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

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E",
              },
              width: "50%", // Center the button with 50% width
              mx: "auto",
              display: "block",
              borderRadius: 2,
              mb: 2,
            }}
          >
            Continue
          </Button>
        </form>

        <Typography sx={{ color: "grey", "& a": { color: "#0F3D3E" } }}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Createaccount;
