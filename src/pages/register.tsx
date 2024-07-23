import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [futsalName, setFutsalName] = useState("");
  const [address, setAddress] = useState("");
  const [dayRate, setDayRate] = useState("");
  const [nightRate, setNightRate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [specification, setSpecification] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("idNumber", idNumber);
    formData.append("futsalName", futsalName);
    formData.append("address", address);
    formData.append("dayRate", dayRate);
    formData.append("nightRate", nightRate);
    formData.append("capacity", capacity);
    formData.append("length", length);
    formData.append("width", width);
    formData.append("specification", specification);
    formData.append("agreeTerms", agreeTerms.toString());
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: { sm: "100vh", xs: "170vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        color: "black",
        fontSize: { xs: "1rem", sm: "1.5rem" },
        fontWeight: "bold",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          width: { sm: "42%", xs: "100%" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ArrowBackIcon
          onClick={goBack}
          sx={{ color: "#007EF2", cursor: "pointer" }}
        />
      </Box>
      <Box sx={{ width: { sm: "42%", xs: "90%" }, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Registration
        </Typography>
      </Box>
      <Box sx={{ width: { sm: "42%", xs: "90%" }, textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <TextField
            fullWidth
            placeholder="ID Number"
            variant="outlined"
            margin="normal"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <TextField
            fullWidth
            placeholder="Futsal Name"
            variant="outlined"
            margin="normal"
            value={futsalName}
            onChange={(e) => setFutsalName(e.target.value)}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <TextField
            fullWidth
            placeholder="Address"
            variant="outlined"
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <Box
            sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" } }}
          >
            <TextField
              fullWidth
              placeholder="Per Hour Rate (Day)"
              variant="outlined"
              margin="normal"
              value={dayRate}
              onChange={(e) => setDayRate(e.target.value)}
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                marginRight: { sm: 2, xs: 2 },
              }}
            />
            <TextField
              fullWidth
              placeholder="Per Hour Rate (Night)"
              variant="outlined"
              margin="normal"
              value={nightRate}
              onChange={(e) => setNightRate(e.target.value)}
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" } }}
          >
            <TextField
              fullWidth
              placeholder="Capacity"
              variant="outlined"
              margin="normal"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                marginRight: { sm: 2, xs: 2 },
                width: { sm: "60%", xs: "100%" },
              }}
            />
            <TextField
              fullWidth
              placeholder="L"
              variant="outlined"
              margin="normal"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                marginRight: { sm: 2, xs: 2 },
                width: { sm: "30%", xs: "100%" },
              }}
            />
            <TextField
              fullWidth
              placeholder="W"
              variant="outlined"
              margin="normal"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                width: { sm: "30%", xs: "100%" },
              }}
            />
          </Box>
          <TextField
            fullWidth
            placeholder="Specification"
            multiline
            rows={7}
            variant="outlined"
            margin="normal"
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <Box sx={{ mt: 2, textAlign: "left" }}>
            <Box
              onClick={triggerFileInput}
              sx={{
                border: "2px dashed #cbd0d6",
                borderRadius: "4px",
                padding: "16px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              {file ? (
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                >
                  {file.name}
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                >
                  Click to upload a file
                </Typography>
              )}
            </Box>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeTerms}
                onChange={handleCheckboxChange}
                name="agreeTerms"
                color="primary"
              />
            }
            label="I agree to the terms and conditions of Future of Futsal"
            sx={{
              mt: 2,
              color: "#787775",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // href="/homepage"
            sx={{
              mt: 2,
              width: { xs: "100%", sm: "70%" },
              bgcolor: "#0F3D3E",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              "&:hover": {
                bgcolor: "#0F3D3E", // Same color as background
              },
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
