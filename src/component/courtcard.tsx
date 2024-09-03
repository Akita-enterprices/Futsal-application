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
        bgcolor: "#D9D9D9",
        width: "300px", // Reduced width
        height: "150px", // Reduced height
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
          width: "35%", // Reduced image width
          height: "100%",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      {/* Card content */}
      <Box
        component="a"
        href={link}
        sx={{
          width: "65%", // Adjusted content width
          height: "100%",
          ml: 2,
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <GradeIcon sx={{ color: "orange", fontSize: "18px", mr: 1 }} />
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { sm: "17px", xs: "10px" },
            }}
          >
            {rating}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
            fontSize: { sm: "13px", xs: "10px" },
            color: "black",
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOnIcon sx={{ fontSize: 16, color: "#0a0a0a" }} />
          <Typography
            variant="body2"
            color="#0a0a0a"
            sx={{ fontWeight: "bold", ml: 1, fontSize: "12px" }}
          >
            {description}
          </Typography>
        </Box>

        {/* Day and Night Rates */}
        <Box sx={{ mb: 1 }}>
          <Typography
            fontSize={{ sm: "12px", xs: "10px" }}
            sx={{ color: "black", mr: 12 }}
          >
            <span style={{ fontWeight: "bold" }}>Day: 2500/=</span> <br />
            <span style={{ fontWeight: "bold" }}>Night: 3000/=</span>
          </Typography>
        </Box>

        {/* Price */}
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
