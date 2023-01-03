// Import Mui Icon
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// Import Mui
import { Box, Typography } from "@mui/material";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeShow,
  handleChangeBShow,
  handleChangeName,
  handleChangeLabelCategory,
} from "../../../../../redux/category";
// Import Utils
import ExistArrow from "../Utils/ExistArrow";
// Import Router
import { useRouter, withRouter } from "next/router";
// Import React
import { Fragment } from "react";

// ======= handleSelectArrow ======== //
export const handleSelectArrow = (code) => {
  const dispatch = useDispatch();
  dispatch(handleChangeShow(code));
};

const Category = ({ handleClose }) => {
  // ======= Redux ======== //
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();
  // ======= UseRouter ======== //
  const router = useRouter();

  // ======= Handles ======== //
  // handle for serach parent cateory
  const findItem = (code) => {
    const find = category.parent.find((p) => p.code == code);
    if (find) {
      return find.item;
    } else return undefined;
  };

  //  Handle For Select Item
  const handleSelect = ({ code, name }) => {
    const pathname = router.asPath.split("/");
    if (code != "all") {
      if (pathname[2]) {
        router.push(`/s/${pathname[2]}/${code}`, null, { shallow: true });
      } else {
        router.push(`/s/iran/${code}`, null, { shallow: true });
      }
    } else {
      if (pathname[2]) {
        router.push(`/s/${pathname[2]}`, null, { shallow: true });
      } else {
        router.push(`/s/iran`, null, { shallow: true });
      }
    }
    dispatch(handleChangeLabelCategory(name));
    // router.push({ href: "/", query: { myQueryParam: code } });
    handleClose();
  };

  // Handle For Select Category
  const handleSelectArrow = ({ code, name, alias }) => {
    dispatch(handleChangeShow(code));
    dispatch(handleChangeName({ name, alias }));
  };

  // Handle For Back Category
  const handleBack = () => {
    dispatch(handleChangeShow(category.bShow));
    dispatch(handleChangeBShow(""));
  };

  return (
    <Fragment>
      {/* Start Category */}
      <Box className="groupList">
        {/* Start Category and if */}
        {!category.show ? (
          <>
            <Box
              onClick={() =>
                handleSelect({ code: "all", name: "دسته بندی ها (همه)" })
              }
            >
              <Box component="span" className="d-flex">
                دسته بندی ها (همه)
              </Box>
            </Box>
            {/* Category Root For Map */}
            {category.root.map((items) => {
              const find = category.parent.find((p) => p.code == items.code);
              if (find) {
                return (
                  <ExistArrow
                    data={items}
                    handleSelectArrow={handleSelectArrow}
                    count={find.item.length}
                  />
                );
              } else {
                return (
                  <Box
                    className="d-flex"
                    onClick={() =>
                      handleSelect({ code: items.alias, name: items.name })
                    }
                  >
                    <Typography component="span" variant="body1">
                      {items.name}
                    </Typography>
                  </Box>
                );
              }
            })}
            {/* Category Root For Map */}
          </>
        ) : (
          <>
            <Box
              className="d-flex align-center back"
              onClick={() => handleBack()}
            >
              <KeyboardArrowRightRoundedIcon />
              <Box component="span">بازگشت</Box>
            </Box>
            <Box
              onClick={() =>
                handleSelect({
                  code: category.name.alias,
                  name: `${category.name.name} (همه)`,
                })
              }
            >
              <Box component="span" className="d-flex">
                {category.name.name} (همه)
              </Box>
            </Box>
            {findItem(category.show).map((parent) => {
              if (findItem(parent.code)) {
                return (
                  <ExistArrow
                    data={parent}
                    handleSelectArrow={handleSelectArrow}
                  />
                );
              } else {
                return (
                  <Box
                    className="d-flex"
                    onClick={() =>
                      handleSelect({ code: parent.alias, name: parent.name })
                    }
                  >
                    <Typography component="span" variant="body1">
                      {parent.name}
                    </Typography>
                  </Box>
                );
              }
            })}
          </>
        )}
        {/* End Category and if */}
      </Box>
      {/* End Category */}
    </Fragment>
  );
};

export default Category;
