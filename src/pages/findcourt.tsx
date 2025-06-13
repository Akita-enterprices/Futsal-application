import { useEffect, useState } from 'react';
import { Box, InputBase, Button, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import Courtcard from "../component/courtcard";
import { Link } from "react-router-dom";

interface Court {
  _id: string;
  rating: number;
  futsalName: string;
  address: string;
  dayRate: number;
  fileName: { url: string };
}

const Findcourt: React.FC<{}> = () => {
  const [court, setCourt] = useState<Court[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin`);
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    width: "100%",
    maxWidth: "400px",
    margin: "20px auto",
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

  const handleSeeAll = () => {
    setShowAll(true);
  };

  const displayedCourts = showAll ? court : court.slice(0, 4);

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
      
      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search court name"
          inputProps={{ "aria-label": "search" }}
        />
      </Search> */}
   <Typography sx={{}}>See All Courts </Typography>

      <Box
        sx={{
          alignItems: "flex-start",
          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "row" },
          mt: 2,
          width: { sm: "auto", xs: "500px" },
        }}
      >
        {displayedCourts.map((court) => (
          <Link
            to={`/courtdetails/${court._id}`}
            key={court._id}
            style={{ textDecoration: "none" }}
          >
            {/* <Courtcard
              rating={court.rating}
              // link={`/courtdetails/${court._id}`}
              title={court.futsalName}
              description={court.address}
              // price={`$ ${court.dayRate}`}
              image={court.fileName?.url}
            /> */}
          </Link>
        ))}
      </Box>

   
    </Box>
  );
};

export default Findcourt;
