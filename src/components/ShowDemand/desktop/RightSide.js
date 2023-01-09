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
// Import Next
import Link from "next/link";
// Import Utils
import { timeAgo } from "../../utils/ConvertTime";
// Import StatusColor
import { statusColor } from "../../Home/Content/Demand/Utils/ConfigColorDemand";
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
  console.log(requirement.location);

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
          {showdemand.skeletons ? (
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
              {/* <Divider sx={{ display: { xs: "block", md: "none" } }} /> */}
              <Box
                mb={3}
                mt={{ xs: 4.3, sm: 5 }}
                display={{ xs: "block", sm: "flex" }}
                justifyContent="space-between"
              >
                <Box
                  justifyContent={{ xs: "space-between", sm: "inherit" }}
                  className="d-flex align-center"
                >
                  <Box className="d-flex align-center">
                    <RoomOutlined
                      sx={{ fontSize: { xs: "19px", sm: "1.5rem" }, ml: 0.7 }}
                      color="warning"
                    />
                    <Typography
                      fontSize={{ xs: "14px", sm: "1rem" }}
                      component="p"
                      variant="body1"
                      color="blue.main"
                      fontWeight="800"
                    >
                      محل آگهی :
                    </Typography>
                  </Box>
                  <Typography
                    pr={2.5}
                    component="p"
                    variant="prightSide"
                    fontWeight="600"
                    fontSize={{ xs: "14px", sm: "16px" }}
                    color="dark.dark"
                  >
                    {/* {showdemand.data.location[0].neighbourhood?.name ??
                      showdemand.data.location[0].city.name} */}
                  </Typography>
                </Box>
                <Box
                  justifyContent={{ xs: "space-between", sm: "inherit" }}
                  mt={{ xs: 3.2, sm: 0 }}
                  className="d-flex align-center"
                >
                  <Box className="d-flex align-center">
                    <AttachMoneyOutlined
                      sx={{ fontSize: { xs: "19.9px", sm: "1.5rem" }, ml: 0.7 }}
                      color="warning"
                    />
                    <Typography
                      fontSize={{ xs: "14px", sm: "1rem" }}
                      component="p"
                      variant="body1"
                      color="blue.main"
                      fontWeight="800"
                    >
                      بودجه :
                    </Typography>
                  </Box>
                  <Typography
                    fontWeight="600"
                    fontSize={{ xs: "14px", sm: "1rem" }}
                    pr={2.5}
                    component="p"
                    variant="body2"
                    color="dark.dark"
                  >
                    {requirement.budget <= 0
                      ? " توافقی"
                      : `${requirement.budget} تومان`}
                  </Typography>
                </Box>
              </Box>
              {/* oK */}
              <Box
                mb={3}
                mt={{ xs: 3.2, sm: 5 }}
                display={{ xs: "block", sm: "flex" }}
                justifyContent="space-between"
              >
                {/* <Divider orientation="vertical" flexItem textAlign="center"/> */}
                <Box
                  justifyContent={{ xs: "space-between", sm: "inherit" }}
                  className="d-flex align-center"
                >
                  <Box className="d-flex align-center">
                    <AccessTimeOutlined
                      fontSize="small"
                      color="warning"
                      sx={{ fontSize: { xs: "16.5px", sm: "1.3rem" }, ml: 0.7 }}
                    />
                    <Typography
                      fontSize={{ xs: "14px", sm: "1rem" }}
                      component="p"
                      pr={0.6}
                      variant="body1"
                      color="blue.main"
                      fontWeight="800"
                    >
                      زمان درج تقاضا :
                    </Typography>
                  </Box>
                  <Typography
                    fontWeight="600"
                    fontSize={{ xs: "14px", sm: ".950rem" }}
                    pr={2.5}
                    component="p"
                    variant="body2"
                    color="dark.dark"
                  >
                    {/* {timeAgo(requirement.releaseDate)} */}
                  </Typography>
                </Box>
                {status ? (
                  <Box
                    justifyContent={{ xs: "space-between", sm: "inherit" }}
                    mt={{ xs: 3.2, sm: 0 }}
                    className="d-flex align-center"
                  >
                    <Box className="d-flex align-center">
                      <ModeFanOffOutlined
                        sx={{ fontSize: { xs: "19px", sm: "1.3rem" }, ml: 0.7 }}
                        color="warning"
                      />
                      <Typography
                        component="p"
                        variant="body1"
                        color="blue.main"
                        fontWeight="800"
                      >
                        وضعیت :
                      </Typography>
                    </Box>
                    <Typography
                      fontWeight="600"
                      fontSize={{ xs: "14px", sm: "1rem" }}
                      pr={2.5}
                      component="p"
                      variant="body2"
                      color="dark.dark"
                    >
                      {status.text}
                    </Typography>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
              {/* oK */}
              <Divider />
              {/* OK */}
              <Box mt={{ xs: 2.6, md: 3 }}>
                <Typography
                  fontSize={{ xs: "15px", sm: "1rem", md: "1.1rem" }}
                  component="p"
                  variant="body1"
                  color="blue.main"
                  fontWeight="800"
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

export default RightSide;
