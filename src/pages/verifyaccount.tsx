import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Verifyaccount: React.FC<{}> = () => {
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
        fontweight: "bold",
        maxWidth: "100%",
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold" }}
      >
        <span style={{ color: "black" }}>Verify</span>
        <span style={{ color: "#E2DCC8" }}>Account</span>
      </Typography>
      <Typography sx={{ opacity: "55%", textAlign: "center" }}>
        Please enter the verification code sent to example@gmail.com
      </Typography>
      <br />
      <Box display={"flex"} flexDirection={"row"}>
        <TextField
          type="number"
          sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%" }}
        />
        <TextField
          type="number"
          sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%" }}
        />
        <TextField
          type="number"
          sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%" }}
        />
        <TextField
          type="number"
          sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};
export default Verifyaccount;
