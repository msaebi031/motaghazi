// Import Mui Icons
import { ErrorOutline, PermPhoneMsgOutlined } from "@mui/icons-material";
// Import Mui
import { Box, Button } from "@mui/material";
// Import dialog
import Open_Dialog from "../desktop/dialog/Open_Dialog";
// Import Redux
import { useDispatch } from "react-redux";
import { handleOpenDialog } from "../../redux/showdemand";
// Import React
import { Fragment } from "react";


const BtnModal = () => {


    // ======= Redux ======== //
    const dispatch = useDispatch();

    return (
        <Fragment>
            {/* Start BtnModal */}
            <Box id="btnModal" className="d-flex align-center justify-between">
                <Button onClick={() => dispatch(handleOpenDialog())} size="large" sx={{ color: "brown.dark", px: 2, py: 2.2 }} className="btn-right" variant="contained" startIcon={<ErrorOutline color="brown.dark" />}>
                    گزارش اشکال
                </Button>
                <Button size="large" color="successLight" sx={{ color: "light.main", px: 2, py: 2.2 }} className="btn-left" variant="contained" startIcon={<PermPhoneMsgOutlined fontSize="small" color="light.main" />}>
                    ارسال پیشنهاد
                </Button>
                <Open_Dialog />
            </Box>
            {/* End BtnModal */}
        </Fragment>
    );
};

export default BtnModal;