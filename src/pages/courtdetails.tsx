import React, { useEffect, useState } from "react";
import { Typography, Box, IconButton, Grid, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GradeIcon from "@mui/icons-material/Grade";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useParams } from "react-router-dom";

interface CourtData {
  futsalName: string;
  name: string;
  dayRate: number;
  nightRate: number;
  fileName: { fileName: string; url: string; _id: string };
  // Add other properties as per your data structure
}

const Courtdetails: React.FC<{}> = () => {
  const { courtId } = useParams<{ courtId: string }>();
  const [data, setData] = useState<CourtData | null>(null);

  // Fetch court details using courtId
  // Example fetch or useEffect to fetch court details based on courtId
  useEffect(() => {
    const fetchCourtDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admin/${courtId}`
        ); // Replace with your actual API endpoint for court details
        if (!response.ok) {
          throw new Error("Failed to fetch court details");
        }
        const data = await response.json();
        console.log("data", data.fileName.url);

        setData(data);
      } catch (error) {
        console.error("Error fetching court details:", error);
      }
    };

    fetchCourtDetails();
  }, [courtId]);

  const goBack = () => {
    window.history.back();
  };

  if (!data) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f9f8fd",
        fontSize: "1.5rem",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2" }} />{" "}
        <Typography
          sx={{
            fontSize: { sm: "18px", xs: "18px" },
            width: { sm: "30%", xs: "60%" },
            textAlign: "center",
            color: "#007EF2",
            fontWeight: "bold",
          }}
        >
          Court Details
        </Typography>
        <Box>
          <IconButton
            aria-label="share"
            sx={{ width: "30%", color: "#007EF2" }}
          >
            <ShareIcon />
          </IconButton>{" "}
          <IconButton
            aria-label="add to favorites"
            sx={{ width: "50%", color: "#007EF2" }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <br />
      <Box
        component="img"
        src={data.fileName?.url}
        sx={{
          objectFit: "cover",
          alt: "image",
          height: "40%",
          width: { sm: "40%", xs: "100%" },
          ml: { sm: 45, xs: 0 },
        }}
      ></Box>
      <br />
      <Box sx={{ ml: { sm: 45, xs: 0 }, padding: { sm: 0, xs: 2 } }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { sm: "20px", xs: "15px" } }}
        >
          {data.futsalName}
        </Typography>
        <Box
          component={"a"}
          sx={{
            bgcolor: "#e9f5f9",
            borderRadius: 2,
            width: { sm: "20%", xs: "35%" },
            height: "10%",
            ml: { sm: 38, xs: 25 },
            display: "flex",
            flexDirection: "row",
          }}
        >
          <GradeIcon
            sx={{
              color: "yellow",
              fontSize: { sm: "20px", xs: "20px" },
              m: "2px",
            }}
          />
          <Typography
            sx={{
              color: "blue",
              textAlign: "center",
              m: "2px",

              fontSize: { sm: "15px", xs: "10px" },
            }}
          >
            {" "}
            <a href="/">4.5 (120 Reviews)</a>
          </Typography>
        </Box>
        <Box sx={{ width: { sm: "60% ", xs: "100%" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { sm: "20px", xs: "15px" },
              opacity: "80%",
              mb: 2,
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{ fontSize: { sm: "14px", xs: "13px" }, opacity: "40%" }}
          >
            Nestled in the lush tropical paradise of Jimbaran, Bali, AYANA
            Resort and Spa offers an enchanting escape for travelers seeking
            luxury, relaxation, and breathtaking ocean views.
            <a href="/" color="yellow">
              Read more
            </a>
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight={"bold"} mt={3}>
            Available Time Slots
          </Typography>
        </Box>
        <Grid
          container
          mt={2}
          spacing={1} // Adjust the spacing between items
          width={{ sm: "60%", xs: "100%" }}
        >
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>10:30 a.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>17:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>20:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>12:30 a.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>12:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>18:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>22:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>14:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>19:30 p.m</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                borderRadius: 1,
                height: "auto",
                width: { sm: "70%", xs: "100%" },
                bgcolor: "#D9D9D9",
              }}
            >
              <Typography fontWeight={"bold"}>23:30 p.m</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", opacity: "90%", mt: 2, fontSize: "20px" }}
          >
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <PersonRoundedIcon
              sx={{
                color: "white",
                bgcolor: "lightblue",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />
            <Typography sx={{ ml: 2 }}>
              <b>{data.name}</b>
              <br /> Receptionist
            </Typography>

            <LocalPhoneRoundedIcon
              sx={{
                color: "white",
                bgcolor: "#007EF2",
                borderRadius: "50%",
                padding: "0.5rem",
                ml: 7,
              }}
            />
            <EmailRoundedIcon
              sx={{
                color: "white",
                bgcolor: "#007EF2",
                borderRadius: "50%",
                padding: "0.5rem",
                ml: 2,
              }}
            />
          </Box>
        </Box>
        <br />
        <Box
          mt={2}
          display={"flex"}
          flexDirection={"row"}
          width={{ sm: "100%", xs: "100%" }}
        >
          <Typography fontSize={{ sm: "18px", xs: "11px" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>{data.dayRate}/=</span>{" "}
            <span style={{ fontWeight: "lighter" }}>Day</span> <br />
            <span style={{ fontWeight: "bold" }}>{data.nightRate}/=</span>{" "}
            <span style={{ fontWeight: "lighter" }}>Night</span> <br />
          </Typography>
          <Button
            type="submit"
            variant="contained"
            href="/bookingsummary"
            sx={{
              ml: 15,
              fontWeight: "bold",
              bgcolor: "#0F3D3E",
              height: "auto",
              "&:hover": {
                bgcolor: "#0F3D3E", // Same color as background
              },

              width: {
                sm: "20%",
                xs: "40%",
              }, // Add margin top for spacing
              borderRadius: 2,
              mb: 2,
            }}
          >
            Book Now
          </Button>
        </Box>
        <br />
      </Box>
    </Box>
  );
};

export default Courtdetails;
