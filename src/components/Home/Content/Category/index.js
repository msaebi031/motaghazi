// Import Mui
import { Box, Divider, Typography } from "@mui/material";
import { DoneAllRounded, KeyboardArrowRightRounded } from "@mui/icons-material";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeBShow,
  handleChangeLabelCategory,
  handleChangeRootSelect,
  handleChangeShow,
} from "../../../redux/category";

// Import Utils
import { SetRouterCategory, ShowCard } from "./utils";

// Import Router
import { useRouter } from "next/router";
// Import next-i18next
import { useTranslation } from "next-i18next";

const Category = () => {
  const { t } = useTranslation("basic");
  // ======= Redux ======== //
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ======= UseRouter ======== //
  const router = useRouter();
  // ======= Handles ======== //
  // handle for Select Cagory
  const handleClick = (code, name, alias, rootSelect) => {
    const pathname = router.asPath.split("/");
    if (code != category.show) {
      dispatch(handleChangeShow(code));
    } else {
      dispatch(handleChangeShow("title"));
    }
    if (rootSelect) {
      dispatch(handleChangeRootSelect(rootSelect));
    }
    router.replace(SetRouterCategory(alias, pathname[2]), null, {
      scroll: false,
    });

    dispatch(handleChangeLabelCategory(name));
  };

  // handle for back category
  const handleBack = () => {
    dispatch(handleChangeShow(category.bShow));
    dispatch(handleChangeBShow(""));
  };

  // handle for Search redux category
  const handleFind = (code) => {
    const find = category.parent.find((p) => p.code == code);
    if (find) {
      return find.item;
    } else return undefined;
  };

  return (
    <Box className="card" id="category" px={1} pb={1}>
      {/* Start No Select Category , Show Root Category */}
      {!category.show ? (
        category.root.map((items, index) => (
          <ShowCard
            key={index}
            items={items}
            rootSelect={items.code}
            handleClick={handleClick}
          />
        ))
      ) : (
        // End No Select Category , Show Root Category
        <>
          {/* Start Show Selected Category  */}
          <Box
            className="d-flex align-center pointer"
            onClick={() => handleBack()}
            px={2}
          >
            <KeyboardArrowRightRounded color="success" />
            <Typography
              component="span"
              variant="subtitle2"
              color="success.main"
              pr={2}
            >
              {t("home.content.category.comingBack")}
            </Typography>
          </Box>
          <Divider />
          {handleFind(category.show) ? (
            <>
              {handleFind(category.show).map((items, index) => (
                <ShowCard key={index} items={items} handleClick={handleClick} />
              ))}
              {/* End Show Selected Category  */}
            </>
          ) : (
            // Start Selected Category, Not Parent,Show  In Search

            <Box className="d-flex align-center" px={{ md: 1, lg: 2 }}>
              <DoneAllRounded color="successLight" />
              <Typography
                component="span"
                variant="subtitle2"
                color="secondary.dark"
                pr={2}
              >
                {t("home.content.category.applicants")} {category.label}
              </Typography>
            </Box>
            // End Selected Category, Not Parent,Show  In Search
          )}
        </>
      )}
    </Box>
  );
};

export default Category;
