// Import Mui
import { Box, Divider, Typography, Skeleton } from "@mui/material";
// Import Mui Icons
import {
  AccessTimeOutlined,
  ArticleOutlined,
  AttachMoneyOutlined,
  ModeFanOffOutlined,
  Remove,
  RoomOutlined,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
// Import Next
import Link from "next/link";
// Import Utils
import { timeAgo } from "../../utils/ConvertTime";
// Import StatusColor
import { statusColor } from "../../../components/desktop/Home/Content/Demand/Utils/ConfigColorDemand";
// Import Redux
import { useSelector } from "react-redux";
// Import React
import { Fragment } from "react";

const RightSide = () => {
  // ======= Items ======== //
  const items = [
    { href: "", name: "بازگشت / " },
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
      <Box id="rightSide-desktop">
        <Box className="d-flex align-center" mt={2}>
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
                متقاضی {requirement.title}
              </Typography>
              <Grid2 container pb={{ xs: 1.5, md: 2.5 }}>
                <Selector
                  title="محل آگهی :"
                  dic={
                    showdemand.data.location[0].neighbourhood?.name ??
                    showdemand.data.location[0].city.name
                  }
                />

                <Selector
                  title="بودجه :"
                  dic={
                    requirement.budget <= 0
                      ? " توافقی"
                      : `${requirement.budget} تومان`
                  }
                />

                <Selector
                  title="زمان درج تقاضا :"
                  dic={timeAgo(requirement.releaseDate)}
                />

                {status ? <Selector title="وضعیت :" dic={status.text} /> : ""}
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
                  توضیحات تقاضا
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
    </Fragment>
  );
};

const Selector = ({ title, dic }) => {
  return (
    <Grid2 item xs={12} md={6}>
      <Box
        className="d-flex align-center"
        justifyContent={{ xs: "space-between", md: "normal" }}
        pb={2}
      >
        {/* <RoomOutlined
                      sx={{ fontSize: { xs: "19px", sm: "1.3rem" }, ml: 0.7 }}
                      color="puper"
                    /> */}
        <Typography
          fontSize={{ xs: "13.5px", sm: "15px" }}
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
          fontSize={{ xs: "13px", sm: "14px" }}
          color="dark.dark"
        >
          {dic}
        </Typography>
      </Box>
    </Grid2>
  );
};

export default RightSide;
