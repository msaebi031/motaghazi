// Import Mui
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import Footer_Menu
import Footer_Menu from "../../mobile/Home/Header/Footer_Menu";
// Import Signin
import Signin from "../Home/Header/SignIn";
// Import Navbar_Win
import Navbar_Win from "../Home/Header/Navbar/Navbar_Win";
// Import NavBar
import NavBar from "../../mobile/ShowDemand/NavBar";
// Import Attention
import Attention from "./Attention";
//Import React
import { Fragment } from "react";
//Import Mobile
import Mobile from "../../mobile/ShowDemand";
//Import Demand_Information
import Demand_Information from "./Demand_Information";
// Import ShareBox
import ShareBox from "./ShareBox";

const ShowDemand = () => {
  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      {/* Start  ShowDemand*/}
      {/* Size components xs > sm */}
      <NavBar />
      {/* Size components md < xl */}
      <Box display={{ xs: "none", md: "block" }}>
        <Signin />
        <Container maxWidth="xl">
          <Navbar_Win />
        </Container>
      </Box>

      {/* Size components Mobile And Desktop xs < xl */}
      <Box mt={4} mb={{ xs: 13, md: 5 }}>
        {fullScreen ? (
          <Mobile />
        ) : (
          <Container maxWidth="xl">
            {/* Start Desktop To Size Desktop */}
            <Grid2 container spacing={2}>
              <Grid2 item xs={7.6} lg={7.8}>
                {/* Component Information and MoreDetails*/}
                <Demand_Information />
                {/* Component Attention*/}
                <Attention />
              </Grid2>
              <Grid2 item xs={4.4} lg={4.2}>
                {/* Component LeftSide*/}
                <ShareBox />
              </Grid2>
            </Grid2>
            {/* Start Desktop To Size Desktop */}
          </Container>
        )}

        {/* Component Footer_Menu*/}
        <Footer_Menu />
      </Box>
      {/* End  ShowDemand*/}
    </Fragment>
  );
};

export default ShowDemand;
