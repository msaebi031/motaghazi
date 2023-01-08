// Import Mui
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
// Import Desktop
import Desktop from "./desktop";
// Import Mobile
import Mobile from "./mobile";
// Import Footer_Menu
import Footer_Menu from "../Home/Header/Footer_Menu";
// Import Signin
import Signin from "../Home/Header/SignIn";
// Import Navbar_Win
import Navbar_Win from "../Home/Header/Navbar/Navbar_Win";
// Import NavBar_Mob
import NavBar_Mob from "./mobile/NavBar_Mob";
//Import  React 
import { Fragment } from "react";



const ShowDemand = () => {

    // ======= Get Size ======== //
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));



    return (
        <Fragment>
            {/* Start  ShowDemand*/}
            {/* Size components xs > sm */}
            <Box display={{ xs: "block", md: "none" }} id="navbar-mobile">
                <Container maxWidth="psm">
                    <NavBar_Mob />
                </Container>
            </Box>

            {/* Size components md < xl */}
            <Box display={{ xs: "none", md: "block" }}>
                <Signin />
                <Container maxWidth="xl">
                    <Navbar_Win />
                </Container>
            </Box>

            {/* Size components Mobile And Desktop xs < xl */}
            <Box mt={4}>
                {fullScreen ? <Mobile /> : <Desktop />}
                {/* Component Footer_Menu*/}
                <Footer_Menu />
            </Box>
            {/* End  ShowDemand*/}
        </Fragment>
    )
}



export default ShowDemand;