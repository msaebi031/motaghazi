// Import Mui
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
// Import Footer_Menu
import Footer_Menu from "../../mobile/Home/Header/Footer_Menu";
// Import Signin
import Signin from "../Home/Header/SignIn";
// Import Navbar_Win
import Navbar_Win from "../Home/Header/Navbar/Navbar_Win";
// Import NavBar_Mob
import NavBar_Mob from "../../mobile/ShowDemand/NavBar_Mob";
// Import Mui RightSide
import RightSide from "./RightSide";
// Import Mui Attention
import Attention from "./Attention";
// Import Mui LeftSide
import LeftSide from "./LeftSide";
// Import Mui MoreDetails
import MoreDetails from "./MoreDetails";
//Import  React 
import { Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Mobile from "../../mobile/ShowDemand";



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
            <Box mt={4} mb={13}>
                {fullScreen ? (
                    <Mobile />
                ) : (
                    <Container maxWidth="xl">
                        {/* Start Desktop To Size Desktop */}
                        <Grid2 container spacing={2}>
                            <Grid2 item xs={7.7} lg={7.8}>
                                {/* Component RightSide*/}
                                <RightSide />
                                {/* Component MoreDetails*/}
                                <MoreDetails />
                                {/* Component Attention*/}
                                <Attention />
                            </Grid2>
                            <Grid2 item xs={4.3} lg={4.2}>
                                {/* Component LeftSide*/}
                                <LeftSide />
                            </Grid2>
                        </Grid2>
                        {/* Start Desktop To Size Desktop */}
                    </Container>
                )}

                {/* Component Footer_Menu*/}
                <Footer_Menu />
            </Box>
            {/* End  ShowDemand*/}
        </Fragment >
    )
}



export default ShowDemand;