//Import Mui Icons
import { SaveAsOutlined } from "@mui/icons-material";
//Import Mui 
import { Box, Button, Divider, Typography } from "@mui/material";
//Import React
import { Fragment } from "react";


const BoxGrouping = () => {
    return (
        <Fragment>
            {/* Start  BoxGrouping*/}
            <Box mt={{ xs: "17px", md: "40px" }} p={{ xs: "1px 18px 1px 0px", md: "17px 40px 17px 40px" }} className="d-flex justify-between align-center" bgcolor="light.main" id="boxgrouping">
                <Typography flex="inherit" component="h6" variant="body1" fontSize={{ xs: "16px", md: "1.1rem" }} fontWeight={{ xs: "500", md: "600" }} color="brown.contrastText">
                    گوشی موبایل
                    {/* namegrouping */}
                </Typography>
                <Divider sx={{ display: { xs: "none", md: "block" } }} orientation="vertical" variant="middle" flexItem />
                <Button sx={{ fontSize: { xs: "14px", md: " 0.9375rem" }, color: "brown.contrastText", px: 2, py: 2.2 }} variant="contained" endIcon={<SaveAsOutlined color="warning" />}>
                    تغییر دسته بندی
                </Button>
            </Box>
            {/* End  BoxGrouping*/}
        </Fragment>
    )
}

export default BoxGrouping;