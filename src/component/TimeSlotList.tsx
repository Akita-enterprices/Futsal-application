import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { TimeSlot } from "../data/timeSlotsData"; // Import the TimeSlot type

interface TimeSlotListProps {
  slots: TimeSlot[];
}

const TimeSlotList: React.FC<TimeSlotListProps> = ({ slots }) => {
  return (
    <Grid container spacing={2}>
      {slots.map((slot, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper
            sx={{
              padding: 2,
              bgcolor: slot.available ? "green" : "red",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="body1">{slot.time}</Typography>
            <Typography variant="body2">
              {slot.available ? "Available" : "Unavailable"}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TimeSlotList;
