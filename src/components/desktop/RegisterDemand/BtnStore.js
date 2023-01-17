// Import Mui
import { Box, Button, Container } from "@mui/material";
// Import React
import { Fragment } from "react";
// Import Mui Icons
import { UnarchiveOutlined } from "@mui/icons-material";

const BtnStore = () => {

    return (
        <Fragment>
            {/* Start BtnStore*/}
            <Box id="btnStore">
                <Button sx={{ fontSize: { xs: "15.7px", md: " 0.9375rem" }, color: "light.main", px: 2, py: 2.2 }} variant="contained" endIcon={<UnarchiveOutlined color="light" />}>
                    ذخیره
                </Button>
            </Box>
            {/* End BtnStore*/}
        </Fragment>
    )
}

export default BtnStore;