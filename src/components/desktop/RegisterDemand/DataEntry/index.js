import { Box, Typography } from "@mui/material";
import InputAndBtn from "./InputAndBtn";
import SelectImage from "./SelectImage";


const DataEntry = () => {


    return (
        <Box padding={{ xs: 0, md: "24px 44.8px 24px 44.8px" }} id="dataentry">
            <Typography color="brown.contrastText" className="title-box" component="h6" variant="body1" fontWeight="800">
                ورود اطلاعات تقاضا
            </Typography>
            <InputAndBtn />
            <SelectImage />
        </Box>
    )
}

export default DataEntry;

