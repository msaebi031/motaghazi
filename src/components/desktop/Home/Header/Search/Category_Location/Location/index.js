// Import Router
import { useRouter } from "next/router";
// Import React
import { Fragment, createRef } from "react";
// Import next-i18next
import { useTranslation } from "next-i18next";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeBShowLocation,
  handleChangeLabelLocation,
  handleChangeNameLocation,
  handleChangeShowLocation,
} from "../../../../../../redux/location";

// Import Mui Icon
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// Import Mui
import { Box, Typography } from "@mui/material";
// Import Utils
import { ExistArrow, SelectItem } from "../Utils/ExistArrow";
import { SetRouterLocation } from "../../../../content/Category/utils";

// ======= handleSelectArrow ======== //
export const handleSelectArrow = (code) => {
  const dispatch = useDispatch();
  dispatch(handleChangeShow(code));
};

const Location = ({ handleClose }) => {
  const { t } = useTranslation("basic");
  // ======= Redux ======== //
  const { location } = useSelector((state) => state);
  const dispatch = useDispatch();
  // ======= UseRouter ======== //
  const router = useRouter();
  // ======= CreateRef ======== //
  const myRef = createRef();

  // ======= Handles ======== //
  // ======= Handle For FindCity ======== //
  const findCity = (code) => {
    const find = location.cities.find((p) => p.province == code);
    if (find) {
      return find.item;
    } else return [];
  };

  // ======= Handle For FindNeighbourhoods ======== //
  const findNeighbourhoods = (code) => {
    const find = location.neighbourhoods.find((p) => p.province == code);
    if (find) {
      return find.item;
    } else return [];
  };

  // ======= Handle For Select ======== //
  const handleSelect = ({ alias, code, name }) => {
    const pathname = router.asPath.split("/");
    dispatch(handleChangeLabelLocation(name));
    router.replace(SetRouterLocation(alias, pathname[3]), null, {
      scroll: false,
    });
    handleClose();
  };

  // ======= Handle For Select Arrow ======== //
  const handleSelectArrow = ({ code, name, alias, root }) => {
    dispatch(handleChangeShowLocation(code));
    dispatch(handleChangeNameLocation({ name, alias, root }));
    dispatch(handleChangeBShowLocation(root));
    myRef.current.scrollTo(0, 0);
  };

  // ======= Handle For Back ======== //
  const handleBack = () => {
    if (location.bShow == "cities") {
      dispatch(handleChangeShowLocation(""));
      dispatch(handleChangeBShowLocation(""));
    } else {
      dispatch(handleChangeShowLocation(location.last));
      dispatch(handleChangeBShowLocation("cities"));
    }
  };

  return (
    <Fragment>
      {/* Start Location*/}
      <Box className="groupList scroll-height" ref={myRef}>
        {/* Start location and if */}
        {!location.show ? (
          <>
            <Box
              onClick={() =>
                handleSelect({ alias: "all", name: "ایران (همه)" })
              }
            >
              <Box component="span" className="d-flex">
                ایران (همه)
              </Box>
            </Box>
            {/*Start location Provinces Map */}
            {location.provinces.map((items, index) => {
              {
                /*Start find For If */
              }
              const find = location.cities.find(
                (p) => p.province == items.alias
              );
              if (find) {
                return (
                  <ExistArrow
                    key={index}
                    data={items}
                    handleSelectArrow={handleSelectArrow}
                    root="cities"
                    count={find.item.length}
                  />
                );
              } else {
                return (
                  <SelectItem
                    key={index}
                    parent={items}
                    handleSelect={handleSelect}
                  />
                );
              }
              {
                /*End find For If */
              }
            })}
            {/*End location Provinces Map */}
          </>
        ) : (
          <>
            <Box
              className="d-flex align-center back"
              onClick={() => handleBack()}
            >
              <KeyboardArrowRightRoundedIcon />
              <Box component="span">{t("home.category.comingBack")}</Box>
            </Box>
            <Box
              onClick={() =>
                handleSelect({
                  alias: location.name.alias,
                  name: `${location.name.name} ${t("home.location.allfa")}`,
                })
              }
            >
              <Box component="span" className="d-flex">
                {location.name.name} {t("home.location.allfa")}
              </Box>
            </Box>
            {/* Start  location BShow For If*/}
            {location.bShow == "cities"
              ? findCity(location.show).map((parent, index) => {
                  {
                    /*Start find For If */
                  }
                  const find = location.neighbourhoods.find(
                    (p) => p.province == parent.alias
                  );
                  if (find) {
                    return (
                      <ExistArrow
                        key={index}
                        data={parent}
                        handleSelectArrow={handleSelectArrow}
                        root="neighbourhoods"
                      />
                    );
                  } else {
                    return (
                      <SelectItem
                        key={index}
                        parent={parent}
                        handleSelect={handleSelect}
                      />
                    );
                  }
                  {
                    /*End find For If */
                  }
                })
              : findNeighbourhoods(location.show).map((parent, index) => {
                  return (
                    <SelectItem
                      key={index}
                      parent={parent}
                      handleSelect={handleSelect}
                    />
                  );
                })}
            {/* Start  location BShow For If*/}
          </>
        )}
        {/* End location and if */}
      </Box>
      {/* End Location*/}
    </Fragment>
  );
};

export default Location;
