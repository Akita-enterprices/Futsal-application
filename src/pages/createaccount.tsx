import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createaccount: React.FC<{}> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        username,
        email,
        password,
        phone,
      });
      console.log('Response:', response.data);
      navigate('/verifyaccount', { state: { phone } });
      // Handle success (e.g., navigate to another page or show a success message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <Box
      sx={{
        height: "100vh",
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
      <Typography
        sx={{ fontSize: { sm: "30px", xs: "20px;" }, fontWeight: "bold" }}
      >
        <span style={{ color: "black" }}>Create</span>{" "}
        <span style={{ color: "#E2DCC8" }}>Account</span>{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "15px", xs: "14px" },
          padding: { sm: 0, xs: 3 },
          textAlign: "center",
        }}
      >
        Fill your information below or register with your social account{" "}
      </Typography>
      <Box sx={{ mt: 2, maxWidth: "100%", textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <Box>
            {" "}
            <PersonOutlinedIcon color="action" sx={{ marginRight: 1 }} />{" "}
            <TextField
              label="User name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>
          <br />
          <Box>
            {" "}
            <EmailOutlinedIcon color="action" sx={{ marginRight: 1 }} />{" "}
            <TextField
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>
          <br />
          <Box>
            {" "}
            <PhoneOutlinedIcon color="action" sx={{ marginRight: 1 }} />{" "}
            <TextField
              label="Phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>
          <br />
          <Box>
            <VpnKeyOutlinedIcon color="action" sx={{ marginRight: 1 }} />{" "}
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>
          <br />
          <Button
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
              }, // Add margin top for spacing
              borderRadius: 2,
              mb: 2,
            }}
          >
            Continue
          </Button>
          <Typography sx={{ opacity: "35%", textAlign: "center" }}>
            _______ Or signup with ______
          </Typography>
        </form>
      </Box>
      <br />
      <Typography sx={{ color: "grey", "& a": { color: "yellow" } }}>
        Already have an account? <a href="/login">login</a>
      </Typography>
    </Box>
  );
};

export default Createaccount;
