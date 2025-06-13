import { useEffect, useState } from "react";
import { Box, Typography, Button, TextField, Card, CardMedia, } from "@mui/material";
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
  futsalName: string;
  address: string;
  dayRate: number;
  nightRate: number;
  capacity: number;
  length: number;
  width: number;
  specification: string;
  fileName: { url: string; filename: string }[];
  sports: string[];
  agreeTerms: boolean;
  isVerified: boolean;
  verificationToken: string | null;
}


const Nearcourt: React.FC<{}> = () => {
  const [court, setCourt] = useState<Court[]>([]);
  const [showAllNearLocation, setShowAllNearLocation] = useState(false);
  const [showAllAllCourts, setShowAllAllCourts] = useState(false);
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
          `${process.env.REACT_APP_API_URL}/api/courts`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courts");
        }
        const data = await response.json();
        setCourt(data.courts);
      } catch (error) {
        console.error("Error fetching courts:", error);
      }
    };
    console.log("Fetched courts:", court);

    fetchCourts();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosePopover = () => {
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
          <Box
            sx={{
              width: { sm: "60%", xs: "85%" },
              height: { sm: "auto", xs: "auto" },
              marginTop: 3,
              marginLeft: { sm: 2, xs: "0%" },
              marginRight: { sm: 0, xs: "auto" },
              textAlign: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
              sx={{
                bgcolor: "#0F3D3E",
                "&:hover": {
                  bgcolor: "#0F3D3E",
                },
                width: { sm: "100%", xs: "100%" },
                borderRadius: "80px",
              }}
            >
              Find the available time
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              PaperProps={{
                sx: {
                  width: { xs: '100%', sm: '100%' }, // Fullscreen on desktop
                  height: { xs: 'auto', sm: '100%' }, // Fullscreen height on desktop
                  position: { xs: 'absolute', sm: 'absolute' }, // Position absolute for full-screen
                  top: 0, // Start at the top
                  left: 0, // Align to the left side
                  right: 0, // Align to the right side
                  bottom: 0, // Align to the bottom
                },
              }}
            >
              <Box
                sx={{
                  width: { sm: '100%', xs: '100%' }, // Full width in desktop and mobile
                  p: 3,
                  textAlign: 'left',
                  height: '100%', // Full height in desktop

                }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                    flexDirection: "column",

                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#f0ede3",
                      height: { sm: "20%", xs: "30%" },
                      width: { sm: "25%", xs: "70%" },
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center", // Center the text vertically
                      textAlign: "center", // Ensure the text is centered
                      padding: 1, // Optional: add padding for a better look

                    }}
                  >
                    <Typography sx={{ fontSize: { sm: "16px", xs: "12px" } }}>Find the Available Time</Typography>
                  </Box>
                  <br />

                  {/* Search Bar inside the Popover */}
                  <Box
                    sx={{
                      textAlign: "center",
                      mt: 2,
                      width: { sm: "25%", xs: "270px" },
                      bgcolor: "#f2f2f3",
                      borderRadius: "10px", // Set border radius to 10

                    }}
                  >
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon sx={{ fontSize: { sm: "26px", xs: "12px" } }} />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Gampola"
                        inputProps={{ "aria-label": "search" }}
                        sx={{ fontSize: { sm: "16px", xs: "12px" } }}
                      />
                    </Search>
                  </Box>
                  <br />

                  <Box
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      height: "50%", // Inner box height less than popup
                      overflowY: "auto", // Adds scroll if content overflows
                      bgcolor: "#f0ede3",
                      borderRadius: 10,
                      boxShadow: 3,
                      '@media (max-width: 600px)': { // Mobile view
                        p: 2,
                        height: "auto",
                      }
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        mb: 2,

                        flexWrap: 'wrap', // Allows wrapping on smaller screens
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { sm: "15px", xs: "12px" },
                        }}
                      >
                        Check-in
                      </Typography>
                      <DatePicker
                        value={checkInDate}
                        onChange={(newValue) => setCheckInDate(newValue)}
                        sx={{
                          bgcolor: "#d9d9d9",
                          fontSize: { sm: "14px", xs: "11px" }, // Adjust font size for mobile
                          '& .MuiInputBase-input': {
                            fontSize: { sm: "14px", xs: "12px" }, // Adjust input font size for mobile
                          }
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        mb: 2,
                        flexWrap: 'wrap', // Allows wrapping on smaller screens
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { sm: "15px", xs: "12px" },
                        }}
                      >
                        Check-in
                      </Typography>
                      <TimePicker
                        value={checkInTime}
                        onChange={(newValue) => setCheckInTime(newValue)}
                        ampm={true}
                        format="hh:mm A"
                        sx={{
                          bgcolor: "#d9d9d9",
                          fontSize: { sm: "14px", xs: "12px" }, // Adjust font size for mobile
                          '& .MuiInputBase-input': {
                            fontSize: { sm: "14px", xs: "12px" }, // Adjust input font size for mobile
                          }
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        flexWrap: 'wrap', // Allows wrapping on smaller screens
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { sm: "15px", xs: "12px" },
                        }}
                      >
                        Check-out
                      </Typography>
                      <TimePicker
                        value={checkOutTime}
                        onChange={(newValue) => setCheckOutTime(newValue)}
                        ampm={true}
                        format="hh:mm A"
                        sx={{
                          bgcolor: "#d9d9d9",
                          fontSize: { sm: "14px", xs: "12px" }, // Adjust font size for mobile
                          '& .MuiInputBase-input': {
                            fontSize: { sm: "14px", xs: "12px" }, // Adjust input font size for mobile
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Button
                    href="/bookingsummary"
                    variant="contained"
                    sx={{
                      mt: 2,
                      borderRadius: 10,
                      bgcolor: "#0F3D3E",
                      "&:hover": {
                        bgcolor: "#0F3D3E",
                      },
                    }}
                    onClick={handleClosePopover}
                  >
                    Show the court
                  </Button>
                </Box>
              </Box>
            </Popover>




          </Box>
          <br />
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
              {court.length > 0 ? (
                court.map((court) => (
                  <Courtcard
                    key={court._id}
                    _id={court._id}
                    futsalName={court.futsalName}
                    address={court.address}
                    dayRate={court.dayRate}
                    nightRate={court.nightRate}
                    capacity={court.capacity}
                    length={court.length}
                    width={court.width}
                    specification={court.specification}
                    fileName={court.fileName}
                  />
                ))
              ) : (
                <Typography>No courts available</Typography>
              )}


            </Box>

          </Box>

          <br />

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
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
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
                  onClick={() => setShowAllAllCourts(!showAllAllCourts)}
                  sx={{ textTransform: "none", color: "#007EF2" }}
                >
                  {showAllAllCourts ? "See Less" : "See All"}
                </Button>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: showAllAllCourts ? "column" : "row",
                gap: 2,
                width: "100%",
                overflowX: showAllAllCourts ? "visible" : "auto",
                justifyContent: showAllAllCourts ? "flex-start" : "center",
                alignItems: "center",
                padding: showAllAllCourts ? 0 : "0 10px",
                whiteSpace: showAllAllCourts ? "normal" : "nowrap",
                scrollBehavior: "smooth",
              }}
            >
              {court
                .slice(0, showAllAllCourts ? 3 : 2)
                .map((court) => (
                  <Link
                    to={`/courtdetails/${court._id}`}
                    key={court._id}
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      width: showAllAllCourts ? "100%" : "auto",
                    }}
                  >
                    <Courtcard
                      key={court._id}
                      _id={court._id}
                      futsalName={court.futsalName}
                      address={court.address}
                      dayRate={court.dayRate}
                      nightRate={court.nightRate}
                      capacity={court.capacity}
                      length={court.length}
                      width={court.width}
                      specification={court.specification}
                      fileName={court.fileName}
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
