// Import Mui
import {
  Box,
  Button,
  Card,
  CardMedia,
  Fab,
  Snackbar,
  Typography,
} from "@mui/material";
// Import Mui Icons
import {
  ContentCopyOutlined,
  ErrorOutline,
  RecentActorsOutlined,
  Send,
  ShareOutlined,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
// Import Mui Next
import Link from "next/link";
// Import Mui React
import { Fragment, useState } from "react";
// Import Mui Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenDialog } from "../../redux/showdemand";
// Import Mui Open_Dialog
import Open_Dialog from "./dialog/Open_Dialog";
// Import Mui Open_DialogTwo
import Open_DialogTwo from "./dialog/Open_DialogTwo";
import { useRouter } from "next/router";

const LeftSide = () => {
  const { showdemand } = useSelector((state) => state);
  // ======= UseState Open And Active ======== //
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [toast, setTosify] = useState(false);

  // ======= Handles ======== //
  // handle Open Btn
  const handleClick = () => {
    setOpen(!open);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setTosify(false);
  };

  // handle active BtnActive
  const handleActive = (link) => {
    setActive(!active);
    setTosify(!toast);
    navigator.clipboard.writeText(link);
  };

  // ======= Redux ======== //
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Fragment>
      {/* Satrt LeftSide To Size Desktop*/}
      <Card id="leftSide-desktop">
        {/* {showdemand.data.images.length > 0 ? (
          <Box className="exist-img" p={2}>
            <Box
              component="img"
              src={`/imgs/upload/${showdemand.data.images[0]}`}
            />
          </Box>
        ) : ( */}
        <Box className="box-img" p={{ md: 5, lg: "77px" }}>
          <CardMedia component="img" image="/imgs/logo.svg" />
        </Box>
        {/* )} */}
        <Box px={{ md: 2.6, lg: 4.5 }} className="text-center" mt={3.7}>
          <Link className="a-leftside" href="/">
            <RecentActorsOutlined color="light" />
            <Typography
              component="p"
              pr={2}
              variant="body1"
              color="light.main"
              fontWeight="600"
            >
              تماس با متقاضی
            </Typography>
          </Link>
          <Box className="justify-between d-flex align-center box-btn">
            <Button
              size="large"
              onClick={handleClick}
              sx={{ color: "secondary.dark", px: 2, py: 2.2 }}
              variant="contained"
              startIcon={<ShareOutlined color="warning" />}
            >
              اشتراک گزاری
            </Button>
            <Button
              onClick={() => dispatch(handleOpenDialog())}
              size="large"
              sx={{ color: "secondary.dark", px: 2, py: 2.2 }}
              variant="contained"
              startIcon={<ErrorOutline color="warning" />}
            >
              گزارش اشکال
            </Button>
          </Box>
          {/* Satrt Open For If */}
          {open === true ? (
            <Box className="d-flex justify-center" pb={2.7}>
              <Fab
                className="fableftSide"
                color="primary"
                size="small"
                href={
                  " https://t.me/share/url?url=" +
                  window.location.hostname +
                  router.asPath +
                  "text=" +
                  window.location.hostname +
                  router.asPath
                }
                aria-label="add"
              >
                <Telegram />
              </Fab>
              <Fab
                className="fableftSide"
                size="small"
                href={
                  "whatsapp://send?text=" +
                  window.location.hostname +
                  router.asPath
                }
                color="warning"
                aria-label="add"
              >
                <WhatsApp color="light" />
              </Fab>
              <Button
                onClick={() => {
                  handleActive(window.location.hostname + router.asPath);
                }}
                sx={{
                  color: active ? "light.light" : "secondary.dark",
                  bgcolor: active ? "puperTheme.main" : "transparent",
                }}
                className={
                  active
                    ? "btn-card-active-hover-none btn-card-active"
                    : "btn-card-active-hover btn-card-active"
                }
                variant="contained"
                endIcon={
                  <ContentCopyOutlined color={active ? "light" : "warning"} />
                }
              >
                کپی لینک
              </Button>
            </Box>
          ) : (
            ""
          )}
          {/* End Open For If */}
        </Box>
        {/* Start Components Dialog */}
        <Open_Dialog />
        <Open_DialogTwo />
        {/* End Components Dialog */}
      </Card>
      <Snackbar
        open={toast}
        onClose={handleCloseToast}
        autoHideDuration={3000}
        message="با موفقیت کپی شد"
      />
      {/* End LeftSide To Size Desktop*/}
    </Fragment>
  );
};

export default LeftSide;
