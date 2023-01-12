// Import Icons Mui
import { ContentCopyOutlined, RecentActorsOutlined, SearchOutlined, Send, ShareOutlined, Telegram, WhatsApp } from "@mui/icons-material";
// Import Mui
import { Box, Button, Card, CardMedia, Fab, Typography } from "@mui/material";
// Import React
import { Fragment, useState } from "react";
// Import Open_DialogTwo
import Open_DialogTwo from "../../desktop/ShowDemand/dialog/Open_DialogTwo";


const LeftSide = () => {

    // ======= UseState ======== //
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);


    // ======= Handles ======== //
    // handle open Btn
    const handleClick = () => {
        setOpen(!open);
    };

    // handle active BtnActive
    const handleActive = () => {
        setActive(!active);
    };



    return (
        <Fragment>
            {/* Satrt LeftSide To Size Mobile*/}
            <Box id="leftSide-mobile">
                <Card className="card-left-mobile">
                    <Typography className="title-card" component="p" variant="body1" my={2} fontWeight="bold" mr={2.5}>
                        تصاویر تقاضا
                    </Typography>
                    <Box className="box-img" mx={2.5} py={{ xs: 5, sm: "77px" }} px={{ xs: 9, sm: "120px" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            width="100%"
                            image="/imgs/logo.svg"
                        />
                    </Box>
                    {/* Satrt Open For If */}
                    {open == true ? (
                        <Box display="flex" pt={3} justifyContent="center">
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
                </Card >
                <Button size="large" onClick={handleClick} sx={{ color: "brown.dark", px: 2, py: 2.2, width: { xs: "50%", sm: "41%" } }} className="btn-card" variant="contained" startIcon={<ShareOutlined color="warning" />}>
                    اشتراک گزاری
                </Button>
                {/* Component Open_DialogTwo*/}
                <Open_DialogTwo />
            </Box>
            {/* End LeftSide To Size Mobile*/}
        </Fragment>
    );
};

export default LeftSide;