// Import React
import { Fragment, useEffect } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addAllCategory,
  addParentCategory,
  addRootCategory,
  handleOpenCategory,
  sortParentCategory,
  sortRootCategory,
} from "../../../../redux/category";
import {
  addAllLocation,
  addCitiesLocation,
  addNeighbourhoodsLocation,
  addProvincesLocation,
  handleOpenLocation,
  handleSortCitiesLocation,
} from "../../../../redux/location";
// Import Utils
import http from "../../../../utils/ConfigDefaults";
// Import Utils Base
import Base from "./Utils/Base";
// Import Category
import Category from "./Category";
// Import Location
import Location from "./Location";
// Import next-i18next
import { useTranslation } from "next-i18next";

const Category_Location = () => {
  const { t } = useTranslation("basic");
  // ======= Get Category Location ======== //
  const { category, location } = useSelector((state) => state);

  // ======= Redux ======== //
  const dispatch = useDispatch();

  // ======= UseEffect For Add ======== //
  useEffect(() => {
    // For Add Category
    if (!category.root.length > 0) {
      http
        .get("/category/categories?sort=order")
        .then(async (result) => {
          dispatch(addAllCategory(result.data.categories));
          var newArray = [];
          await result.data.categories?.map((item) => {
            if (item.parent != null) {
              const index = newArray.findIndex(
                (p) => p.code == item.parent.code
              );
              if (index == "-1") {
                const find = result.data.categories.find(
                  (p) => p.code == item.parent.code
                );
                newArray.push({
                  code: item.parent.code,
                  item: [
                    {
                      alias: find.alias,
                      code: find.code,
                      name: `${find.name} ${t("home.category_location.all")}`,
                      Utitle: true,
                    },
                    item,
                  ],
                });
              } else {
                const array = newArray[index];
                array.item.push(item);
                newArray[index] = array;
              }
            } else {
              console.log(item);
              dispatch(addRootCategory(item));
            }
          });
          dispatch(addParentCategory(newArray));
          console.log(newArray);

          //Sort Category
          dispatch(sortRootCategory());
          dispatch(sortParentCategory());
        })
        .catch((err) => console.log(err));
      // For Add Location
      http
        .get("/location/all-places")
        .then(async (result) => {
          dispatch(addAllLocation(result.data.places.provinces));
          dispatch(addAllLocation(result.data.places.cities));
          dispatch(addAllLocation(result.data.places.neighbourhoods));
          result.data.places?.provinces.map((item) => {
            if (item.province == null) {
              dispatch(addProvincesLocation(item));
            }
          });

          var newCities = [];
          result.data.places?.cities.map((item) => {
            if (item.province != null) {
              const index = newCities.findIndex(
                (p) => p.province == item.province.alias
              );
              if (index == "-1") {
                newCities.push({ province: item.province.alias, item: [item] });
              } else {
                const array = newCities[index];
                array.item.push(item);
                newCities[index] = array;
              }
            }
          });
          dispatch(addCitiesLocation(newCities));

          var newNeighbourhoods = [];
          result.data.places?.neighbourhoods.map((item) => {
            const index = newNeighbourhoods.findIndex(
              (p) => p.province == item.city.alias
            );
            if (index == "-1") {
              newNeighbourhoods.push({
                province: item.city.alias,
                item: [item],
              });
            } else {
              const array = newNeighbourhoods[index];
              array.item.push(item);
              newNeighbourhoods[index] = array;
            }
          });
          dispatch(addNeighbourhoodsLocation(newNeighbourhoods));

          //Sort City Location
          dispatch(handleSortCitiesLocation());
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Fragment>
      {/* Start Base Category*/}
      <Base
        all={category.all}
        open={category.open}
        handleClose={() => dispatch(handleOpenCategory())}
        title={t("home.category_location.grouping")}
        type="category"
        component={
          <Category handleClose={() => dispatch(handleOpenCategory())} />
        }
      />
      {/* End Base Category*/}
      {/* Start Base Location*/}
      <Base
        all={location.all}
        open={location.open}
        handleClose={() => dispatch(handleOpenLocation())}
        title={t("home.category_location.location")}
        type="location"
        component={
          <Location handleClose={() => dispatch(handleOpenLocation())} />
        }
      />
      {/* End Base Location*/}
    </Fragment>
  );
};

export default Category_Location;
