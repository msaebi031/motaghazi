// Import Mui Icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// Import Mui
import { Box, Typography } from "@mui/material";
// Import React
import { Fragment } from "react";

const Selector = ({ name, dic }) => {
  return (
    <Fragment>
      {/*Start Selector Name */}
      <Box className="d-flex align-center h-100 selector" px={1.5}>
        <Typography component="span" variant="subtitle2" className="flex_1">
          {name}
        </Typography>
        {/*End Selector Name */}

        {/*Start Selector Dic */}
        <Typography component="span" variant="caption" color="secondary" pl={0.7}>
          {dic}
        </Typography>
        <KeyboardArrowDownRoundedIcon color="secondary" fontSize="small" />
        {/*End Selector Dic */}
      </Box>
    </Fragment>
  );
};

export default Selector;
