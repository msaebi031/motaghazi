// Import Mui
import { Box, Typography } from "@mui/material";
// Import next-translate
import useTranslation from 'next-translate/useTranslation';

const ShowCard = ({ items, handleClick, rootSelect }) => {


  const { t } = useTranslation("basic");

  return (
    // Start ShowCard Category
    <Box
      className="d-flex align-center pointer childCategory"
      px={2}
      onClick={() => handleClick(items.code, items.name, items.alias, rootSelect ?? "")}>
      {items.icon ?
        <Typography color={items.color ? items.color : "#19bfaf"} className={items.icon} component="span" variant="body1" />
        :
        <Typography color={items.color ? items.color : "#19bfaf"} className="icon-left" component="span" variant="body1" />
      }
      <Typography
        component="span"
        variant="body1"
        className="Nunito"
        color="secondary.dark"
        pr={1}
      >
        {t("home.content.category.applicants")} {items.name}
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
