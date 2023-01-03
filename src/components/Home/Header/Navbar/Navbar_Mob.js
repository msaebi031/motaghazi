// Import Next
import Link from "next/link";
// Import React
import { Fragment, useState } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenLocation } from "../../../redux/location";

// Import Mui
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Box,
  IconButton,
  Drawer,
  Typography,
  OutlinedInput,
} from "@mui/material";
// Import Mui Icons
import {
  MenuRounded,
  CloseRounded,
  HouseOutlined,
  SupportAgentOutlined,
  SearchRounded,
} from "@mui/icons-material";

const Navbar_Mobile = () => {
  // ======= UseState OPen ======== //
  const [open, setOpen] = useState(false);
  // ======= Redux ======== //
  const { location } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ======= Handles ======== //
  // ======= Handle For OPen Menu ======== //
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      {/* Start  Navbar Mobile*/}
      <Box className="d-flex justify-between align-center" component="header">
        <Box
          component="img"
          src={"/imgs/logo-mobile.svg"}
          alt="سامانه متقاضی"
          title="سامانه متقاضی"
          className="logoMob"
        />
        <IconButton onClick={() => handleOpen()} className="menuIcon">
          <MenuRounded />
        </IconButton>
      </Box>
      {/* Start  Search*/}
      <Box className="d-flex align-center h-100 search" mt={1.5} mb={0.7}>
        <OutlinedInput
          id="outlined-adornment-weight"
          placeholder="دنبال چی میگردی؟"
          sx={{ width: "75%" }}
        />

        <Typography
          component="span"
          variant="caption"
          color="secondary"
          pl={0.7}
          onClick={() => dispatch(handleOpenLocation())}
        >
          {location.label}
        </Typography>
        <SearchRounded color="success" fontSize="small" />
      </Box>
      {/* End  Search*/}
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
      {/* End  Drawer Menu*/}
    </Fragment>
  );
};

export default Navbar_Mobile;
