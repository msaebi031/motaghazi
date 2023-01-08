// Import React
import { Fragment, useState } from "react";
// Import Mui
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Box,
    IconButton,
    Drawer,
    Typography,
    Avatar,
} from "@mui/material";
// Import Mui Icons
import {
    MenuRounded,
    CloseRounded,
    HouseOutlined,
    SupportAgentOutlined,
    KeyboardArrowRightRounded,
    ErrorOutline,
    Diversity3,
} from "@mui/icons-material";

// Import Next 
import Link from "next/link";
import { Button } from "@mui/material";
import BoxGrouping from "../desktop/BoxGrouping";

const NavBar_Mob = () => {

    // ======= UseState OPen ======== //
    const [open, setOpen] = useState(false);

    // ======= Handles ======== //
    // ======= Handle For OPen Menu ======== //
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <Box py={.8} id="navBar-mob">
                {/* Start  Navbar Mobile*/}
                <Box className="d-flex justify-between align-center navbar-mob-app" component="header">
                    <Box className="d-flex align-center">
                        <IconButton href="/">
                            <KeyboardArrowRightRounded />
                        </IconButton>
                        <Typography
                            color="light.main"
                            variant="subtitle1"
                            component="h6"
                        >
                            تقاضاهای من جدید
                        </Typography>
                    </Box>
                    <Button className="style-btn" size="large" sx={{ color: "light.main" }} variant="text" startIcon={<ErrorOutline fontSize="small" color="brown.dark" />}>گزارش اشکال</Button>
                </Box>
                <BoxGrouping />
            </Box>
        </Fragment>
    );
};

export default NavBar_Mob;
