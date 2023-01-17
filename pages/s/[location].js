import Layout from "../../src/components/desktop/Home/layout";
import {
  changeCount,
  changeDataDemand,
  handleChangeLoading,
} from "../../src/components/redux/demand";
import { wrapper } from "../../src/components/redux/store/configureStore";
import http from "../../src/components/utils/ConfigDefaults";

const SearchLocation = () => {
  return <Layout />;
};

SearchLocation.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    const dataRedux = store.getState();
    if (dataRedux.demand.data.length <= 0) {
      const location = context.query?.location;
      const search = context.query?.search ?? "";
      context.store.dispatch(handleChangeLoading(true));
      // Start Get Demand //
      http
        .get(
          `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&place=${location}&searchType=title&search=${search}`
        )
        .then(async (res) => {
          await context.store.dispatch(changeDataDemand(res.data.requirements));
          await context.store.dispatch(changeCount(24));
        });
      // end Get Demand //
      context.store.dispatch(handleChangeLoading(false));
    }
  }
);
export default SearchLocation;
