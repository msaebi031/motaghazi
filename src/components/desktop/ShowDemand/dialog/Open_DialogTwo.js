// Import Mui
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogContent,
    IconButton,
    TextareaAutosize,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Import Mui Icons
import { Clear, KeyboardArrowRightRounded } from "@mui/icons-material";
// Import React
import { Fragment, useState } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenDialogTwo } from "../../../redux/showdemand";

const Open_DialogTwo = () => {

    // ======= Get Size ======== //
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));



    // ======= UseState ======== //
    // Value in Input
    const [valueArea, setValueArea] = useState("");



    // ======= Redux ======== //
    const { showdemand } = useSelector((state) => state);
    const dispatch = useDispatch();



    return (
        <Fragment>
            {/*Start Open_DialogTwo */}
            <Dialog
                id="open-dialogTwo"
                fullScreen={fullScreen}
                open={showdemand.openTwo}
                onClose={() => dispatch(handleOpenDialogTwo())}>
                <DialogContent sx={{ height: "209px", width: { md: "300px", lg: "315px" } }}>
                    {/* Start Dialog To Size Mobile*/}
                    <Box
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        <Box
                            py={1.3}
                            sx={{
                                backgroundImage: "linear-gradient(-90deg, #6449d9, #7e31b0)",
                            }}
                            className="gruop-mob"
                        >
                            <Container className="d-flex align-center" maxWidth="sm">
                                <IconButton
                                    onClick={() => dispatch(handleOpenDialogTwo())}>
                                    <KeyboardArrowRightRounded color="light" fontSize="large" />
                                </IconButton>
                                <Typography color="light.main" component="h6" variant="h6" fontSize="1.10rem" fontWeight="700">
                                    گزارش اشکال
                                </Typography>
                            </Container>

                        </Box>
                        <Container className="box-dialog-two-mob" maxWidth="sm">
                            <Typography mt={2} color="dark.light" component="p" variant="body2">
                                توضیحات
                            </Typography>
                            <TextareaAutosize
                                type="text"
                                className="text-box__input-mob"
                            />
                            <Button fullWidth onClick={() => dispatch(handleOpenDialogTwo())} variant="contained" sx={{ color: "light.main" }} color="warning">
                                تایید
                            </Button>
                        </Container>
                    </Box>
                    {/* End Dialog To Size Mobile*/}



                    {/* Start Dialog To Size Desktop*/}
                    <Box mb={.5} mx="-11px" sx={{ display: { xs: "none", md: "block" } }} className="GruopWin">
                        <IconButton onClick={() => dispatch(handleOpenDialogTwo())} className="btn-clearmodalTwo-left" aria-label="delete" size="small">
                            <Clear color="light" />
                        </IconButton>
                        <Typography color="dark.light" component="p" variant="body2">
                            توضیحات
                        </Typography>
                        <Box className="input-text-box">
                            <textarea
                                value={valueArea}
                                onChange={(e) => setValueArea(e.target.value)}
                                className="text-box__input"
                                type="text"
                            />
                        </Box>
                        <Box textAlign="left">
                            <Button onClick={() => dispatch(handleOpenDialogTwo())} className="btn-openmodal-left" variant="contained" sx={{ color: "light.main" }} color="warning">
                                تایید
                            </Button>
                        </Box>
                    </Box>
                    {/* End Dialog To Size Desktop*/}
                </DialogContent>
            </Dialog>
            {/*Start Open_DialogTwo */}
        </Fragment >
    );
};

export default Open_DialogTwo;
