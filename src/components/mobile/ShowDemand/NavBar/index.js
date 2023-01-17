// Import React
import { Fragment, useState } from "react";
// Import Mui
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Drawer, Typography, Button, Container } from "@mui/material";
// Import Mui Icons
import {
  MenuRounded,
  CloseRounded,
  HouseOutlined,
  SupportAgentOutlined,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
// Import Next
import Link from "next/link";

const NavBar = () => {
  // ======= UseState OPen ======== //
  const [open, setOpen] = useState(false);

  // ======= Handles ======== //
  // ======= Handle For OPen Menu ======== //
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      {/* Start  Navbar Mobile*/}
      <Box display={{ xs: "block", md: "none" }} id="navbar-mobile">
        <Container maxWidth="psm">
          <Box
            className="d-flex justify-between align-center navbar-mob-app"
            component="header"
          >
            <Link href="/">
              <Button color="light" size="large" startIcon={<KeyboardArrowRightRounded />}>
                بازگشت
              </Button>
            </Link>
            <IconButton onClick={() => handleOpen()} className="menuIcon">
              <MenuRounded />
            </IconButton>
          </Box>
          {/* Start  Drawer Menu*/}
          <Drawer
            anchor="left"
            open={open}
            onClose={() => handleOpen()}
            PaperProps={{
              sx: {
                width: "100%",
              },
            }}
            variant="temporary"
            transitionDuration={300}
          >
            <Box className="d-flex justify-between align-center drawerHeader">
              <Box
                component="img"
                src={"/imgs/logo.svg"}
                alt="سامانه متقاضی"
                title="سامانه متقاضی"
                className="logoMob"
              />
              <IconButton onClick={() => handleOpen()}>
                <CloseRounded color="puper" />
              </IconButton>
            </Box>

            <Grid2 className="itemHeader d-flex justify-center" container>
              <Grid2
                item
                xs={5}
                className="card boxItemHeader"
                onClick={() => handleOpen()}
              >
                <Box className="d-flex align-center justify-between">
                  <Typography
                    component="span"
                    variant="subtitle2"
                    color="secondary"
                  >
                    صفحه اصلی
                  </Typography>

                  <HouseOutlined color="success" />
                </Box>
              </Grid2>

              <Grid2 item xs={5} className="card boxItemHeader">
                <Link href="/support">
                  <Box className="d-flex align-center justify-between">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="secondary"
                    >
                      پشتیبانی
                    </Typography>
                    <SupportAgentOutlined color="primary" />
                  </Box>
                </Link>
              </Grid2>
            </Grid2>
          </Drawer>
        </Container>
      </Box>
      {/* End  Drawer Menu*/}
      {/* End  Navbar Mobile*/}
    </Fragment>
  );
};

export default NavBar;
