// Import Mui Icons
import { DisplaySettingsRounded } from "@mui/icons-material";
// Import Mui 
import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import React
import { Fragment } from "react";

const MoreDetails = () => {
    return (
        <Fragment>
            {/* Start MoreDetails*/}
            <Box padding={{ xs: 0, md: "24px 44.8px 24px 44.8px" }} id="moreDetails">
                <Box className="d-flex align-center">
                    <DisplaySettingsRounded color="blue" fontSize="small" />
                    <Typography mr={1} color="brown.contrastText" className="title-box" component="h6" variant="body1" fontWeight="800">
                        جزییات بیشتر تقاضا
                    </Typography>
                </Box>
                <Grid2 id="input-andbtn" container spacing={3} mt={{ xs: 2, md: 2.8 }}>
                    <Grid2 item xs={12} md={6}>
                        {/* <Box mt={3.3}> */}
                        <Typography color="dark.light" fontSize="12.5px" mb="13px" component="p" variant="body2">
                            برند موبایل
                        </Typography>
                        <Button className="style-btn" fullWidth >انتخاب کنید</Button>
                        {/* </Box> */}
                    </Grid2>

                    <Grid2 item xs={12} md={6}>
                        {/* <Box mt={3.3}> */}
                        <Typography color="dark.light" fontSize="12.5px" mb="13px" component="p" variant="body2">
                            تعداد سیم کارت
                        </Typography>
                        <Button className="style-btn" fullWidth >انتخاب کنید</Button>
                        {/* </Box> */}
                    </Grid2>
                </Grid2>
            </Box>
            {/* End MoreDetails*/}
        </Fragment>
    )
}

export default MoreDetails;

