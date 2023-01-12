// Import Mui
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogContent,
    FormControl,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Import Mui Icons
import { Clear, KeyboardArrowRightRounded } from "@mui/icons-material";
// Import React
import { Fragment } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpenDialog, handleOpenDialogTwo } from "../../../redux/showdemand";
// Import next-i18next
// import { useTranslation } from "next-i18next";


const Open_Dialog = () => {


    // const { t } = useTranslation("show-demand");
    // {t("show-demand.dialog.reason")}

    // ======= Get Size ======== //
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));



    // ======= Redux ======== //
    const { showdemand } = useSelector((state) => state);
    const dispatch = useDispatch();


    // ======= Items ======== //
    const items = ["خرید متغاضی انجام شده", "بودجه غیر واقعی و کم است", "آگهی عرضه(فروش) می باشد", "فعلا تصمیم به خرید ندارم", "کالا در بازار مو جود نمی باشد", "سایر موارد"];



    return (
        <Fragment>
            {/*Start Open_Dialog */}
            <Dialog
                id="open-dialog"
                fullScreen={fullScreen}
                open={showdemand.open}
                onClose={() => dispatch(handleOpenDialog())}
            >
                <DialogContent sx={{ height: "370px", width: { md: "300px", lg: "350px" } }}>
                    {/*Start Dialog To Size Mobile */}
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
                                    onClick={() => dispatch(handleOpenDialog())}>
                                    <KeyboardArrowRightRounded color="light" fontSize="large" />
                                </IconButton>
                                <Typography color="light.main" component="h6" variant="h6" fontSize="1.10rem" fontWeight="700">
                                    گزارش اشکال
                                </Typography>
                            </Container>

                        </Box>
                        <Container className="box-dialog-mob" maxWidth="sm">
                            <Typography mt={2} color="dark.light" component="p" variant="body2">
                                دلیل *
                            </Typography>
                            <Box className="box-dialog-mob" py={1} display="grid" mt={1.5} boxShadow="0 0 18px rgb(159 171 180 / 60%)" bgcolor="light.main" borderRadius="5px">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        {items.map((item, index) => (
                                            <FormControlLabel key={index} value={item} control={<Radio color="info" />} label={item} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Button fullWidth onClick={() => { dispatch(handleOpenDialog()); dispatch(handleOpenDialogTwo()); }} variant="contained" sx={{ color: "light.main" }} color="warning">
                                تایید
                            </Button>
                        </Container>
                    </Box>
                    {/*End Dialog To Size Mobile */}
                    {/*Start Dialog To Size Desktop */}
                    <Box mb={.5} mx="-11px" sx={{ display: { xs: "none", md: "block" } }} className="GruopWin">
                        <IconButton onClick={() => dispatch(handleOpenDialog())} className="btn-clearmodalOne-left" aria-label="delete" size="small">
                            <Clear color="light" />
                        </IconButton>
                        <Typography color="dark.light" component="p" variant="body2">
                            دلیل *
                        </Typography>
                        <Box py={1} display="grid" mt={1.5} boxShadow="0 0 3px #8f8f8f" bgcolor="light.main" borderRadius="5px">
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    {items.map((item, index) => (
                                        <FormControlLabel key={index} value={item} control={<Radio required color="info" />} label={item} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box textAlign="left">
                            <Button onClick={() => { dispatch(handleOpenDialog()); dispatch(handleOpenDialogTwo()); }} className="btn-openmodal-left" variant="contained" sx={{ color: "light.main" }} color="warning">
                                تایید
                            </Button>
                        </Box>
                    </Box>
                    {/*End Dialog To Size Desktop */}
                </DialogContent>
            </Dialog>
            {/*End Open_Dialog */}
        </Fragment>
    );
};

export default Open_Dialog;
