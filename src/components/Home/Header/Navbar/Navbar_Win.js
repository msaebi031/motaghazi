// Import Next
import Link from "next/link";
// Import React
import { Fragment } from "react";
// Import Mui
import { Box, Button } from "@mui/material";
// Import Mui Icons
import { AddRounded } from "@mui/icons-material";

const Navbar_Win = () => {
  // ======= Items Menu ======== //
  const itemsMenu = [
    { text: "صفحه اصلی", url: "/" },
    { text: "بلاگ", url: "/blog" },
    { text: "قوانین و مقررات", url: "/blog/terms-conditions" },
    { text: "درباره ما", url: "/blog/about-us" },
    { text: "تماس با ما", url: "/blog/contact-us" },
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
            alt="سامانه متقاضی"
            title="سامانه متقاضی"
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

        <Button
          variant="contained"
          startIcon={<AddRounded color="success" />}
          color="success"
          className="btnPlus"
        >
          ثبت آگهی تقاضا
        </Button>
      </Box>
      {/* End Navbar At Windows */}
    </Fragment>
  );
};

export default Navbar_Win;
