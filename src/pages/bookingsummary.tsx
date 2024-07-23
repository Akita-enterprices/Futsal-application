import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Bookingsummary: React.FC<{}> = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "100vh" },
        width: { sm: "100%", xs: "100%" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "row",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIcon
          onClick={goBack}
          sx={{ color: "#007EF2", width: { sm: "10%", xs: "15%" } }}
        />{" "}
        <Typography
          sx={{
            fontSize: { sm: "18px", xs: "18px" },
            width: { sm: "30%", xs: "70%" },
            textAlign: "center",
            color: "#007EF2",
            fontWeight: "bold",
          }}
        >
          Booking Summary
        </Typography>
        <Box>
          <IconButton
            aria-label="share"
            sx={{ width: "50%", color: "#007EF2" }}
          >
            <ShareIcon />
          </IconButton>{" "}
          <IconButton
            aria-label="add to favorites"
            sx={{ width: "30%", color: "#007EF2" }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "50%", // Adjust as needed
        }}
      >
        <Box
          sx={{
            width: { sm: "25%", xs: "30%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
          }}
        >
          <Box
            sx={{
              width: { sm: "150px", xs: "120px" },
              height: { sm: "100px", xs: "100px" },
              bgcolor: "#007EF2",
              borderRadius: 2,
              // mr: 5,
            }}
          ></Box>{" "}
        </Box>{" "}
        <Box sx={{ textAlign: "center", width: { sm: "25%", xs: "40%" } }}>
          {" "}
          <Typography fontWeight={"bold"}> CIB Court</Typography> <br />
          <Typography>
            <span style={{ color: "#007EF2", fontWeight: "bold" }}>3500/=</span>{" "}
            /night
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { sm: "30%", xs: "40%" }, // Adjust width as needed
          }}
        >
          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Booking Date</b>
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Check-in</b>
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Check-out</b>
          </Typography>
        </Box>
        <Box sx={{ opacity: "40%" }}>
          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            1-Oct-2023
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            24-Oct-2023
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            26-Oct-2023
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "80%", xs: "90%" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", // Align text center to center the <hr>
          ml: { xs: 2, sm: 18 },
        }}
      >
        {" "}
        <hr
          style={{
            width: "100%", // Set the width of the <hr> to 100%
          }}
        />
      </Box>

      <br />
      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { sm: "30%", xs: "45%" }, // Adjust width as needed
          }}
        >
          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Amount</b>
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Tax</b>
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            <b>Total</b>
          </Typography>
        </Box>
        <Box sx={{ opacity: "40%" }}>
          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            3500
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            35
          </Typography>

          <Typography sx={{ fontSize: { sm: "18px", xs: "13px" }, mb: 1 }}>
            3535/=
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "200px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          href="/payment"
          sx={{
            bgcolor: "#0F3D3E",
            "&:hover": {
              bgcolor: "#0F3D3E", // Same color as background
            },
            fontSize: { sm: "18px", xs: "13px" },

            width: {
              sm: "25%",
              xs: "65%",
            }, // Add margin top for spacing
            borderRadius: 2,
            mb: 2,
          }}
        >
          Continue to payment
        </Button>
      </Box>
      <br />
    </Box>
  );
};

export default Bookingsummary;
