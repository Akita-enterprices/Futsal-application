import React, { useEffect, useState } from "react";
import { Typography, Box, IconButton, Grid, Button, Card } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GradeIcon from "@mui/icons-material/Grade";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useParams } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import WifiIcon from "@mui/icons-material/Wifi";
import Popover from "@mui/material/Popover";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import CustomerRatingCard from "../component/CustomerRatingCard";
import { customers } from "../data/customerData";
import TimeSlotList from "../component/TimeSlotList";
import { timeSlots } from "../data/timeSlotsData";

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
  const [seeAll, setSeeAll] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Dayjs | null>(dayjs());
  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(dayjs());
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(dayjs());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [showMore, setShowMore] = useState(false);

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
  const handleSeeAll = () => {
    setSeeAll((prevState) => !prevState);
  };
  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen2 = () => {
    setDialogOpen(true);
  };

  const handleClose2 = () => {
    setDialogOpen(false);
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
  const facilities = [
    { icon: <AcUnitIcon sx={{ mr: 1 }} />, name: "Air Conditioner" },
    { icon: <PoolIcon sx={{ mr: 1 }} />, name: "Swimming Pool Access" },
    { icon: <LocalParkingIcon sx={{ mr: 1 }} />, name: "Free Parking" },
    { icon: <WifiIcon sx={{ mr: 1 }} />, name: "Free Wi-Fi" },
    { icon: <WifiIcon sx={{ mr: 1 }} />, name: "Locker Rooms" }, // Additional items
    { icon: <WifiIcon sx={{ mr: 1 }} />, name: "Cafeteria Access" }, // Additional items
  ];

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  const displayedFacilities = seeAll ? facilities : facilities.slice(0, 4); // Show 4 initially
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          height: "100vh",
          fontSize: "1.5rem",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        {/* <Box
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
        </Box> */}
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
          <Box sx={{ display: "flex", flexDirection: "row", gap: 20 }}>
            {" "}
            <Typography
              sx={{ fontWeight: "bold", fontSize: { sm: "20px", xs: "15px" } }}
            >
              {data.futsalName}
            </Typography>
            <FavoriteBorderOutlinedIcon />
          </Box>

          <br />
          <Box
            mt={2}
            display={"flex"}
            flexDirection={"row"}
            width={{ sm: "100%", xs: "100%" }}
            gap={16}
          >
            <Box
              component={"a"}
              sx={{
                bgcolor: "#f5f7fa",
                borderRadius: 2,
                width: { sm: "20%", xs: "35%" },
                height: "10%",
                // ml: { sm: 38, xs: 25 },
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
            <Box>
              <Typography fontSize={{ sm: "18px", xs: "11px" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  {data.dayRate}/=
                </span>{" "}
                <span style={{ fontWeight: "lighter" }}>Day</span> <br />
                <span style={{ fontWeight: "bold" }}>
                  {data.nightRate}/=
                </span>{" "}
                <span style={{ fontWeight: "lighter" }}>Night</span> <br />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { sm: "50%", xs: "90%" },
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", // Align text center to center the <hr>
              ml: { xs: 2, sm: 3 },
            }}
          >
            {" "}
            <hr
              style={{
                width: "100%", // Set the width of the <hr> to 100%
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <PersonRoundedIcon
              sx={{
                color: "white",
                bgcolor: "lightblue",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />
            <Typography sx={{ ml: 2, fontSize: { sm: "15px", xs: "12px" } }}>
              <b>{data.name}</b>
              <br /> Receptionist
            </Typography>
            <Card
              sx={{
                color: "grey",
                bgcolor: "white",
                borderRadius: "30%",
                padding: "0.5rem",
                ml: 14,
              }}
            >
              {" "}
              <LocalPhoneRoundedIcon />
            </Card>
          </Box>
          <br />

          <Box sx={{ width: { sm: "100% ", xs: "100%" } }}>
            <Box sx={{ width: { sm: "80% ", xs: "100%" } }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { sm: "20px", xs: "15px" },
                    opacity: "80%",
                  }}
                >
                  Court Facilities
                </Typography>
                <Button
                  onClick={handleSeeAll}
                  sx={{ textTransform: "none", color: "#007EF2" }}
                >
                  {seeAll ? "See Less" : "See all facilities"}
                </Button>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {displayedFacilities.map((facility, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      opacity: "80%",
                    }}
                  >
                    {facility.icon}
                    <Typography sx={{ fontSize: { sm: "14px", xs: "13px" } }}>
                      {facility.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography
                fontWeight={"bold"}
                mt={3}
                sx={{ fontSize: { sm: "20px", xs: "15px" } }}
              >
                Available Time Slots
              </Typography>
            </Box>
            <Box sx={{ p: 2, width: { sm: "60%", xs: "100%" } }}>
              <TimeSlotList slots={timeSlots} />
            </Box>
            <br />
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  opacity: "90%",
                  mt: 2,
                  fontSize: { sm: "20px", xs: "15px" },
                }}
              >
                About location's neighborhood
              </Typography>
            </Box>

            <Box
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              width={{ sm: "60%", xs: "100%" }}
              sx={{ gap: 8 }}
            >
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: { sm: "16px", xs: "13px" },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              <Button
                type="submit"
                variant="contained"
                onClick={handleClick}
                sx={{
                  ml: { sm: 15, xs: 7 },
                  fontWeight: "bold",
                  bgcolor: "#0F3D3E",
                  height: "auto",
                  "&:hover": {
                    bgcolor: "#0F3D3E", // Same color as background
                  },

                  width: {
                    sm: "50%",
                    xs: "70%",
                  }, // Add margin top for spacing
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                Advance payment 500/=
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
              >
                <Box
                  sx={{
                    width: { sm: 400, xs: 300 },
                    p: 3,

                    textAlign: "left",
                    height: "100%",
                  }}
                >
                  {" "}
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
                        bgcolor: "#d9d9d9",
                        height: { sm: "20%", xs: "30%" },
                        width: { sm: "70%", xs: "70%" },
                        borderRadius: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", // Center the text vertically
                        textAlign: "center", // Ensure the text is centered
                        padding: 1, // Optional: add padding for a better look
                      }}
                    >
                      {" "}
                      <Typography>Booking Details</Typography>
                    </Box>
                    <br />

                    <Box
                      sx={{
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        height: "50%", // Inner box height less than popup
                        overflowY: "auto", // Adds scroll if content overflows
                        bgcolor: "#d9d9d9",
                        borderRadius: 10,
                        boxShadow: 3,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#919294",
                          alignSelf: "center",
                          borderRadius: 3,
                          p: 1,
                          textAlign: "center",
                          height: { sm: "30%", xs: "30%" },
                          width: { sm: "80%", xs: "90%" },
                        }}
                      >
                        <Typography>Adance Payment 500/=</Typography>
                      </Box>
                      <br />

                      <Typography sx={{ fontWeight: "bold" }}>
                        Check-in Date
                      </Typography>
                      <DatePicker
                        value={checkInDate}
                        onChange={(newValue) => setCheckInDate(newValue)}
                      />
                      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        Check-in Time
                      </Typography>
                      <TimePicker
                        value={checkInTime}
                        onChange={(newValue) => setCheckInTime(newValue)}
                      />
                      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        Check-out Time
                      </Typography>
                      <TimePicker
                        value={checkOutTime}
                        onChange={(newValue) => setCheckOutTime(newValue)}
                      />
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
                      Book the court
                    </Button>
                  </Box>
                </Box>
              </Popover>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  fontSize: { sm: "20px", xs: "15px" },
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Testimonials
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    flexWrap: "wrap", // Allows the cards to wrap to the next row if they don't fit
                  }}
                >
                  {customers.map((customer, index) => (
                    <CustomerRatingCard key={index} customer={customer} />
                  ))}
                </Box>
              </Box>
            </Box>
            <br />
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Courtdetails;
