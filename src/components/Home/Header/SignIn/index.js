// Imprt Mui 
import { Box, Container, Typography } from "@mui/material";
// Import Mui Icons
import { AddRounded, VpnKeyOutlined } from "@mui/icons-material";
// Import Next
import Link from "next/link";
// Import React
import { Fragment } from "react";

const Signin = () => {

  // ======= Items Menu ======== //
  const itemsMenu = [
    {
      text: "ورود کاربران",
      icon: <VpnKeyOutlined />,
      url: "#",
    },
    {
      text: "پنل فروشگاهی",
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
            اولین سامانه مختص ثبت تقاضا به روش هدفمند
          </Typography>
        </Container>
      </Box>
      {/* End Signin */}
    </Fragment>
  );
};

export default Signin;
