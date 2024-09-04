import { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Courtcard from "../component/courtcard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

interface Court {
  _id: string;
  rating: number;
  name: string;
  address: string;
  dayRate: number;
  futsalName: string;
  fileName: { url: string; filename: string };
}

const Nearcourt: React.FC<{}> = () => {
  const [court, setCourt] = useState<Court[]>([]);
  const [showAllNearLocation, setShowAllNearLocation] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState<Dayjs | null>(dayjs());
  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(dayjs());
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admin`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courts");
        }
        const data = await response.json();
        setCourt(data);
      } catch (error) {
        console.error("Error fetching courts:", error);
      }
    };

    fetchCourts();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          height: "auto",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f9f8fd",
          fontSize: "1.5rem",
          fontWeight: "bold",
          maxWidth: "100%",
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            textAlign: "center",
          }}
        >
          <Box sx={{ textAlign: "left", width: { sm: "60%", xs: "60%" } }}>
            <Typography sx={{ color: "grey", fontSize: "12px", mb: 2 }}>
              Your current location
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              <LocationOnIcon sx={{ fontSize: "15px", color: "purple" }} />{" "}
              Watadeniya, Gampola
            </Typography>
          </Box>
          <Box sx={{ mt: 2, textAlign: "left" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Welcome to the Future of Futsal
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              width: { sm: "75%", xs: "270px" },
              bgcolor: "#D9D9D9",
              borderRadius: "80px",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search address, city, location"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <br />
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "row",
              gap: { sm: 26, xs: 15 },
              width: { sm: "450px", xs: "350px" },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { sm: "17px", xs: "13px" } }}
            >
              Near your location
            </Typography>

            {court.length > 2 && (
              <Button
                onClick={() => setShowAllNearLocation(!showAllNearLocation)}
                sx={{ textTransform: "none", color: "#007EF2" }}
              >
                {showAllNearLocation ? "See Less" : "See All"}
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: showAllNearLocation ? "column" : "row",
                gap: 2,
                width: "100%",
                overflowX: showAllNearLocation ? "visible" : "auto",
                justifyContent: showAllNearLocation ? "flex-start" : "center",
                alignItems: "center",
                padding: showAllNearLocation ? 0 : "0 10px",
                whiteSpace: showAllNearLocation ? "normal" : "nowrap",
                scrollBehavior: "smooth",
              }}
            >
              {court
                .slice(0, showAllNearLocation ? court.length : 2)
                .map((court) => (
                  <Link
                    to={`/courtdetails/${court._id}`}
                    key={court._id}
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      width: showAllNearLocation ? "100%" : "auto",
                    }}
                  >
                    <Courtcard
                      rating={court.rating}
                      link={`/courtdetails/${court._id}`}
                      title={court.futsalName}
                      description={court.address}
                      price={`$ ${court.dayRate}`}
                      image={court.fileName?.url}
                    />
                  </Link>
                ))}
            </Box>
          </Box>

          <br />
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "row",
              gap: { sm: 32, xs: 15 },
              width: { sm: "450px", xs: "350px" },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { sm: "17px", xs: "13px" } }}
            >
              All courts
            </Typography>

            {court.length > 2 && (
              <Button
                onClick={() => setShowAll(!showAll)}
                sx={{ textTransform: "none", color: "#007EF2" }}
              >
                {showAll ? "See Less" : "See All"}
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%", // Ensure the container takes up the full width
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: showAll ? "column" : "row",
                gap: 2,
                width: "100%",
                overflowX: showAll ? "visible" : "auto",
                justifyContent: showAll ? "flex-start" : "center",
                alignItems: "center",
                padding: showAll ? 0 : "0 10px",
                whiteSpace: showAll ? "normal" : "nowrap",
                scrollBehavior: "smooth",
              }}
            >
              {court.slice(0, showAll ? court.length : 2).map((court) => (
                <Link
                  to={`/courtdetails/${court._id}`}
                  key={court._id}
                  style={{
                    textDecoration: "none",
                    display: "inline-block",
                    width: showAll ? "100%" : "auto",
                  }}
                >
                  <Courtcard
                    rating={court.rating}
                    link={`/courtdetails/${court._id}`}
                    title={court.futsalName}
                    description={court.address}
                    price={`$ ${court.dayRate}`}
                    image={court.fileName?.url}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Nearcourt;
