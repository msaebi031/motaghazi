import { Fragment } from "react";
import { Box, Container } from "@mui/material";
import Signin from "./SignIn";
import Navbar_Win from "./Navbar/Navbar_Win";
import Search from "./Search";
import Footer_Menu from "./Footer_Menu";
import Navbar_Mobile from "./Navbar/Navbar_Mob";

const Header = () => {
  return (
    <Fragment>
      {/* Size components xs > sm */}
      <Box display={{ xs: "block", md: "none" }} id="navbar-mobile">
        <Container maxWidth="psm">
          <Footer_Menu />
          <Navbar_Mobile />
        </Container>
      </Box>
      {/* Size components xs > sm */}

      {/* Size components md > xl */}
      <Box display={{ xs: "none", md: "block" }}>
        <Signin />
        <Container maxWidth="xl">
          <Navbar_Win />
        </Container>
      </Box>
      {/* Size components md > xl */}

      {/* Checking the size in the components themselves */}
      <Search />
      {/* Checking the size in the components themselves */}
    </Fragment>
  );
};

export default Header;
