import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ControlPointOutlined, AddPhotoAlternateOutlined } from "@mui/icons-material";
import { Clear } from "@mui/icons-material";

const SelectImage = () => {




    // uploadImg
    const [image, setImage] = useState([])

    // const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "darwin");

    //     setLoading(true);

    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/dihifeicm/image/upload",
    //         {
    //             method: "POST",
    //             body: data
    //         }
    //     )

    //     const file = await res.json();

    //     setImage(file.secure_url)

    //     setLoading(true);
    // }



    return (
        <Box mt={{ xs: 4.5, md: 4 }} id="select-image">
            <Box display="flex">
                <AddPhotoAlternateOutlined color="blue" fontSize="small" />
                <Typography mr={1} color="brown.contrastText" className="title-box" component="h6" variant="body1" fontWeight="800">
                    انتخاب تصاویر آگهی
                </Typography>
            </Box>

            <Box className={image.length >= 1 ? "flexFlow-true" : "flexFlow-false"} mt={3.2} display="flex">
                <Button sx={{ width: { xs: "50%", md: "25%", lg: "22%" }, height: { xs: "110px", sm: "145px", md: "118px", lg: "150px" } }} variant="contained" component="label" startIcon={<ControlPointOutlined sx={{ pl: 1 }} />}>
                    {image.length ? "تغیر تصویر" : "افزودن تصویر "}
                    <input
                        name="uploaded_file"
                        aria-describedby="uploaded_file"
                        hidden
                        // value={image}
                        onChange={e => setImage(e.target.files)}
                        accept="image/*"
                        multiple
                        type="file"
                    />
                </Button>
                <Box ml="1rem" flexBasis={{ xs: "50%", md: "25%", lg: "22%" }} position="relative">
                    {image ? (
                        Array.from(image).map((item) => (
                            <Box display={item ? "block" : "none"}>
                                <IconButton className="clear-icon-img" aria-label="delete" size="small">
                                    <Clear color="light" />
                                </IconButton>
                                <Box
                                    width={{ xs: "100%" }}
                                    height={{ xs: "110px", sm: "145px", md: "118px", lg: "150px" }}
                                    borderRadius="6px"
                                    boxShadow="0 0 3px #8f8f8f"
                                    src={item ? URL.createObjectURL(item) : ""}
                                    component="img"
                                />
                            </Box>
                        ))
                    ) : ""}
                </Box>
            </Box>

        </Box>
    )
}

export default SelectImage;


