import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Verifyaccount: React.FC<{}> = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"verifying" | "success" | "error">("verifying");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      axios
        .get(`http://localhost:4000/api/auth/verify-email?token=${token}`)
        .then((res) => {
          setStatus("success");
          setMessage(res.data.message);
        })
        .catch((err) => {
          setStatus("error");
          setMessage(err.response?.data?.message || "Verification failed.");
        });
    } else {
      setStatus("error");
      setMessage("Token not found in URL.");
    }
  }, [searchParams]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        textAlign: "center",
        px: 2,
      }}
    >
      {status === "verifying" && (
        <>
          <CircularProgress />
          <Typography mt={2}>Verifying your account...</Typography>
        </>
      )}

      {status === "success" && (
        <>
          <Typography variant="h5" color="green">{message}</Typography>
          <Button
            onClick={() => navigate("/login")}
            variant="contained"
            sx={{ mt: 3, bgcolor: "#0F3D3E" }}
          >
            Go to Login
          </Button>
        </>
      )}

      {status === "error" && (
        <>
          <Typography variant="h5" color="red">{message}</Typography>
          <Button
            onClick={() => navigate("/signup")}
            variant="contained"
            sx={{ mt: 3, bgcolor: "#0F3D3E" }}
          >
            Go Back to Signup
          </Button>
        </>
      )}
    </Box>
  );
};

export default Verifyaccount;


// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import Keypad from "../component/Keypad";

// const Verifyaccount: React.FC<{}> = () => {
//   const [code, setCode] = useState<string[]>(["", "", "", ""]);
//   const [error, setError] = useState<string>("");

//   // Mock correct code received from the backend or another service
//   const correctCode = ["1", "2", "3", "4"];

//   const goBack = () => {
//     window.history.back();
//   };

//   const handleDigitClick = (digit: string) => {
//     const newCode = [...code];
//     for (let i = 0; i < newCode.length; i++) {
//       if (newCode[i] === "") {
//         newCode[i] = digit;
//         break;
//       }
//     }
//     setCode(newCode);
//   };

//   const handleCloseClick = () => {
//     const newCode = [...code];
//     for (let i = newCode.length - 1; i >= 0; i--) {
//       if (newCode[i] !== "") {
//         newCode[i] = "";
//         break;
//       }
//     }
//     setCode(newCode);
//   };

//   const handleCodeChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newCode = [...code];
//     newCode[index] = event.target.value;
//     setCode(newCode);
//   };

//   const handleSubmit = () => {
//     if (code.join("") === correctCode.join("")) {
//       window.location.href = "/Register";
//     } else {
//       setError("The entered code is incorrect. Please try again.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         bgcolor: "#f9f8fd",
//         color: "black",
//         fontSize: "1.5rem",
//         fontWeight: "bold",
//         maxWidth: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           width: { sm: "42%", xs: "90%" },
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "left",
//           alignItems: "left",
//         }}
//       >
//         <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2", cursor: "pointer" }} />
//       </Box>
//       <Typography
//         sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold" }}
//       >
//         <span style={{ color: "black" }}>Verify</span>
//         <span style={{ color: "#E2DCC8" }}>Account</span>
//       </Typography>
//       <Typography sx={{ opacity: "55%", textAlign: "center" }}>
//         Please enter the verification code sent to example@gmail.com
//       </Typography>
//       <br />
//       <Box display={"flex"} flexDirection={"row"} mb={2}>
//         {code.map((digit, index) => (
//           <TextField
//             key={index}
//             type="text"
//             value={digit}
//             onChange={handleCodeChange(index)}
//             inputProps={{ maxLength: 1 }}
//             sx={{ mr: 2, width: { sm: "50px", xs: "50px" }, maxWidth: "100%", textAlign: "center" }}
//           />
//         ))}
//       </Box>
//       {error && <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>}
//       <Typography sx={{ color: "grey", "& a": { color: "yellow" } }}>
//         Didn't receive code? <a href="">Resend again</a>
//       </Typography>
//       <br />
//       <Button
//         onClick={handleSubmit}
//         variant="contained"
//         sx={{
//           bgcolor: "#0F3D3E",
//           "&:hover": {
//             bgcolor: "#0F3D3E",
//           },
//           width: {
//             sm: "30%",
//             xs: "50%",
//           },
//           borderRadius: 2,
//           mb: 2,
//         }}
//       >
//         Verify
//       </Button>
//       <br />
//       <Keypad onDigitClick={handleDigitClick} onCloseClick={handleCloseClick} />
//     </Box>
//   );
// };

// export default Verifyaccount;
