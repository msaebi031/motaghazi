// Import Mui
import { Box, Typography, Skeleton } from "@mui/material";
// Import React
import { Fragment } from "react";
// Import Redux
import { useSelector } from "react-redux";


const MoreDetails = () => {

    // ======= Redux ======== //
    const { showdemand } = useSelector((state) => state);
    const requirement = showdemand.data;


    return (
        <Fragment>
            {/* Start MoreDetails To DeskTop */}
            <Box id="moreDetails-desktop">
                {requirement.fields.length >= 1 ? (
                    <Box className="box-main">
                        {showdemand.skeletons ? (
                            <Box className="box-skeleton">
                                <Skeleton animation="wave" className="span-1" />
                                <Skeleton animation="wave" />
                                {/* <Skeleton animation="wave" className="span-3" /> */}
                            </Box>
                        ) : (
                            <>
                                <Typography fontSize={{ xs: "16px", sm: "1.10rem" }} mb={3.5} component="h5" variant="h6" color="dark.dark" fontWeight="bold">
                                    جزییات بیشتر تقاضا
                                </Typography>
                                <Box display={{ xs: "block", sm: "flex" }} mb={1}
                                    mt={4} justifyContent="space-between">
                                    {/* <Divider orientation="vertical" flexItem /> */}
                                    {requirement.fields[0] ? (
                                        <Box justifyContent={{ xs: "space-between", sm: "inherit" }} className="d-flex align-center">
                                            <Typography fontSize={{ xs: "14px", sm: "1rem" }} component="p" variant="body1" color="blue.main" fontWeight="800">
                                                {requirement.fields[0].field.name} :
                                            </Typography>
                                            <Typography fontSize={{ xs: "14px", sm: ".95rem" }} pr={2.5} component="p" variant="body2" color="dark.dark">
                                                {requirement.fields[0].value}
                                            </Typography>
                                        </Box>
                                    ) : ""}

                                    {requirement.fields[1] ? (
                                        <Box mt={{ xs: 3.2, sm: 0 }} justifyContent={{ xs: "space-between", sm: "inherit" }} className="d-flex align-center">
                                            <Typography fontSize={{ xs: "14px", sm: "1rem" }} component="p" variant="body1" color="blue.main" fontWeight="800">
                                                {requirement.fields[1].field.name} :
                                            </Typography>
                                            <Typography fontWeight="500" fontSize={{ xs: "14px", sm: ".95rem" }} pr={2.5} component="p" variant="body2" color="dark.dark">
                                                {requirement.fields[1].value}
                                            </Typography>
                                        </Box>
                                    ) : ""}
                                </Box>
                            </>
                        )}
                    </Box>
                ) : ""}
            </Box>
            {/* Start MoreDetails To DeskTop */}
        </Fragment>
    )
}

export default MoreDetails;














