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
          <Box sx={{textAlign:"left",width:{sm:"60%",xs:"60%"}}}>
            <Typography sx={{color:"grey",fontSize:"12px",mb:2}}>Your current location</Typography>
            <Typography sx={{fontWeight:"bold"}}><LocationOnIcon sx={{fontSize:"15px",color:"purple"}} /> Watadeniya,Gampola</Typography>
          </Box>
          <Box
            sx={{
              width: { sm: "50%", xs: "85%" },
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
                borderRadius:"80px",
              
              }}
            >
              Find the available time
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                  }}
               
        >
      <Box
    sx={{
      width: { sm: 500, xs: 300 },
      p: 3,
  
      textAlign: "left",
      height:"100%"
    }}
  >
  <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center",mb:3 }}>
  <Box
    sx={{
      bgcolor: "grey",
      height: {sm:"20%",xs:"30%"},
      width: {sm:"50%",xs:"70%"},
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center the text vertically
      textAlign: "center", // Ensure the text is centered
      padding: 1, // Optional: add padding for a better look
    }}
  >
    <Typography>Find the available time</Typography>
  </Box>
</Box>

    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        height: "50%", // Inner box height less than popup
        overflowY: "auto", // Adds scroll if content overflows
        bgcolor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        boxShadow: 3,
      }}
    >
      <TextField
        type="text"
        placeholder="Gampola"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ bgcolor: "#d9dadb",   borderRadius:"80px", width: {sm:"100%",xs:"100%"} ,
        height:"auto",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent', // Removes the default outline
          },
        }
        
        }}
        InputProps={{
          startAdornment: <SearchIcon/>,
        }}
      />
      <br />
      <br />
 <Box sx={{ display: "flex", gap: 2, flexDirection: "column", width: "100%"}}>
  <Box  display={"flex"}
              flexDirection={"row"}
              width="100%"
               sx={{  
                gap:3,
              marginBottom: 2}}>
    <Typography sx={{ fontWeight: "bold" }}>Check-in</Typography>
    <DatePicker
      value={checkInDate}
      onChange={(newValue) => setCheckInDate(newValue)}
    />
  </Box>
  <Box display={"flex"}
              flexDirection={"row"}
              width="100%"
               sx={{  
                gap:3,
              marginBottom: 2}}>
    <Typography sx={{ fontWeight: "bold" }}>Check-in </Typography>
    <TimePicker
      value={checkInTime}
      onChange={(newValue) => setCheckInTime(newValue)}
    />
  </Box>
  <Box display={"flex"}
              flexDirection={"row"}
              width="auto"
               sx={{  
                gap:2,
              marginBottom: 2}}>
    <Typography sx={{ fontWeight: "bold" }}>Check-Out </Typography>
    <TimePicker
      value={checkOutTime}
      onChange={(newValue) => setCheckOutTime(newValue)}
    />
  </Box>
  <Box  sx={{
    display: "flex", 
    justifyContent: "center", // Centers horizontally
    alignItems: "center",     // Centers vertically (if needed)
  }} >
    <Button    type="submit"
              variant="contained"
              onClick={handleClick}
              sx={{
                bgcolor: "#0F3D3E",
                "&:hover": {
                  bgcolor: "#0F3D3E",
                },
                width: { sm: "60%", xs: "100%" },
                borderRadius:"80px",
              
              }}>Show  the court</Button>
  </Box>
</Box>

    </Box>
    
  </Box>
</Popover>

          </Box>
          <br /><Box sx={{textAlign:"left"}}>
            <Typography sx={{fontWeight:"bold",fontSize:"15px"}}>Welcome to Future of Futsal</Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              width: { sm: "75%", xs: "270px" },
              // margin: "0 auto",
              bgcolor: "#D9D9D9",
              borderRadius: "80px",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search address,city,location"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <br />
          <Box sx={{ width: { sm: "40%", xs: "40%" } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { sm: "17px", xs: "15px" },
                marginTop: 2,
              }}
            >
            Near your location
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "center",
              flexDirection: { sm: "column", xs: "column" },
              gap:2,
              width: { sm: "auto", xs: "500px" },
            }}
          >
            {court.map((court) => (
              <Link
                to={`/courtdetails/${court._id}`}
                key={court._id}
                style={{ textDecoration: "none" }}
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
    </LocalizationProvider>
  );
};

export default Nearcourt;
