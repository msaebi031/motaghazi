// Import React
import { Fragment, useState } from "react";
// Import Category_Location
import Category_Location from "./Category_Location";
// Import Filter
import Filter from "./Filter";
// Import Search_Child
import Search_Child from "./Search";

const Search = () => {
  return (
    <Fragment>
      {/*Component Search_Child*/}
      <Search_Child />
      {/*Component Category_Location*/}
      <Category_Location />
      {/*Component Filter*/}
      <Filter />
    </Fragment>
  );
};

export default Search;
