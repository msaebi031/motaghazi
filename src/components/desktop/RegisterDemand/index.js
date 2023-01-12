import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../desktop/Home/Header/Footer";
import Mobile from "../../mobile/RegisterDemand";
import Signin from "../../desktop/Home/Header/SignIn";
import Navbar_Win from "../../desktop/Home/Header/Navbar/Navbar_Win";
import NavBar_Mob from "../../mobile/RegisterDemand/NavBar_Mob";
import BoxNew from "./BoxNew";
import BoxGrouping from "./BoxGrouping";
import DataEntry from "./DataEntry";
import MoreDetails from "./MoreDetails";
import BtnStore from "./BtnStore";


const RegisterDemand = () => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <Fragment>
            <Box display={{ xs: "block", md: "none" }} id="navbar-mobile">
                <Container maxWidth="psm">
                    <NavBar_Mob />
                </Container>
            </Box>

            <Box display={{ xs: "none", md: "block" }}>
                <Signin />
                <Container maxWidth="xl">
                    <Navbar_Win />
                </Container>
            </Box>



            <Box>
                {fullScreen
                    ? <Mobile />
                    : (
                        <Container maxWidth="xl">
                            <BoxNew />
                            <BoxGrouping />
                            <DataEntry />
                            <MoreDetails />
                            <BtnStore />
                        </Container>
                    )}
            </Box>
            <Footer />
        </Fragment>
    )
}

export default RegisterDemand;