// Import Mui 
import { Box, Typography } from "@mui/material";
// Import Mui Icons
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
// Import React
import { Fragment } from "react";

const ExistArrow = ({ data, root, count, handleSelectArrow }) => {

  // ======= Get Data ======== //
  const { name, code, alias } = data;

  return (
    <Fragment>
      {/* Start ExistArrow */}
      <Box
        className="d-flex align-center justify-between"
        onClick={() =>
          handleSelectArrow({ code: code || alias, name, alias, root })
        }
      >
        <Typography component="span" variant="body1">
          {name}
        </Typography>
        <Box className="d-flex align-center">
          {/* Start Count For If */}
          {count ? (
            <Typography component="p" variant="caption" color="secondary" pl={2}>
              {count} زیر مجموعه
            </Typography>
          ) : (
            ""
          )}
          {/* End Count For If */}

          <KeyboardArrowLeftRoundedIcon />
        </Box>
      </Box>
      {/* End ExistArrow */}
    </Fragment>
  );
};
export default ExistArrow;