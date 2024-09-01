import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Futureoffutsal: React.FC<{}> = () => {
  return (
    <Container>
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
        <Box
          sx={{
            width: { sm: "50%", xs: "80%" },

            textAlign: "center", // Center text
            padding: { sm: "90px", xs: "20px" },
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { sm: "50px", xs: "20px" } }}
          >
            Future of Futsal
          </Typography>
          <br />
          <Typography
            sx={{ textAlign: "justify", fontSize: { sm: "18px", xs: "15px" } }}
          >
            Welcome to the future of futsal! Our Online Futsal Booking
            Application is your gateway to a seamless, convenient, and
            exhilarating futsal experience. Whether you're a seasoned futsal
            enthusiast or a beginner looking to get into the game, we're here to
            elevate your futsal journey to new heights. With our user-friendly
            platform, you can explore a world of futsal facilities, find the
            perfect venue, and book your slots with just a few clicks. Say
            goodbye to the hassle of making phone calls or dealing with complex
            reservation processes. We've simplified it all for you
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          href="/createaccount"
          sx={{
            bgcolor: "#0F3D3E",

            width: { sm: "auto", xs: "50%" },
            borderRadius: 2, // Add margin top for spacing
            "&:hover": {
              bgcolor: "#0F3D3E",
            }, // Same color as background
          }}
        >
          <b>Kicking the ball</b>
        </Button>
        <br />

        <Typography>
          Already have an account? <a href="/login">login</a>
        </Typography>
      </Box>
    </Container>
  );
};
export default Futureoffutsal;
