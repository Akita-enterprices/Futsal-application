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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image2 from "../Asset/_b3ab286a-7bdc-4643-b89a-90940be5e5e0.jpg";

const Createaccount: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [nicOrPassport, setNicOrPassport] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      phone,
      nicOrPassport,
      address,
    };

    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", userData);
      console.log("Response:", response.data);
      alert("Account created successfully!");
      navigate("/email-sent");

    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error);
      alert("Signup failed. Please try again.");
    }

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setNicOrPassport("");
    setAddress("");
  };

  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "130vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        backgroundImage: `url(${Image2})`,
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
          bgcolor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 10,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold", mb: 2 }}>
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          <TextField
            placeholder="NIC or Passport"
            type="text"
            value={nicOrPassport}
            onChange={(e) => setNicOrPassport(e.target.value)}
            required
            sx={{ mb: 2, width: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeOutlinedIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            sx={{ mb: 2, width: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlinedIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E",
              },
              width: "50%",
              mx: "auto",
              display: "block",
              borderRadius: 2,
              mb: 2,
            }}
          >
            Sign Up
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
