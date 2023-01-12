// Import Mui
import { Box, Button, Card, CardMedia, Fab, Typography } from "@mui/material";
// Import Mui Icons 
import { ContentCopyOutlined, ErrorOutline, RecentActorsOutlined, Send, ShareOutlined, Telegram, WhatsApp } from "@mui/icons-material";
// Import Mui Next
import Link from "next/link";
// Import Mui React
import { Fragment, useState } from "react";
// Import Mui Redux
import { useDispatch } from "react-redux";
import { handleOpenDialog } from "../../redux/showdemand";
// Import Mui Open_Dialog
import Open_Dialog from "./dialog/Open_Dialog";
// Import Mui Open_DialogTwo
import Open_DialogTwo from "./dialog/Open_DialogTwo";




const LeftSide = () => {


    // ======= UseState Open And Active ======== //
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);


    // ======= Handles ======== //
    // handle Open Btn
    const handleClick = () => {
        setOpen(!open);
    };

    // handle active BtnActive
    const handleActive = () => {
        setActive(!active);
    };


    // ======= Redux ======== //
    const dispatch = useDispatch();


    return (
        <Fragment>
            {/* Satrt LeftSide To Size Desktop*/}
            <Card id="leftSide-desktop">
                <Box className="box-img" p={{ md: 5, lg: "77px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        width="100%"
                        image="/imgs/logo.svg"
                    />
                </Box>
                <Box px={{ md: 2.6, lg: 4.5 }} className="text-center" mt={3.7}>
                    <Link className="a-leftside" href="/">
                        <RecentActorsOutlined color="light" />
                        <Typography component="p" pr={2} variant="body1" color="light.main" fontWeight="600">
                            تماس با متقاضی
                        </Typography>
                    </Link>
                    <Box className="justify-between d-flex align-center box-btn">
                        <Button size="large" onClick={handleClick} sx={{ color: "secondary.dark", px: 2, py: 2.2 }} variant="contained" startIcon={<ShareOutlined color="warning" />}>
                            اشتراک گزاری
                        </Button>
                        <Button onClick={() => dispatch(handleOpenDialog())} size="large" sx={{ color: "secondary.dark", px: 2, py: 2.2 }} variant="contained" startIcon={<ErrorOutline color="warning" />}>
                            گزارش اشکال
                        </Button>
                    </Box>
                    {/* Satrt Open For If */}
                    {open === true ? (
                        <Box className="d-flex justify-center" pb={2.7}>
                            <Fab className="fableftSide" color="primary" size="small" href="/" aria-label="add">
                                <Telegram />
                            </Fab>
                            <Fab className="fableftSide" size="small" href="/" color="warning" aria-label="add">
                                <WhatsApp color="light" />
                            </Fab>
                            <Button onClick={handleActive}
                                sx={{ color: active ? "light.light" : "secondary.dark", bgcolor: active ? "puperTheme.main" : "transparent" }}
                                className={active ? "btn-card-active-hover-none btn-card-active" : "btn-card-active-hover btn-card-active"}
                                variant="contained"
                                endIcon={<ContentCopyOutlined color={active ? "light" : "warning"} />}>
                                کپی لینک
                            </Button>
                        </Box>
                    ) : ""}
                    {/* End Open For If */}
                </Box>
                {/* Start Components Dialog */}
                <Open_Dialog />
                <Open_DialogTwo />
                {/* End Components Dialog */}
            </Card >
            {/* End LeftSide To Size Desktop*/}
        </Fragment>
    );
};

export default LeftSide;