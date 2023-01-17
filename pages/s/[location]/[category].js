import Layout from "../../../src/components/desktop/Home/layout";
import {
  handleChangeLabelCategory,
  handleChangeSelect,
  handleChangeShow,
} from "../../../src/components/redux/category";
import {
  changeCount,
  changeDataDemand,
  handleChangeIcon,
  handleChangeLoading,
} from "../../../src/components/redux/demand";
import { handleChangeCount } from "../../../src/components/redux/filter";
import { wrapper } from "../../../src/components/redux/store/configureStore";
import http from "../../../src/components/utils/ConfigDefaults";

const SearchCategory = () => {
  return <Layout />;
};

SearchCategory.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    const dataRedux = store.getState();
    if (dataRedux.demand.data.length <= 0) {
      const path = context.query;
      const search = context.query?.search ?? "";
      // Start Get Information Category //
      store.dispatch(handleChangeLoading(true));
      await http
        .get(
          `/search?search=${path.category}&searchType=title&search=${search}`
        )
        .then(async (result) => {
          const { categories, count } = result.data;
          await store.dispatch(handleChangeLabelCategory(categories[0].name));
          await store.dispatch(
            handleChangeShow(
              categories[0].parent?.code
                ? categories[0].parent.code
                : count > 1
                ? categories[0].code
                : ""
            )
          );

          await store.dispatch(handleChangeSelect(categories[0].alias));
          // await context.store.dispatch(
          //   handleChangeIcon(
          //     configCover(
          //       result.data.categories[0].fieldGroup ||
          //         result.data.categories[0].parent?.code ||
          //         result.data.categories[0].code
          //     )
          //   )
          // );
          await store.dispatch(handleChangeCount(count));
        })
        .catch((err) => console.log(err));

      // End Get Information Category //

      // Start Get Demand //
      await http
        .get(
          `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&place=${path.location}&category=${path.category}`
        )
        .then(async (result) => {
          await store.dispatch(changeDataDemand(result.data.requirements));
        })
        .catch((err) => console.log(err));
      // end Get Demand //
      store.dispatch(handleChangeLoading(false));
    }
  }
);
export default SearchCategory;
