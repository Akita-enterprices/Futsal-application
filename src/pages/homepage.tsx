import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Home: React.FC<{}> = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f9f8fd",
                color: "black",
                fontSize: { xs: "1rem", sm: "1.5rem" },
                fontWeight: "bold",
                padding: { xs: 2, sm: 4 }
            }}
        >
            <Box sx={{
                width: { sm: "35%", xs: "100%" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
            }}>
                <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2", cursor: "pointer" }} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Box
                    sx={{
                        width: { sm: "400px", xs: "450px" },
                        height: { sm: "200px", xs: "200px" },
                        bgcolor: "#007EF2",
                    }}
                />
            </Box>
          
            <Box sx={{ display: "flex", flexDirection: "column", width: { sm: "30%", xs: "80%" }, gap: 2 }}>
            <Button
                    variant="contained"
                    href="/profile"
                    sx={{
                        bgcolor: "white",
                        color: "gray",
                        "&:hover": {
                            bgcolor: "#0F3D3E",
                            color: "white",
                        },
                    }}
                >profile
                </Button>
                
                <Button
                    variant="contained"
                    href="/booking"
                    sx={{
                        bgcolor: "white",
                        color: "gray",
                        "&:hover": {
                            bgcolor: "#0F3D3E",
                            color: "white",
                        },
                    }}
                >
                    Booking
                </Button>
                <Button
                    variant="contained"
                    href="/availability"
                    sx={{
                        bgcolor: "white",
                        color: "gray",
                        "&:hover": {
                            bgcolor: "#0F3D3E",
                            color: "white",
                        },
                    }}
                >
                    Availability
                </Button>
                <Button
                    variant="contained"
                    href="/review"
                    sx={{
                        bgcolor: "white",
                        color: "gray",
                        "&:hover": {
                            bgcolor: "#0F3D3E",
                            color: "white",
                        },
                    }}
                >
                    Reviews
                </Button>
            </Box>
        </Box>
    );
}

export default Home;
