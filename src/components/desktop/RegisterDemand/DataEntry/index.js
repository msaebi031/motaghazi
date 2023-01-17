// Import Mui
import { Box, Typography } from "@mui/material";
// Import InputAndBtn
import InputAndBtn from "./InputAndBtn";
// Import SelectImage
import SelectImage from "./SelectImage";


const DataEntry = () => {

    return (
        <Fragmen>
            {/* Start DataEntry*/}
            <Box padding={{ xs: 0, md: "24px 44.8px 24px 44.8px" }} id="dataentry">
                <Typography color="brown.contrastText" className="title-box" component="h6" variant="body1" fontWeight="800">
                    ورود اطلاعات تقاضا
                </Typography>
                {/* Component InputAndBtn */}
                <InputAndBtn />
                {/* Component SelectImage */}
                <SelectImage />
            </Box>
            {/* End DataEntry*/}
        </Fragmen>
    )
}

export default DataEntry;

