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
}

const Courtcard: React.FC<CourtcardProps> = ({ rating, link, title, description , price}) => (
  <Box>
    <Card sx={{ bgcolor: " #D9D9D9", width: "180px", height: "300px", mr: 3, p: 2 }}>
   
      <Box
        sx={{
          m: 1,
          width: "90%",
          height: "40%",
          bgcolor: "#007EF2",
          borderRadius: 3,
        }}
      />
      <Box
        component={"a"}
        href={link}
        sx={{
          bgcolor: "#007EF2",
          borderRadius: 2,
          width: "30%",
          height: "6%",
          ml: 'auto',
          display: "flex",
          flexDirection: "row",
          textDecoration: "none",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
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
          {rating}
        </Typography>
      </Box>
      <Typography variant="h6" component="div" sx={{ mb: 1, fontWeight: 'bold',textAlign:"left" ,ml:1}}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
        <LocationOnIcon sx={{ fontSize: 18, color: '#0a0a0a' }} />
        <Typography variant="body2" color="#0a0a0a" sx={{  fontWeight: "bold" }}>
          {description}
        </Typography>
      </Box><br/>
      <Typography variant="body2" color="#0a0a0a" sx={{ mb: 2,ml:1,textAlign:"left",fontWeight:"bold" }}>
       { price }
     </Typography>
    </Card>
  </Box>
);

export default Courtcard;
