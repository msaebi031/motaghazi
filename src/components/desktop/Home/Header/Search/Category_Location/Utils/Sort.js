export const SortCategory = ({ category, data }) => {
  var newArray = [];
  var all = "";
  data.map((item) => {
    if (item.name.search("(همه)") == -1) {
      const find = category.find((p) => p.code == item.code);
      if (find) {
        newArray.unshift(item);
      } else {
        newArray.push(item);
      }
    } else {
      all = item;
    }
  });
  if (all) {
    newArray.unshift(all);
  }

  return newArray;
};

export const SortCityLocation = ({ neighbourhoods, data }) => {
  var newArray = [];
  data.map((parent) => {
    const find = neighbourhoods.find((p) => p.province == parent.alias);
    if (find) {
      newArray.unshift(parent);
    } else {
      newArray.push(parent);
    }
  });

  return newArray;
};
