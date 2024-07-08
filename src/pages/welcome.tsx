import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import dayjs, { Dayjs } from "dayjs";

const Welcome: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const verifyToken = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       if (token) {
  //         await axios.get('/api/auth/me', {
  //           headers: {
  //             Authorization: `Bearer ${token}` // Set token in Authorization header
  //           }
  //         });
  //         setAuthenticated(true);
  //       } else {
  //         throw new Error('No token found');
  //       }
  //     } catch (error) {
  //       console.log('Verification failed', error);
  //       navigate('/login');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   verifyToken();
  // }, [navigate]);

  // if (isLoading) {
  //   return <Typography>Loading...</Typography>;
  // }
  //  if(!isAuthenticated){
  //   return null;
  //  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          paddingBottom: 0,
          pt: { sm: 0, xs: 25 },
        }}
      >
        <Card
          sx={{
            width: { sm: "30%", xs: "95%" },
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            bgcolor: "#7F7F7F",
            height: "100%",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                color: "#F1F1F1",
                textAlign: "center",
                fontSize: { sm: "40px", xs: "30px" },
                fontWeight: "bold",
              }}
            >
              Welcome to your future of futsal
            </Typography>
            <br />
            <Typography
              sx={{
                color: "#F1F1F1",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: { sm: "30px", xs: "25px" },
              }}
            >
              Where ?
            </Typography>
            <br />

            <TextField
              type="text"
              placeholder="Enter location..."
              sx={{ bgcolor: "#d9dadb", borderRadius: 2, width: "100%" }}
              InputProps={{
                startAdornment: <LocationOnIcon />,
              }}
            />
            <br />
            <br />
            <Box
              width="100%"
              display={"flex"}
              flexDirection={"row"}
              sx={{ marginBottom: 2 }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Check-in{" "}
              </Typography>

              <DatePicker />
            </Box>

            <Box
              width="100%"
              display={"flex"}
              flexDirection={"row"}
              sx={{ marginBottom: 2 }}
            >
              <Typography
                sx={{ color: "white", width: "30%", fontWeight: "bold" }}
              >
                Check-in{" "}
              </Typography>

              <TimePicker />
            </Box>

            <Box
              width="100%"
              display={"flex"}
              flexDirection={"row"}
              sx={{ marginBottom: 2 }}
            >
              <Typography
                sx={{ color: "white", width: "30%", fontWeight: "bold" }}
              >
                Check-Out{" "}
              </Typography>

              <TimePicker />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                href="/nearcourt"
                sx={{
                  width: "70%",
                  bgcolor: "#0F3D3E",
                  "&:hover": {
                    bgcolor: "#0F3D3E", // Same color as background
                  },
                }}
              >
                Find
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default Welcome;
