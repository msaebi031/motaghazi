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
  handleChangeRootSelect,
  handleChangeSelect,
} from "../../../../../redux/category";
// Import Utils
import { ExistArrow, SelectItem } from "../Utils/ExistArrow";
import { SetRouterCategory } from "../../../../Content/Category/utils";

// Import Router
import { useRouter } from "next/router";
// Import React
import { Fragment } from "react";
// Import next-i18next
import { useTranslation } from "next-i18next";

// ======= handleSelectArrow ======== //
export const handleSelectArrow = (code) => {
  const dispatch = useDispatch();
  dispatch(handleChangeShow(code));
};

const Category = ({ handleClose }) => {
  const { t } = useTranslation("basic");
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
    } else return "";
  };

  //  Handle For Select Item
  const handleSelect = ({ alias, code, name }) => {
    const pathname = router.asPath.split("/");
    router.replace(SetRouterCategory(alias, pathname[2]), null, {
      scroll: false,
    });
    handleClose();
  };

  // Handle For Select Category
  const handleSelectArrow = ({ code, name, alias, rootSelect }) => {
    dispatch(handleChangeShow(code));
    dispatch(handleChangeName({ name, alias, code }));
    dispatch(handleChangeLabelCategory(name));
    if (rootSelect) {
      dispatch(handleChangeRootSelect(rootSelect));
    }
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
            <SelectItem
              parent={{
                alias: "all",
                name: t("home.category.all-categories"),
              }}
              handleSelect={handleSelect}
            />
            {/* Category Root For Map */}
            {category.root.map((items, index) => {
              const find = category.parent.find((p) => p.code == items.code);
              if (find) {
                return (
                  <ExistArrow
                    key={index}
                    data={items}
                    handleSelectArrow={handleSelectArrow}
                    count={find.item.length}
                    rootSelect={items.code}
                  />
                );
              } else {
                return (
                  <SelectItem
                    key={index}
                    select={category.select}
                    parent={items}
                    handleSelect={handleSelect}
                  />
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
              <Box component="span"> {t("home.category.comingBack")}</Box>
            </Box>

            {findItem(category.show).map((parent, index) => {
              if (findItem(parent.code) && !parent.Utitle) {
                return (
                  <ExistArrow
                    key={index}
                    data={parent}
                    handleSelectArrow={handleSelectArrow}
                  />
                );
              } else {
                return (
                  <SelectItem
                    key={index}
                    parent={parent}
                    select={category.select}
                    handleSelect={handleSelect}
                  />
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
