import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Payment: React.FC<{}> = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "130vh" },
        width: { sm: "100%", xs: "100%" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        fontSize: "1.5rem",
        fontWeight: "bold",
        maxWidth: "100%",
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
        <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2" }} />{" "}
        <Typography
          sx={{
            fontSize: { sm: "18px", xs: "20px" },
            width: { sm: "30%", xs: "80%" },
            textAlign: "center",
            color: "#007EF2",
            fontWeight: "bold",
          }}
        >
          Payment
        </Typography>
      </Box>{" "}
      <br />
      <Box
        sx={{
          bgcolor: "#e9f5f9",
          width: { sm: "40%", xs: "100%" },
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex", // Added display:flex to center its children
          flexDirection: "column",
          ml: { sm: 50, xs: 0 },
        }}
      >
        <Typography>Total Price</Typography>

        <Typography
          sx={{
            color: "#007EF2",
            fontWeight: "bold",
            fontSize: { sm: "30px", xs: "20px" },
          }}
        >
          RS 3535/ =
        </Typography>
        <Typography sx={{ opacity: "60%" }}>5% vst included</Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography>Payment method</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "center", xs: "left" },
          justifyContent: { sm: "center", xs: "left" },
          width: { sm: "100%", xs: "100%" },
          padding: { sm: 0, xs: 2 },
        }}
      >
        <Typography
          mr={29}
          mt={2}
          sx={{ opacity: "50%", fontSize: { sm: "18px", xs: "16px" } }}
        >
          <b>Card Holder Name</b>
        </Typography>
        <TextField
          placeholder="Your Name"
          type="name"
          sx={{
            mt: 2,
            width: { sm: "30%", xs: "60%" },
          }}
        />
        <Typography
          mr={{ sm: 34, xs: 2 }}
          mt={{ sm: 2, xs: 2 }}
          sx={{ opacity: "50%", fontSize: { sm: "18px", xs: "16px" } }}
        >
          <b>Card Number</b>
        </Typography>
        <TextField
          label="**** **** ****"
          type="password"
          sx={{
            mt: 2,
            width: { sm: "30%", xs: "70%" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { sm: "100%", xs: "100%" },
          padding: { sm: 0, xs: 2 },
        }}
      >
        {" "}
        <Typography ml={{ sm: 54, xs: 0 }} mt={2} sx={{ opacity: "50%" }}>
          <b>Expiry date</b>
        </Typography>
        <Typography ml={15} mt={2} sx={{ opacity: "50%" }}>
          <b>CVV</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: { sm: "100%", xs: "80%" },
          padding: { sm: 0, xs: 1 },
        }}
      >
        <TextField
          label="MM/YY"
          type="name"
          sx={{
            mt: 2,
            width: { sm: "15%", xs: "50%" },
          }}
        />

        <TextField
          label="****"
          type="password"
          sx={{
            mt: 2,
            width: { sm: "15%", xs: "40%" },
            ml: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          href="/congrats"
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
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
export default Payment;
