import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "..";
import {
  changeDataDemand,
  handleChangeLoading,
} from "../../src/components/redux/demand";
import { wrapper } from "../../src/components/redux/store/configureStore";
import http from "../../src/components/utils/ConfigDefaults";

export default function SearchLocation() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const location = context.params.location;
    context.store.dispatch(handleChangeLoading(true));
    // Start Get Demand //
    http
      .get(
        `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&place=${location}`
      )
      .then(async (res) => {
        await context.store.dispatch(changeDataDemand(res.data.requirements));
      });
    // end Get Demand //
    context.store.dispatch(handleChangeLoading(false));
    return {
      props: {
        ...(await serverSideTranslations(context.locale, ["basic"])),
        // Will be passed to the page component as props
      },
    };
  }
);
