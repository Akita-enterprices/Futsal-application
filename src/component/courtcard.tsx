import * as React from "react";
import { Box, Typography, Card } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface CourtcardProps {
  _id: string;
  futsalName: string;
  address: string;
  dayRate: number;
  nightRate: number;
  capacity: number;
  length: number;
  width: number;
  specification: string;
  fileName: { url: string }[];
}

const Courtcard: React.FC<CourtcardProps> = ({
  _id,
  futsalName,
  address,
  dayRate,
  nightRate,
  capacity,
  length,
  width,
  specification,
  fileName,
}) => {
  const imageUrl = fileName?.[0]?.url || "/placeholder.jpg";

  return (
    <Box>
      <Card
        sx={{
          bgcolor: "#D9D9D9",
          width: 300,
          height: { sm: 200, xs: 160 },
          mr: 3,
          p: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={imageUrl}
          alt={futsalName}
          sx={{
            width: "45%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        {/* Content */}
        <Box
          component="a"
          href={`/court/${_id}`}
          sx={{
            ml: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {/* Futsal Name */}
          <Typography
            sx={{
              fontSize: { sm: 14, xs: 11 },
              fontWeight: 700,
              mb: 0.5,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {futsalName}
          </Typography>

          {/* Address */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: { sm: 16, xs: 12 }, color: "#0a0a0a" }} />
            <Typography
              sx={{
                ml: 0.5,
                fontSize: { sm: 12, xs: 10 },
                fontWeight: 500,
              }}
            >
              {address}
            </Typography>
          </Box>

          {/* Rates */}
          <Typography sx={{ fontSize: { sm: 12, xs: 10 }, fontWeight: 600 }}>
            Day: {dayRate}/= | Night: {nightRate}/=
          </Typography>

          {/* Capacity & Size */}
          <Typography sx={{ fontSize: { sm: 12, xs: 10 }, fontWeight: 500 }}>
            Capacity: {capacity}, Size: {length}m x {width}m
          </Typography>

          {/* Specification */}
          <Typography sx={{ fontSize: { sm: 12, xs: 10 }, fontStyle: "italic", mt: "auto" }}>
            Spec: {specification}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Courtcard;
