// Import Mui
import { Box, Typography } from "@mui/material";
import { MobileFriendlyOutlined } from "@mui/icons-material";

const ShowCard = ({ items, handleClick, rootSelect }) => {
  return (
    // Start ShowCard Category
    <Box
      className="d-flex align-center pointer childCategory"
      px={2}
      onClick={() =>
        handleClick(items.code, items.name, items.alias, rootSelect ?? "")
      }
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

const SetRouterCategory = (alias, pathname) => {
  if (alias != "all") {
    if (pathname) {
      return `/s/${pathname}/${alias}`;
    } else {
      return `/s/iran/${alias}`;
    }
  } else {
    if (pathname && pathname != "iran") {
      return `/s/${pathname}`;
    } else {
      return "/";
    }
  }
};

const SetRouterLocation = (alias, pathname) => {
  console.log(alias);
  if (alias != "all") {
    if (pathname) {
      return `/s/${alias}/${pathname}`;
    } else {
      return `/s/${alias}`;
    }
  } else {
    if (pathname) {
      return `/s/iran/${pathname}`;
    } else {
      return "/";
    }
  }
};

export { ShowCard, SetRouterCategory, SetRouterLocation };
