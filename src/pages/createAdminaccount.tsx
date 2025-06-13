import { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FormControlLabel, Checkbox, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

const CreateAdminaccount: React.FC<{}> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nic, setNic] = useState("");
  const [futsalName, setFutsalName] = useState("");
  const [address, setAddress] = useState("");
  const [dayRate, setDayRate] = useState("");
  const [nightRate, setNightRate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [specification, setSpecification] = useState("");
  const [sports, setSports] = useState<string[]>([]);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("nicOrPassport", nic);
    formData.append("futsalName", futsalName);
    formData.append("address", address);
    formData.append("dayRate", dayRate);
    formData.append("nightRate", nightRate);
    formData.append("capacity", capacity);
    formData.append("length", length);
    formData.append("width", width);
    formData.append("specification", specification);
    formData.append("agreeTerms", String(agreeTerms));
    sports.forEach((sport) => formData.append("sports[]", sport));
    images.forEach((file) => formData.append("images", file));

    try {
      const res = await fetch("http://localhost:4000/api/admin/register", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Success:", result);
      alert(result.message || "Registered successfully!");
    } catch (err) {
      alert("Registration failed.");
      console.error(err);
    }
  };


  return (
    <Box
      sx={{
        height: { sm: "100vh", xs: "700px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f8fd",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "bold" }}
      >
        <span style={{ color: "black" }}>Create</span>{" "}
        <span style={{ color: "#E2DCC8" }}>Account</span>
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "15px", xs: "14px" },
          padding: { sm: 0, xs: 3 },
          textAlign: "center",
        }}
      >
        Fill your information below or register with your social account
      </Typography>
      <Box sx={{ mt: 2, maxWidth: "100%", textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              placeholder="User name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            {" "}

            <TextField
              placeholder="Phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

          </Box>

          <Box>
            <TextField
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlinedIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              placeholder="NIC or Passport"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Futsal Name"
              value={futsalName}
              onChange={(e) => setFutsalName(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Day Rate"
              value={dayRate}
              onChange={(e) => setDayRate(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Night Rate"
              value={nightRate}
              onChange={(e) => setNightRate(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Court Length (m)"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Court Width (m)"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <Box>
            <TextField
              placeholder="Specification"
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
              sx={{ mb: 2, width: { sm: 500, xs: 300 } }}
            />
          </Box>

          <FormControl sx={{ mb: 2, width: { sm: 500, xs: 300 } }}>
            <InputLabel>Sports</InputLabel>
            <Select
              multiple
              value={sports}
              onChange={(e) => setSports(e.target.value as string[])}
            >
              {["football", "cricket", "badminton"].map((sport) => (
                <MenuItem key={sport} value={sport}>
                  {sport}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mb: 2 }}>
            <input
              accept="image/*"
              multiple
              type="file"
              id="upload-images"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setImages(files);
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="upload-images">
              <Button
                variant="outlined"
                component="span"
                startIcon={<AddPhotoAlternateIcon />}
              >
                Upload Images
              </Button>
            </label>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
            }
            label="I agree to the terms and conditions"
          />


          <Button
            type="submit"
            variant="contained"
            href="/verifyAdminaccount"
            sx={{
              bgcolor: "#0F3D3E",
              "&:hover": {
                bgcolor: "#0F3D3E",
              },
              width: {
                sm: "50%",
                xs: "50%",
              },
              borderRadius: 2,
              mb: 2,
            }}
          >
            Continue
          </Button>
          <Typography sx={{ opacity: "35%", textAlign: "center" }}>
            _______ Or signup with ______
          </Typography>
        </form>
      </Box>
      <Typography sx={{ color: "grey", "& a": { color: "yellow" } }}>
        Already have an account? <a href="/loginAdmin">login</a>
      </Typography>
    </Box>
  );
};

export default CreateAdminaccount;

