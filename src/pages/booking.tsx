import React from "react";
import { Box, Typography } from "@mui/material";
// import Card from "../component/Booking";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Booking: React.FC<{}> = () => {
  const goBack = () => {
    window.history.back();
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
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "45%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ArrowBackIcon
          onClick={goBack}
          sx={{ color: "#007EF2", cursor: "pointer" }}
        />
      </Box>
      <Typography>Booking</Typography>
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Card/><br/>
        <Card/><br/>
        <Card/><br/>
        <Card/> */}
      </Box>
    </Box>
  );
};

export default Booking;
