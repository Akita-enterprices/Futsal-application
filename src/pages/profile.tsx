import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

type ProfileData = {
    name: string;
    idNumber: string;
    futsalName: string;
    address: string;
    rateDay: string;
    rateNight: string;
    capacity: string;
    length: string;
    width: string;
    specification: string;
};

const Profile: React.FC<{}> = () => {
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        idNumber: '',
        futsalName: '',
        address: '',
        rateDay: '',
        rateNight: '',
        capacity: '',
        length: '',
        width: '',
        specification: '',
    });
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const goBack = () => {
        window.history.back();
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFileName(event.target.files[0].name);
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfileData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic
        console.log(profileData);
    };

    return (
        <Box sx={{
            minHeight: { sm: "100vh", xs: "170vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#f9f8fd",
            color: "black",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            fontWeight: "bold",
            padding: { xs: 2, sm: 4 }
        }}>
            <Box sx={{
                width: { sm: "42%", xs: "100%" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
            }}>
                <ArrowBackIcon onClick={goBack} sx={{ color: "#007EF2", cursor: "pointer" }} />
            </Box>
            <Box sx={{ width: { sm: "42%", xs: "90%" }, textAlign: "center" }}>
                <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } }}>Profile</Typography>
            </Box>
            <Box sx={{ width: { sm: "42%", xs: "90%" }, textAlign: "center" }}>
                <form onSubmit={handleSubmit}>
                    {[
                        { name: 'name', label: 'Name' },
                        { name: 'idNumber', label: 'ID Number' },
                        { name: 'futsalName', label: 'Futsal Name' },
                        { name: 'address', label: 'Address' },
                    ].map(field => (
                        <TextField
                            key={field.name}
                            fullWidth
                            placeholder={field.label}
                            variant="outlined"
                            margin="normal"
                            name={field.name}
                            value={profileData[field.name as keyof ProfileData]}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                        />
                    ))}
                    <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" } }}>
                        <TextField
                            fullWidth
                            placeholder="Per Hour Rate (Day)"
                            variant="outlined"
                            margin="normal"
                            name="rateDay"
                            value={profileData.rateDay}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, marginRight: { sm: 2, xs: 2 } }}
                        />
                        <TextField
                            fullWidth
                            placeholder="Per Hour Rate (Night)"
                            variant="outlined"
                            margin="normal"
                            name="rateNight"
                            value={profileData.rateNight}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" } }}>
                        <TextField
                            fullWidth
                            placeholder="Capacity"
                            variant="outlined"
                            margin="normal"
                            name="capacity"
                            value={profileData.capacity}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, marginRight: { sm: 2, xs: 2 }, width: { sm: "60%", xs: "100%" } }}
                        />
                        <TextField
                            fullWidth
                            placeholder="L"
                            variant="outlined"
                            margin="normal"
                            name="length"
                            value={profileData.length}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, marginRight: { sm: 2, xs: 2 }, width: { sm: "30%", xs: "100%" } }}
                        />
                        <TextField
                            fullWidth
                            placeholder="W"
                            variant="outlined"
                            margin="normal"
                            name="width"
                            value={profileData.width}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <EditIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, width: { sm: "30%", xs: "100%" } }}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        placeholder="Specification"
                        multiline
                        rows={7}
                        variant="outlined"
                        margin="normal"
                        name="specification"
                        value={profileData.specification}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <EditIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                    />
                    <Box sx={{ mt: 2, textAlign: 'left' }}>
                        <Box
                            onClick={triggerFileInput}
                            sx={{
                                border: '2px dashed #cbd0d6',
                                borderRadius: '4px',
                                padding: '16px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontSize: { xs: "0.8rem", sm: "1rem" }
                            }}
                        >
                            {fileName ? (
                                <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>{fileName}</Typography>
                            ) : (
                                <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                                    Picture
                                </Typography>
                            )}
                        </Box>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            width: { xs: "100%", sm: "70%" },
                            bgcolor: "#0F3D3E",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            "&:hover": {
                                bgcolor: "#0F3D3E", // Same color as background
                            }
                        }}
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default Profile;
