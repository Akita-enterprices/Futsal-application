import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";
import Courtcard from "../component/courtcard";

const Nearcourt: React.FC<{}> = () => {
  const [clicked, setClicked] = useState(false);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));

  return (
    <Box
      sx={{
        height: "100vh",
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
        <Box
          sx={{
            width: { sm: "60%", xs: "85%" },
            marginTop: 1,
            marginLeft: { sm: 8, xs: 'auto' },
            marginRight: { sm: 0, xs: 'auto' },
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { sm: "28px", xs: "20px" },
            }}
          >
            Gampola
          </Typography>
          <Typography
            sx={{
              marginLeft: 1,
              paddingTop: "4px",
              paddingBottom: "8px",
              fontSize: "0.8rem",
            }}
          >
            10/12/2023
          </Typography>
        </Box>
        <br />
        <Box
          sx={{
            textAlign: "center",
            mt: 2,
            width: { sm: "75%", xs: "80%" },
            margin: '0 auto',
            bgcolor: "#D9D9D9",
            borderRadius: 3,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search court name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <br />
        <Box sx={{ width: { sm: "40%", xs: "40%" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { sm: "20px", xs: "20px" },
              marginTop: 2,
            }}
          >
            Near court
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "center",
            flexDirection: { sm: "row", xs: "row" },
            mt: 2,
            width:{sm:"auto",xs:"500px"}
         
          }}
        >
          <Courtcard
            rating={4.5}
            link="/courtdetails"
            title="CIB Court"
            description="Gampola Town, Gampola"
            price="$ RS 35000"
          />
          <Courtcard
            rating={4.2}
            link="/courtdetails"
            title="ACML Court"
            description="Gampola Town, Gampola"
            price="$ RS 35000"
          />
          
        </Box>
      </Box>
    </Box>
  );
};

export default Nearcourt;
