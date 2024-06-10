import * as React from "react";
import { Box, Typography, Card, TextField } from "@mui/material";

export default function OutlinedCard() {
  const [name, setName] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("");
  const [payment, setPayment] = React.useState<string>("");

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(event.target.value);
  };

  const card = (
    <React.Fragment>
      <Box
        sx={{
          m: 2,
          width: "50px",
          height: "50px",
          bgcolor: "#4f1112",
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
        >
          Name: {name}<br />
          Date: {date}<br />
          Time: {time}<br />
          Payment: {payment}/=
        </Typography>
      </Box>
    </React.Fragment>
  );

  return (
    <Box>
      {/* <Box sx={{ mb: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={handleInputChange(setName)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Date"
          value={date}
          onChange={handleInputChange(setDate)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Time"
          value={time}
          onChange={handleInputChange(setTime)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Payment"
          value={payment}
          onChange={handleInputChange(setPayment)}
        />
      </Box> */}
      <Card sx={{ width: {sm:"500px",xs:"240px"}, height: "100px", display: "flex", flexDirection: "row", bgcolor: "#f5f3f4" }}>
        {card}
      </Card>
    </Box>
  );
}
