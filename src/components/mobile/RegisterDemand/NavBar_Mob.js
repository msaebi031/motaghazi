// Import React
import { Fragment, useState } from "react";
// Import Mui
import {
    Box,
    IconButton,
    Typography,
} from "@mui/material";
// Import Mui Icons
import {
    KeyboardArrowRightRounded,
    ErrorOutline,
    Diversity3,
} from "@mui/icons-material";

// Import Next 
import Link from "next/link";
import { Button } from "@mui/material";
import BoxGrouping from "../../desktop/RegisterDemand/Grouping_New/BoxGrouping";

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
                        <Link href="/">
                            <IconButton className="icon-btn">
                                <KeyboardArrowRightRounded color="light" />
                            </IconButton>
                        </Link>
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
