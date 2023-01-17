// Import Mui
import { Box, Typography } from "@mui/material";
// Import Mui Icons
import { ErrorOutline } from "@mui/icons-material";
// Import React
import { Fragment } from "react";
// Import next-translate
import useTranslation from 'next-translate/useTranslation';



const Attention = () => {

    const { t } = useTranslation("show-demand");

    return (
        <Fragment>
            {/* Start Attention To Desktop And Mobail*/}
            <Box id="attention-desktop">
                <Box className="d-flex align-center">
                    <ErrorOutline />
                    <Typography fontSize={{ xs: "16px", sm: "1.15rem" }} component="h6" variant="h6">
                        {t("show-demand.attention.noteText")}
                    </Typography>
                </Box>
                <Typography fontSize={{ xs: "12.6px", sm: "0.875rem" }} component="p" variant="body2" color="secondary.dark">
                    {t("show-demand.attention.description")}
                </Typography>
            </Box>
            {/* End Attention To Desktop And Mobail*/}
        </Fragment>
    )
}

export default Attention;