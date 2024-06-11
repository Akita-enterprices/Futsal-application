import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Dayjs } from 'dayjs';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface TimeSlot {
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { time: '09:00 AM - 10:00 AM', available: false },
  { time: '10:00 AM - 11:00 AM', available: true },
  { time: '11:00 AM - 12:00 PM', available: false },
  { time: '12:00 PM - 01:00 PM', available: false },
  { time: '01:00 PM - 02:00 PM', available: false },
  { time: '02:00 PM - 03:00 PM', available: false },
  { time: '03:00 PM - 04:00 PM', available: false },
  { time: '04:00 PM - 05:00 PM', available: false },
  { time: '05:00 PM - 06:00 PM', available: false },
];

const Availability: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const goBack = () => {
    window.history.back();
  };

  const handleBookSlot = (time: string) => {
    console.log(`Booking slot: ${time}`);
    // Add your booking logic here
  };

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center" 
      }}
    >
      <Box 
        sx={{
          width: { sm: "42%", xs: "90%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2", cursor: "pointer" }} />
      </Box>

      <Typography variant="h4" sx={{ mb: 2 }}>Availability</Typography>
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)} />
      </LocalizationProvider>

      {/* Container for the Available Time text */}
      <Box sx={{ mt: 2, width: { xs: '90%', sm: '50%', md: '40%' }, textAlign: 'center' }}>
        <Typography variant="h6">Available Time Slots</Typography>
        <List>
          {timeSlots.filter(slot => slot.available).map((slot, index) => (
            <ListItem key={index} sx={{ justifyContent: 'space-between' }}>
              <ListItemText primary={slot.time} />
              <Button sx={{bgcolor:"#0F3D3E","&:hover": {
                                bgcolor: "#0F3D3E", // Same color as background
                            }}} variant="contained" color="primary" onClick={() => handleBookSlot(slot.time)}>
                Book
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Availability;
