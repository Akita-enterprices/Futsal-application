import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    console.log("Submitted password:", password);

    setEmail("");
    setPassword("");
  };
  const [clicked, setClicked] = useState(false);

  const goBack = () => {
    setClicked(true);
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
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          width: { sm: "42%", xs: "100%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        {" "}
        <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2" }} />
      </Box>

      <Typography
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold", mb: 2 }}
      >
        <span style={{ color: "black" }}>Welcome</span>
        <span style={{ color: "#E2DCC8" }}>Back</span>
      </Typography>
      <Typography sx={{ opacity: "55%", fontSize: { sm: "15px", xs: "14px" } }}>
        We missed you! Login to continue your journey with us.
      </Typography>
      <Box
        sx={{
          mt: 2,
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box>
            <EmailOutlinedIcon color="action" sx={{ marginRight: 1 }} />
            <TextField
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <br />
          <Box>
            {" "}
            <VpnKeyOutlinedIcon color="action" sx={{ marginRight: 1 }} />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <br />
          <Typography sx={{ opacity: "35%", textAlign: "left" }}>
            <a href="/forgotpassword">Forgot password</a>
          </Typography>
          <br />
          <Button
            type="submit"
            href="/welcome"
            variant="contained"
            sx={{
              bgcolor: "#0F3D3E",

              width: {
                sm: "50%",
                xs: "50%",
              }, // Add margin top for spacing
              borderRadius: 2,
              mb: 2,
              "&:hover": {
                bgcolor: "#0F3D3E", // Same color as background
              },
            }}
          >
            Login
          </Button>

          <Typography sx={{ opacity: "35%", textAlign: "center" }}>
            _______ Or continue with ______
          </Typography>
        </form>
      </Box>
      <br />
      <Typography sx={{ color: "grey", "& a": { color: "yellow" } }}>
        Does have an account? <a href="/createaccount">signUp</a>
      </Typography>
    </Box>
  );
};
export default Login;
