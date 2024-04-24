import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Forgotpassword: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccessful, setResetSuccessful] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted successfully", email);
    console.log("Email submitted successfully", newPassword);
    console.log("Email submitted successfully", confirmPassword);

    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setResetSuccessful(true);
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
      }}
    >
      <Typography
        sx={{
          opacity: "50%",
          textAlign: "center",
          fontSize: { sm: "30px", xs: "20px" },
        }}
      >
        Reset password
      </Typography>
      {!resetSuccessful ? (
        <Box sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: {
                  sm: "100%",
                  xs: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {" "}
              <TextField
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2, width: { sm: 500, xs: 250 } }}
              />
              <br />
              <TextField
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                sx={{ mb: 2, width: { sm: 500, xs: 250 } }}
              />
              <br />
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                sx={{ mb: 2, width: { sm: 500, xs: 250 } }}
              />
              <br />
            </Box>
            <Box>
              {" "}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#0F3D3E",
                  width: {
                    sm: "auto",
                    xs: "80%",
                  },
                  borderRadius: 2,
                  mb: 2,
                  "&:hover": {
                    bgcolor: "#0F3D3E", // Same color as background
                  },
                }}
              >
                Reset Password
              </Button>
            </Box>
          </form>
        </Box>
      ) : (
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Password reset successful!
        </Typography>
      )}
    </Box>
  );
};

export default Forgotpassword;
