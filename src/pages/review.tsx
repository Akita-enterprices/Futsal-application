import React from 'react';
import {Box, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import  Card from "../component/Review";

const Review: React.FC<{}> = () =>{
    const goBack = () => {
        window.history.back();
    };


    return(
        <Box sx={{  height:"150vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",}}>
             <Box sx={{
                width: { sm: "42%", xs: "90%" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
            }}>
                <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2", cursor: "pointer" }} />
            </Box>
            <Typography>Reviews</Typography><br/>
            <Card /><br/>
            <Card/><br/>
            <Card/><br/>
            <Card/>
            
            </Box>
    );
}
export default Review;