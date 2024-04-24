import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
const Createaccount: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log("Submitted email:", email);
    console.log("Submitted password:", password);
    // Reset form fields
    setEmail("");
    setPassword("");
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
              type="name"
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
            href="/verifyaccount"
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
