import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

const Congrats: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);

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
        height: {sm:"100vh",xs:"100vh"},
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Box
        sx={{
          height: "70%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "#007EF2",
            height: { sm: "50%", xs: "40%" },
            width: { sm: "30%", xs: "70%" },
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
            mb:{sm:0,xs:12}
          }}
        >
          <Button
            type="submit"
            variant="contained"
            href="/futureoffutsal"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E",
              },
              fontSize: { sm: "18px", xs: "13px" },
              width: { sm: "15%", xs: "55%" },
              borderRadius: 2,
              mt: 2,
            }}
          >
            Go Home
          </Button>
          <Typography onClick={handleOpen} sx={{ color: "yellow", mt: 2, cursor: "pointer" }}>
            VIEW E-RECIEPT
          </Typography>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}></Box>
      </Modal>
    </Box>
  );
};

export default Congrats;
