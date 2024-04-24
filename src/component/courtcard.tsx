import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";

import GradeIcon from "@mui/icons-material/Grade";

const card = (
  <React.Fragment>
    <Box
      sx={{
        m: 2,
        width: "85%",
        height: "50%",
        bgcolor: "#007EF2",
        borderRadius: 3,
      }}
    ></Box>
    <Box
      component={"a"}
      href="/courtdetails"
      sx={{
        bgcolor: "#007EF2",
        borderRadius: 3,
        width: "30%",
        height: "10%",
        ml: 15,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <GradeIcon sx={{ color: "#ffffff", fontSize: "20px", m: "2px" }} />
      <Typography
        sx={{
          color: "black",
          textAlign: "center",
          m: "2px",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        {" "}
        4.5
      </Typography>
    </Box>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
      <Card sx={{ bgcolor: " #D9D9D9", width: "200px", height: "300px" }}>
        {card}
      </Card>
    </Box>
  );
}
