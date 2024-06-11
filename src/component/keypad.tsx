import React from "react";
import { Box, Button } from "@mui/material";

interface KeypadProps {
  onDigitClick: (digit: string) => void;
  onCloseClick: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onDigitClick, onCloseClick }) => {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".","0"];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
      {digits.map((digit) => (
        <Button
          key={digit}
          variant="contained"
          onClick={() => onDigitClick(digit)}
          sx={{ width: "60px", height: "60px", bgcolor: "#E2DCC8", color: "black", "&:hover": { bgcolor: "#C7BEB2" } }}
        >
          {digit}
        </Button>
      ))}
      <Button
        variant="contained"
        onClick={onCloseClick}
        sx={{ width: "60px", height: "60px", bgcolor: "#E2DCC8", color: "black", "&:hover": { bgcolor: "#C7BEB2" } }}
      >
        x
      </Button>
    </Box>
  );
};

export default Keypad;
