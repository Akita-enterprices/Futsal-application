import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import GradeIcon from "@mui/icons-material/Grade";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface CourtcardProps {
  rating: number;
  link: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const Courtcard: React.FC<CourtcardProps> = ({
  rating,
  link,
  title,
  description,
  price,
  image,
}) => (
  <Box>
    <Card
      sx={{
        bgcolor: " #D9D9D9",
        width: { sm: "180px", xs: "90%" },
        height: "400px",
        mr: 3,
        p: 2,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "40%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Box
        component="a"
        href={link}
        sx={{
          width: "60%",
          height: "100%",
          ml: 2,
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <GradeIcon sx={{ color: "orange", fontSize: "20px", mr: 1 }} />
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { sm: "19px", xs: "10px" },
            }}
          >
            {rating}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
            fontSize: { sm: "15px", xs: "10px", color: "black" },
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOnIcon sx={{ fontSize: 18, color: "#0a0a0a" }} />
          <Typography
            variant="body2"
            color="#0a0a0a"
            sx={{ fontWeight: "bold", ml: 1 }}
          >
            {description}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="#0a0a0a"
          sx={{ textAlign: "left", fontWeight: "bold", mt: "auto" }}
        >
          {price}
        </Typography>
      </Box>
    </Card>
  </Box>
);

export default Courtcard;
