// Import Next
import Link from "next/link";
// Import Router
import { useRouter } from "next/router";
// Import React
import { Fragment } from "react";
// Import Redux
import { useSelector } from "react-redux";
// Import Mui Icons
import {
  AccessTimeOutlined,
  Add,
  AddOutlined,
  MailOutlineOutlined,
  OtherHousesOutlined,
} from "@mui/icons-material";
// Import Mui
import { Box, Container, Fab, Typography } from "@mui/material";

const Footer_Menu = () => {
  // ======= Redux ======== //
  const { category, location, filter } = useSelector((state) => state);
  // ======= useRouter ======== //
  const router = useRouter();

  // ======= Start Items ======== //
  const items = [
    {
      name: "خانه",
      href: "/",
      icon: (
        <OtherHousesOutlined sx={{ fontSize: { xs: "15px", sm: "large" } }} />
      ),
    },
    {
      name: "پنل فروشگاهی",
      href: "/;;",
      icon: <AddOutlined sx={{ fontSize: { xs: "16px", sm: "large" } }} />,
    },
    {
      name: "پیام ها",
      href: "/;;",
      icon: (
        <MailOutlineOutlined sx={{ fontSize: { xs: "15px", sm: "large" } }} />
      ),
    },
    {
      name: "پنل کاربری",
      href: "/s/iran",
      icon: (
        <AccessTimeOutlined sx={{ fontSize: { xs: "15px", sm: "large" } }} />
      ),
    },
    {
      name: "تقاضای جدید",
      href: "/;;",
      icon: (
        <Fab
          sx={{ left: { xs: "2px", sm: "10%" } }}
          className="box-icon-fad"
          size="medium"
          color="success"
          aria-label="add"
        >
          <Add color="light" fontSize="small" />
        </Fab>
      ),
      pl: 1.5,
      pt: 3.1,
    },
  ];
  // ======= End Items ======== //

  return (
    <Fragment>
      {/* Start Footer_Menu Mobile */}
      <Box
        display={{
          xs: filter.open || category.open || location.open ? "none" : "block",
          md: "none",
        }}
        id="footer-menu"
      >
        <Box className="fixedBox">
          <Container maxWidth="sm" className="d-flex justify-between">
            {/* Start Items Map */}
            {items.map((item, index) => (
              <Link key={index} href={item.href}>
                <Box
                  className={
                    router.pathname === item.href
                      ? "box-item-before"
                      : "box-item-hover"
                  }
                  color={
                    router.pathname === item.href
                      ? "success.main"
                      : "darkMenu.main"
                  }
                  textAlign="center"
                  py={1.5}
                >
                  {item.icon}
                  <Typography
                    pt={item.pt}
                    fontSize={{ xs: "9px", sm: "11px" }}
                    component="p"
                    variant="body2"
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            ))}
            {/* End Items Map */}
          </Container>
        </Box>
      </Box>
      {/* End Footer_Menu Mobile */}
    </Fragment>
  );
};

export default Footer_Menu;
