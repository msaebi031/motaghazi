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
// Import next-translate
import useTranslation from 'next-translate/useTranslation';

const Footer_Menu = () => {
  const { t } = useTranslation("basic");
  // ======= Redux ======== //
  const { category, location, filter } = useSelector((state) => state);
  // ======= useRouter ======== //
  const router = useRouter();
  // ======= Start Items ======== //
  const items = [
    {
      name: t("home.footerMenu.home"),
      href: ["/", "/s/[location]", "/s/[location]/[category]"],
      icon: (
        <OtherHousesOutlined sx={{ fontSize: { xs: "17px", sm: "large" } }} />
      ),
    },
    {
      name: t("home.footerMenu.asnaf"),
      href: "/asnaf",
      icon: <AddOutlined sx={{ fontSize: { xs: "17px", sm: "large" } }} />,
    },
    {
      name: t("home.footerMenu.messages"),
      href: "/messages",
      icon: (
        <MailOutlineOutlined sx={{ fontSize: { xs: "17px", sm: "large" } }} />
      ),
    },
    {
      name: t("home.footerMenu.panel"),
      href: "/panel",
      icon: (
        <AccessTimeOutlined sx={{ fontSize: { xs: "17px", sm: "large" } }} />
      ),
    },
    {
      name: t("home.footerMenu.newDemand"),
      href: "/panel/my-requirements/new",
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
              <Link
                key={index}
                href={typeof item.href == "object" ? item.href[0] : item.href}
              >
                <Box
                  className={
                    typeof item.href == "object"
                      ? item.href.find((element) => element == router.pathname)
                        ? "box-item-before"
                        : "box-item-hover"
                      : router.pathname === item.href
                      ? "box-item-before"
                      : "box-item-hover"
                  }
                  color={
                    typeof item.href == "object"
                      ? item.href.find((element) => element == router.pathname)
                        ? "success.main"
                        : "darkMenu.main"
                      : router.pathname === item.href
                      ? "success.main"
                      : "darkMenu.main"
                  }
                  textAlign="center"
                  py={1.5}
                >
                  {item.icon}
                  <Typography
                    pt={item.pt}
                    fontSize={{ xs: "9.5px", sm: "11px" }}
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

