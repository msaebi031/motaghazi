// Import Mui
import { Box, Typography } from "@mui/material";
// Import Mui Icons
import { ErrorOutline } from "@mui/icons-material";
// Import React
import { Fragment } from "react";



const Attention = () => {
    return (
        <Fragment>
            {/* Start Attention To Desktop And Mobail*/}
            <Box id="attention-desktop">
                <Box className="d-flex align-center">
                    <ErrorOutline />
                    <Typography fontSize={{ xs: "16px", sm: "1.15rem" }} component="h6" variant="h6">
                        توجه داشته باشید
                    </Typography>
                </Box>
                <Typography fontSize={{ xs: "12.6px", sm: "0.875rem" }} component="p" variant="body2" color="secondary.dark">
                    همه تقاضا ها پس از تایید برای فروشگاه های مربوطه ارسال می شود و همزمان در سامانه نیز منتشر می شود. توصیه می شود با فروشگاه هایی که تایید هویت شده اند (با تیک آبی مشخص هستند) و شرایط تحویل در محل و یا درگاه امن را برای تبادل مالی در نظر گرفته اند معامله کنید.
                </Typography>
            </Box>
            {/* End Attention To Desktop And Mobail*/}
        </Fragment>
    )
}

export default Attention;