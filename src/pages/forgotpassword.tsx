import { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardContent } from "@mui/material";
import Image2 from '../Asset/_b3ab286a-7bdc-4643-b89a-90940be5e5e0.jpg'; // Import your background image

const Forgotpassword: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccessful, setResetSuccessful] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted successfully", email);
    console.log("New Password submitted successfully", newPassword);
    console.log("Confirm Password submitted successfully", confirmPassword);

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
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        backgroundImage: `url(${Image2})`, // Set the background image
        backgroundSize: "cover", // Cover the entire background
        backgroundPosition: "center", // Center the background
        backgroundRepeat: "no-repeat", // Don't repeat the background
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Card
        sx={{
          width: { sm: 500, xs: 300 },
          p: 2,
          boxShadow: 3,
          borderRadius: 4,
          bgcolor: "rgba(255, 255, 255, 0.8)", // Slight transparency for card
        }}
      >
        <CardContent>
          <Typography
            sx={{
              opacity: "50%",
              textAlign: "center",
              fontSize: { sm: "30px", xs: "20px" },
              mb: 2,
            }}
          >
            Reset Password
          </Typography>
          {!resetSuccessful ? (
            <Box sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    label="Email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{ mb: 2, width: "100%" }}
                  />
                  <TextField
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    sx={{ mb: 2, width: "100%" }}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    sx={{ mb: 2, width: "100%" }}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#0F3D3E",
                    width: "50%", // Reduce the width to 50%
                    mx: "auto", // Center the button
                    display: "block", // Ensures the button is centered
                    borderRadius: 2,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#0F3D3E",
                    },
                  }}
                >
                  Reset Password
                </Button>
              </form>
            </Box>
          ) : (
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              Password reset successful!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Forgotpassword;
