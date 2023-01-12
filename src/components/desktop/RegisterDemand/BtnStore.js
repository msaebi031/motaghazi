import { Box, Button, Container } from "@mui/material";
import { Fragment } from "react";
import { UnarchiveOutlined } from "@mui/icons-material";


const BtnStore = () => {


    return (
        <Fragment>
            <Box id="btnStore">
                <Button sx={{ fontSize: { xs: "15.7px", md: " 0.9375rem" }, color: "light.main", px: 2, py: 2.2 }} variant="contained" endIcon={<UnarchiveOutlined color="light" />}>
                    ذخیره
                </Button>
            </Box>
        </Fragment>
    )
}

export default BtnStore;