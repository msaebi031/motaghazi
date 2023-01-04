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

const Category = () => {
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
    router.push(SetRouterCategory(alias, pathname[2]), null, {
      shallow: true,
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
        category.root.map((items) => (
          <ShowCard
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
              بازگشت
            </Typography>
          </Box>
          <Divider />
          {handleFind(category.show) ? (
            <>
              {handleFind(category.show).map((items) => (
                <ShowCard items={items} handleClick={handleClick} />
              ))}
              {/* End Show Selected Category  */}
            </>
          ) : (
            // Start Selected Category, Not Parent,Show  In Search

            <Box className="d-flex align-center" px={2}>
              <DoneAllRounded color="successLight" />
              <Typography
                component="span"
                variant="subtitle2"
                color="secondary.dark"
                pr={2}
              >
                متقاضیان {category.label}
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
