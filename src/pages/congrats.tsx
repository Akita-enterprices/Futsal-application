import React, { useState } from "react"; // Import useState
import { Box, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

const Congrats: React.FC<{}> = () => {
  const [open, setOpen] = useState(false); // Define open state and setOpen function

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { sm: 400, xs: 200 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: "100vh",
        width: { sm: "100%", xs: "100%" },
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          height: "70%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Box
          sx={{
            bgcolor: "#007EF2",
            height: { sm: "50%", xs: "40%" },
            width: { sm: "30%", xs: "70%" },
            borderRadius: 2,
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          width: { sm: "100%", xs: "100%" },
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex", // Added display:flex to center its children
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", xs: "100%" },
            height: { sm: "100%", xs: "70%" },
            display: "flex", // Added display:flex to center its children
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ height: { sm: "10%", xs: "50%" } }}>
            <Typography
              sx={{
                color: "#007EF2",
                fontWeight: "bold",
                fontSize: { sm: "30px", xs: "20px" },
                textAlign: "center",
              }}
            >
              Congratulations!!
            </Typography>
            <Typography sx={{ opacity: "50%", textAlign: "center" }}>
              Your Court stay is secured.
            </Typography>
            <Typography sx={{ opacity: "50%", textAlign: "center" }}>
              Counting down to your match!
            </Typography>
          </Box>
        </Box>{" "}
        <Box width={"100%"}>
          <Button
            type="submit"
            variant="contained"
            href="/futureoffutsal"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E", // Same color as background
              },
              fontSize: { sm: "18px", xs: "13px" },

              width: {
                sm: "15%",
                xs: "55%",
              }, // Add margin top for spacing
              borderRadius: 2,
              mt: 8,
            }}
          >
            Go Home
          </Button>
          <div>
            <Typography onClick={handleOpen} sx={{ color: "yellow" }}>
              VIEW E-RECIEPT
            </Typography>{" "}
            <Modal
              open={open} // Use open state here
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Congrats;
