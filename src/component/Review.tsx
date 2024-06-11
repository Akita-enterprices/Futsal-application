import * as React from "react";
import { Box, Typography, Card, TextField, Button } from "@mui/material";

export default function OutlinedCard() {
  const [review, setReview] = React.useState<string>("");

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  const handleDeleteReview = () => {
    setReview("");
  };

  const card = (
    <React.Fragment>
      <Box
        sx={{
          m: 2,
          width: "60px",
          height: "60px",
          bgcolor: "#0F3D3E",
          borderRadius: "50px",
        }}
      ></Box>
      <Box>
        <Typography
          sx={{
            color: "black",
            textAlign: "left",
            mt: "10px",
            fontSize: "10px",
          }}
        ></Typography>
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography
          sx={{
            color: "black",
            textAlign: "left",
            mt: "10px",
            fontSize: "10px",
          }}
        >
          Review: 
           {review}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleDeleteReview} sx={{ mt: 6,width:"50%",height:"20%",fontSize:"10px",bgcolor:"#0F3D3E"}}>
          Delete 
        </Button>
      </Box>
      
       
      
    </React.Fragment>
  );

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        {/* <TextField
          label="Review"
          value={review}
          onChange={handleReviewChange}
          sx={{ mr: 2 }}
        /> */}
      </Box>
      <Card
        sx={{
          width: {sm:"500px",xs:"250px"},
          height: "100px",
          display: "flex",
          flexDirection: "row",
          bgcolor: "#f5f3f4",
        }}
      >
        {card}
      </Card>
  
    </Box>
  );
}
