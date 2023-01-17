// Import Mui
import { Box, Divider, Typography, Skeleton } from "@mui/material";
// Import Mui Icons
import {
  ArticleOutlined,
  Remove,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import Next
import Link from "next/link";
// Import Utils
import { timeAgo } from "../../../utils/ConvertTime";
// Import StatusColor
import { statusColor } from "../../Home/content/Demand/Utils/ConfigColorDemand";
// Import Redux
import { useSelector } from "react-redux";
// Import React
import { Fragment } from "react";
// Import next-i18next
import useTranslation from 'next-translate/useTranslation';

const Information = () => {

  const { t } = useTranslation("show-demand")
  // ======= Items ======== //
  const items = [
    { href: "/", name: "بازگشت / " },
    { href: "/", name: " کنسول / " },
    { href: "/", name: " کنسول و بازی" },
  ];

  // ======= Redux ======== //
  const { showdemand } = useSelector((state) => state);
  const requirement = showdemand.data;

  // ======= StatusColor ======== //
  const status = statusColor(requirement.type);

  return (
    <Fragment>
      {/* Start Information  To DeskTop And Mobile*/}
      <Box id="rightSide-desktop">
        <Box className="d-flex align-center flex-wrap" mt={2}>
          <ArticleOutlined
            sx={{ fontSize: { xs: "20px", md: "21px" }, ml: 1.2 }}
            color="blue"
          />
          {items.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.name}
            </Link>
          ))}
          <Remove fontSize="esmall" color="blue" className="remove-icon" />
        </Box>
        <Box className="box-main" py={{ xs: 2.3, sm: 3 }}>
          {!requirement.location ? (
            <Box className="box-skeleton">
              <Skeleton animation="wave" className="span-1" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" className="span-3" />
              <Skeleton animation="wave" className="span-4" />
              <Skeleton animation="wave" className="span-5" />
            </Box>
          ) : (
            <>
              <Typography
                fontSize={{ xs: "16px", sm: "1.17rem" }}
                mb={{ xs: 1.9, md: 3.5 }}
                component="h5"
                variant="h6"
                color="dark.dark"
                fontWeight="bold"
              >
                {t("show-demand.information.applicant")} {requirement.title}
              </Typography>
              <Grid2 xs={12} container pb={{ xs: 1.5, md: 2.5 }}>
                <Selector
                  title={t("show-demand.information.place-of-advertisement")}
                  dic={
                    showdemand.data.location[0].neighbourhood?.name ??
                    showdemand.data.location[0].city.name
                  }
                />

                <Selector
                  title={t("show-demand.information.budget")}
                  dic={
                    requirement.budget <= 0 ? t("show-demand.information.adaptive") : `${requirement.budget} ${t("show-demand.information.toman")}`
                  }
                />

                <Selector
                  title={t("show-demand.information.demandTime")}
                  dic={timeAgo(requirement.releaseDate)}
                />

                {status ? <Selector title={t("show-demand.information.situation")}
                  dic={status.text} /> : ""}
              </Grid2>

              {/* oK */}
              <Divider />
              {/* OK */}
              <Box mt={{ xs: 2.6, md: 3 }}>
                <Typography
                  fontSize={{ xs: "15px", sm: "1rem", md: "1.1rem" }}
                  component="p"
                  variant="body1"
                  color="dark.dark"
                  fontWeight="600"
                >
                  {t("show-demand.information.descriptionDemand")}
                </Typography>
                <Typography
                  fontSize={{ xs: "12.6px", sm: "0.875rem" }}
                  component="p"
                  mt={{ xs: 0.6, sm: 1.1 }}
                  variant="body2"
                  color="dark.dark"
                  fontWeight="500"
                  lineHeight={1.8}
                >
                  {requirement.description}
                </Typography>
              </Box>
              {/* OK */}
            </>
          )}
        </Box>
      </Box>
      {/* End Information To DeskTop And Mobile */}
    </Fragment>
  );
};

const Selector = ({ title, dic }) => {
  return (
    <Grid2 item xs={12} md={6}>
      {/* Start Selector To DeskTop And Mobile */}
      <Box
        className="d-flex align-center"
        justifyContent={{ xs: "space-between", md: "normal" }}
        pb={2}
      >
        <Typography
          fontSize={{ xs: "13.5px", sm: "15.5px" }}
          component="p"
          variant="body1"
          color="secondary.main"
          fontWeight="800"
        >
          {title}
        </Typography>
        {/* </Box> */}
        <Typography
          pr={2}
          component="p"
          variant="prightSide"
          fontSize={{ xs: "13px", sm: "14.4px" }}
          color="dark.dark"
        >
          {dic}
        </Typography>
      </Box>
      {/* End Selector To DeskTop And Mobile */}
    </Grid2>
  );
};

export default Information;
