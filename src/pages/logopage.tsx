import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../Asset/futsal-logo.png";

const LogoPage: React.FC<{}> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/Futureoffutsal");
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#0F3D3E", // Set background color of the whole page
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "30%", // Adjust width as needed
          height: "30%", // Adjust height as needed
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }} // Ensure the image fills the box and maintains aspect ratio
        />
      </Box>
    </Box>
  );
};

export default LogoPage;
