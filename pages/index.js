import { changeDataDemand } from "../src/components/redux/demand";
import { wrapper } from "../src/components/redux/store/configureStore";
import http from "../src/components/utils/ConfigDefaults";
import Layout from "../src/components/desktop/Home/layout";

const Page = () => {
  return <Layout />;
};

Page.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    const dataRedux = store.getState();
    if (dataRedux.demand.data.length <= 0) {
      await http
        .get(
          "/requirement/requirements?limit=24&sort=createDate&sortDirection=-1"
        )
        .then((result) => {
          store.dispatch(changeDataDemand(result.data.requirements));
        })
        .catch((err) => console.log(err));
    }
  }
);

export default Page;
