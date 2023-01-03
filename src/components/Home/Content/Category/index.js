// Import Mui
import { Box, Divider, Typography } from "@mui/material";
import { DoneAllRounded, KeyboardArrowRightRounded } from "@mui/icons-material";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeBShow,
  handleChangeLabelCategory,
  handleChangeShow,
} from "../../../redux/category";

// Import Utils
import { ShowCard } from "./utils";

const Category = () => {
  // ======= Redux ======== //
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ======= Handles ======== //
  // handle for Select Cagory
  const handleClick = (code, name) => {
    dispatch(handleChangeShow(code));
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
          <ShowCard items={items} handleClick={handleClick} />
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
              <ShowCard
                items={{
                  name:
                    category.label.search("همه") > 0
                      ? category.label
                      : `${category.label} (همه)`,
                  code: "title",
                }}
                handleClick={handleClick}
              />
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
