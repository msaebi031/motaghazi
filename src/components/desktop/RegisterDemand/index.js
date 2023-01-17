// Import Mui
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
// Import React
import { Fragment } from "react";
// Import Component Mobile
import Mobile from "../../mobile/RegisterDemand";
// Import Component Signin
import Signin from "../../desktop/Home/Header/SignIn";
// Import Component Navbar_Win
import Navbar_Win from "../../desktop/Home/Header/Navbar/Navbar_Win";
// Import Component NavBar_Mob
import NavBar_Mob from "../../mobile/RegisterDemand/NavBar_Mob";
// Import Component BoxNew
import BoxNew from "./Grouping_New/BoxNew";
// Import Component BoxGrouping
import BoxGrouping from "./Grouping_New/BoxGrouping";
// Import Component DataEntry
import DataEntry from "./DataEntry";
// Import Component BtnStore
import BtnStore from "./BtnStore";
// Import Component Footer
import Footer from "../Home/Footer";
// Import Component MoreDetails
import MoreDetails from "./MoreDetails";


const RegisterDemand = () => {

    // ======= Get Size ======== //
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Fragment>
            {/* Start  RegisterDemand*/}
            {/* Size components xs > sm */}
            <NavBar />
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
            <Box>
                {fullScreen
                    ? <Mobile />
                    : (
                        <Container maxWidth="xl">
                            {/* Start Desktop To Size Desktop */}
                            {/* Component BoxNew*/}
                            <BoxNew />
                            {/* Component BoxGrouping*/}
                            <BoxGrouping />
                            {/* Component DataEntry*/}
                            <DataEntry />
                            {/* Component MoreDetails*/}
                            <MoreDetails />
                            {/* Component BtnStore*/}
                            <BtnStore />
                            {/* End Desktop To Size Desktop */}
                        </Container>
                    )}
            </Box>
            {/* Component Footer*/}
            <Footer />
        </Fragment>
    )
}

export default RegisterDemand;