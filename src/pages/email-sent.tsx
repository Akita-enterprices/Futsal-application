import React from "react";
import { Box, Typography, Button } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useNavigate } from "react-router-dom";

const EmailSent: React.FC = () => {
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
      <MarkEmailReadIcon sx={{ fontSize: 80, color: "#0F3D3E", mb: 2 }} />
      <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
        Verify Your Email
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
        We’ve sent a verification link to your email. Please check your inbox and click the link to activate your account.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{ bgcolor: "#0F3D3E", "&:hover": { bgcolor: "#0F3D3E" } }}
      >
        Back to Login
      </Button>
    </Box>
  );
};

export default EmailSent;
