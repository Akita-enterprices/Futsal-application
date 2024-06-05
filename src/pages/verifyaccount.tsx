import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const VerifyAccount: React.FC<{}> = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Backspace" && index !== 0 && verificationCode[index] === "") {
      const updatedCode = [...verificationCode];
      updatedCode[index - 1] = "";
      setVerificationCode(updatedCode);
    }
  };
  const handleVerify = () => {
    // Perform verification logic here
    // If verification succeeds, navigate to the welcome page
    navigate('/welcome');
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
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold" }}
      >
        <span style={{ color: "black" }}>Verify</span>{" "}
        <span style={{ color: "#E2DCC8" }}>Account</span>
      </Typography>
      <Typography sx={{ opacity: "55%", textAlign: "center" }}>
        Please enter the verification code sent to example@gmail.com
      </Typography>
      <br />
      <Box display={"flex"} flexDirection={"row"}>
        {verificationCode.map((value, index) => (
          <TextField
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%" }}
          />
        ))}
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleVerify}>
        Verify
      </Button>
      <Typography sx={{ opacity: "55%", textAlign: "center", mt: 2 }}>
        Didn't receive the code? <a href="#">Resend</a>
      </Typography>
    </Box>
  );
};

export default VerifyAccount;
