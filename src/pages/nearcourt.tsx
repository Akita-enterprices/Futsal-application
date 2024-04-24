import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import Courtcard from "../component/courtcard";

const Nearcourt: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        color: "black",
        display: "flex",
        flexDirection: "column",
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
          width: { sm: "50%", xs: "100" },

          height: "100%",
        }}
      >
        <Typography
          sx={{
            mt: 3,
            ml: { sm: 15, xs: 5 },
            fontWeight: "bold",
            fontSize: { sm: "30px", xs: "20px" },
          }}
        >
          Location
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { sm: "35px", xs: "20px" },
          }}
        >
          Gampola
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <TextField
            sx={{
              ml: 5,
              width: { sm: "50%", xs: "65%" },
              bgcolor: "#D9D9D9",
              borderRadius: 3,
              "& .MuiInputBase-input": {
                // Targeting the input element
                paddingTop: "8px", // Adjust top padding
                paddingBottom: "8px", // Adjust bottom padding
                fontSize: "0.875rem", // Adjust font size
              },
            }}
            InputProps={{
              startAdornment: <CalendarTodayIcon sx={{ marginRight: 1 }} />,
            }}
          />
          <br />
          <br />
          <TextField
            name="search"
            sx={{
              width: { sm: "70%", xs: "100%" },

              bgcolor: "#D9D9D9",
              borderRadius: 2,
              "& .MuiInputBase-input": {
                // Targeting the input element
                paddingTop: "8px", // Adjust top padding
                paddingBottom: "8px", // Adjust bottom padding
                fontSize: "0.875rem", // Adjust font size
              },
            }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
            }}
          />
        </Box>
        <br />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { sm: "20px", xs: "20px" },
          }}
        >
          Near court
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Courtcard />
        </Box>
      </Box>
    </Box>
  );
};
export default Nearcourt;
