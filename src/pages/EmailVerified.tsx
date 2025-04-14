// src/pages/EmailVerified.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const EmailVerified: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        textAlign: "center",
        px: 3,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: "green", mb: 2 }} />
      <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
        Email Verified!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
        Your account has been successfully verified. You can now log in.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{ bgcolor: "#0F3D3E", "&:hover": { bgcolor: "#0F3D3E" } }}
      >
        Go to Login
      </Button>
    </Box>
  );
};

export default EmailVerified;
