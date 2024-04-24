import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const Welcome: React.FC<{}> = () => {
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
        paddingBottom: 0,
        pt: { sm: 0, xs: 25 },
      }}
    >
      <Card
        sx={{
          width: { sm: "30%", xs: "95%" }, // Adjust width as needed
          borderTopLeftRadius: "50px", // Set border radius for top left corner
          borderTopRightRadius: "50px", // Set border radius for top right corner
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
            label="Enter location..."
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

            <TextField
              label="DD/MM/YY"
              sx={{
                ml: 5,
                width: "70%",
                height: "10%",
                bgcolor: "#d9dadb",
                borderRadius: 2,
              }}
              InputProps={{
                startAdornment: <CalendarTodayIcon sx={{ marginRight: 1 }} />,
              }}
            />
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

            <TextField
              sx={{
                ml: 5,
                width: "70%",
                height: "10%",
                bgcolor: "#d9dadb",
                borderRadius: 2,
              }}
              InputProps={{
                startAdornment: (
                  <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
                ),
              }}
            />
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

            <TextField
              sx={{
                ml: 5,
                width: "70%",
                height: "10%",
                bgcolor: "#d9dadb",
                borderRadius: 2,
              }}
              InputProps={{
                startAdornment: (
                  <AccessTimeFilledIcon sx={{ marginRight: 1 }} />
                ),
              }}
            />
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
  );
};

export default Welcome;
