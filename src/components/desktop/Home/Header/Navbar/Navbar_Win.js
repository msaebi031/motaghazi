// Import Next
import Link from "next/link";
// Import React
import { Fragment } from "react";
// Import Mui
import { Box, Button } from "@mui/material";
// Import Mui Icons
import { AddRounded } from "@mui/icons-material";
// Import next-i18next
import { useTranslation } from "next-i18next";

const Navbar_Win = () => {
  const { t } = useTranslation("basic");

  // ======= Items Menu ======== //
  const itemsMenu = [
    { text: t("home.navbar.root"), url: "/" },
    { text: t("home.navbar.blog"), url: "/blog" },
    { text: t("home.navbar.terms-conditions"), url: "/blog/terms-conditions" },
    { text: t("home.navbar.about"), url: "/blog/about-us" },
    { text: t("home.navbar.contact"), url: "/blog/contact-us" },
  ];

  return (
    <Fragment>
      {/* Start Navbar At Windows */}
      <Box
        id="navbar"
        className="d-flex align-center"
        pt={2.5}
        component="header"
      >
        <Box className="flex_1 d-flex align-center">
          <Box
            component="img"
            src={"/imgs/logo.svg"}
            alt={t("home.motaghazi")}
            title={t("home.motaghazi")}
            className="logoWin"
          />
          <nav>
            <ul className="d-flex">
              {itemsMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Box>
        <Link href="/registerDemand">
          <Button
            variant="contained"
            startIcon={<AddRounded color="success" />}
            color="success"
            className="btnPlus"
          >
            {t("home.registrationDemand")}
          </Button>
        </Link>
      </Box>
      {/* End Navbar At Windows */}
    </Fragment>
  );
};

export default Navbar_Win;
