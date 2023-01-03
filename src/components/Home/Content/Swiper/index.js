// import Swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Mui
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// Import Utils
import { itemsSwiper } from "./item";

const Swipers = () => {
  // ======= Get Size ======== //
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      id="swiper"
    >
      {/* Start swiper */}
      {itemsSwiper.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            height={{ xs: "285px", sm: "260px", md: "260px" }}
            component="img"
            src={
              fullScreen
                ? `/imgs/slideshow/mobile/${item.img}`
                : `/imgs/slideshow/${item.img}`
            }
            alt={item.title}
            title={item.title}
          />
          <Box
            position="absolute"
            right={{ xs: "15px", md: "35px" }}
            className="textSwiper"
          >
            <Typography
              width={{ xs: "55%", sm: "64%", md: "47%", lg: "65%" }}
              component="h4"
              variant="h6"
              fontSize={{
                xs: "15.4px",
                sm: "1.11rem",
                md: "1.2em",
                lg: "1.4em",
              }}
              lineHeight={{ xs: "30px", md: "37px" }}
              fontWeight="800"
              sx={{
                "::before": { backgroundColor: item.color },
                color: item.color,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              width={{ xs: "48%", md: "40%" }}
              mt={{ xs: "18px", sm: "28px", md: "26px" }}
              fontSize={{ xs: "11.7px", sm: ".82em", md: ".90em" }}
              lineHeight={{ xs: "23px", md: "30px" }}
              component="p"
              variant="body1"
            >
              {item.dic}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
      {/* End Swiper */}
    </Swiper>
  );
};

export default Swipers;
