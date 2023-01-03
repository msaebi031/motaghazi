// Import Mui
import { Box, Typography } from "@mui/material";
import { MobileFriendlyOutlined } from "@mui/icons-material";

export const ShowCard = ({ items, handleClick }) => {
  return (
    // Start ShowCard Category
    <Box
      className="d-flex align-center pointer childCategory"
      px={2}
      onClick={() => handleClick(items.code, items.name)}
    >
      <MobileFriendlyOutlined color="successLight" fontSize="medium" />
      <Typography
        component="span"
        variant="body1"
        className="Nunito"
        color="secondary.dark"
        pr={1}
      >
        متقاضیان {items.name}
      </Typography>
    </Box>
    // End ShowCard Category
  );
};
