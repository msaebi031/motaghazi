// Imprt Mui
import { Box, Container, Typography } from "@mui/material";
// Import Mui Icons
import { AddRounded, VpnKeyOutlined } from "@mui/icons-material";
// Import Next
import Link from "next/link";
// Import React
import { Fragment } from "react";
// Import next-translate
import useTranslation from 'next-translate/useTranslation';

const Signin = () => {
  const { t } = useTranslation("basic");

  // ======= Items Menu ======== //
  const itemsMenu = [
    {
      text: t("home.signin.users-sign-in"),
      icon: <VpnKeyOutlined />,
      url: "/login",
    },
    {
      text: t("home.signin.shop-panel"),
      icon: <AddRounded />,
      url: "#",
    },
  ];
  return (
    <Fragment>
      {/* Start Signin */}
      <Box id="signin">
        <Container maxWidth="xl" className="d-flex align-center">
          <Box className="flex_1">
            <nav>
              <ul className="d-flex">
                {/* Start Item Menu Map */}
                {itemsMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="link-signin d-flex align-center"
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                  </li>
                ))}
                {/* End Item Menu Map */}
              </ul>
            </nav>
          </Box>

          <Typography component="div" variant="subtitle2" color="secondary">
            {t("home.signin.appSlogan")}
          </Typography>
        </Container>
      </Box>
      {/* End Signin */}
    </Fragment>
  );
};

export default Signin;
