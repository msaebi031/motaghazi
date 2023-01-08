// Import Mui
import { Avatar, Box, Container, Typography, Link } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Instagram } from "@mui/icons-material";
// Import next-i18next
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("basic");

  // ======= Time ======== //
  const today = new Date();
  const date = today.getFullYear();

  return (
    <Box component="footer" display={{ xs: "none", md: "block" }}>
      {/* Start Footer */}
      <Container maxWidth="xl">
        <Grid2 id="footer" mt={10} pt={4} container spacing={{ md: 0, lg: 4 }}>
          {/* Start right of ownership */}
          <Grid2 item md={12} lg={4}>
            <Box
              component="img"
              height="43px"
              width="123px"
              src="/imgs/logo.svg"
            />
            <Typography
              mt={{ md: 1.3, lg: 1 }}
              component="p"
              variant="body2"
              color="danger.main"
              fontWeight="600"
            >
              {t("home.footer.appDescription")}
            </Typography>
            <Link
              href="https://patents.google.com/patent/WO2021191653A1/en?oq=2021191653"
              target="_blank"
            >
              {t("home.footer.patentLink")}
            </Link>
          </Grid2>
          {/* End right of ownership */}

          <Grid2
            mt={{ md: 3.5, lg: 0 }}
            display="flex"
            justifyContent="space-between"
            item
            xs={12}
            lg={8}
          >
            {/* Start Socail Media */}
            <Box>
              <Typography
                className="befor-title-footer"
                component="p"
                variant="body1"
                fontSize="17.5px"
                fontWeight="bold"
                color="secondary.dark"
              >
                {t("home.footer.socialNetworks")}
              </Typography>
              <Box display="block" mt={4}>
                <Link href="https://instagram.com/moteghazi" target="_blank">
                  <Avatar className="avatar-instagram">
                    <Instagram />
                  </Avatar>
                </Link>
              </Box>
            </Box>
            {/* End Socail Media */}

            {/* Start quick access */}
            <Box>
              <Typography
                className="befor-title-footer"
                component="p"
                variant="body1"
                fontSize="17.5px"
                fontWeight="bold"
                color="secondary.dark"
              >
                {t("home.footer.access")}
              </Typography>
              <Box display="block" mt={4}>
                <Link
                  href="https://blog.moteghazi.com/terms-conditions"
                  target="_blank"
                >
                  {t("home.footer.rules")}
                </Link>
              </Box>
            </Box>
            {/* End quick access */}

            {/* Start Enemad */}
            <Box>
              <Typography
                className="befor-title-footer"
                component="p"
                variant="body1"
                fontSize="17.5px"
                fontWeight="bold"
                color="secondary.dark"
              >
                {t("home.footer.symbols")}
              </Typography>
              <Box display="flex" alignItems="center" mt={4}>
                <Link href="/">
                  <Avatar
                    className="avatar-img avatar-img-ml"
                    alt="enamad"
                    src="/static/images/avatar/2.jpg"
                    variant="rounded"
                  />
                </Link>
                <Link href="/">
                  <Avatar
                    className="avatar-img"
                    alt="samandehi"
                    src="/static/images/avatar/2.jpg"
                    variant="rounded"
                  />
                </Link>
              </Box>
            </Box>
          </Grid2>
          {/* End Enemad */}

          {/* Start copy Right */}
          <Grid2 mt={5} item xs={12} textAlign="center">
            <Typography
              fontWeight="lighter"
              component="p"
              variant="body2"
              color="secondary"
            >
              Copyright © 2018 - {date}
              <span>Moteghazi.com</span>, All Rights Reserved.
            </Typography>
          </Grid2>
        </Grid2>
        {/* End copy Right */}
      </Container>
      {/* End Footer */}
    </Box>
  );
};

export default Footer;
