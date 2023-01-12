import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "../..";
// import { configCover } from "../../../src/components/Home/Content/Demand/Utils/ConfigCover";
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

export default function SearchCategory() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const path = context.params;
    const search = context.query?.search ?? "";
    // Start Get Information Category //
    context.store.dispatch(handleChangeLoading(true));
    await http
      .get(`/search?search=${path.category}&searchType=title&search=${search}`)
      .then(async (result) => {
        const { categories, count } = result.data;
        await context.store.dispatch(
          handleChangeLabelCategory(categories[0].name)
        );
        await context.store.dispatch(
          handleChangeShow(
            categories[0].parent?.code
              ? categories[0].parent.code
              : count > 1
              ? categories[0].code
              : ""
          )
        );

        await context.store.dispatch(handleChangeSelect(categories[0].alias));
        // await context.store.dispatch(
        //   handleChangeIcon(
        //     configCover(
        //       result.data.categories[0].fieldGroup ||
        //         result.data.categories[0].parent?.code ||
        //         result.data.categories[0].code
        //     )
        //   )
        // );
        await context.store.dispatch(handleChangeCount(count));
      })
      .catch((err) => console.log(err));

    // End Get Information Category //

    // Start Get Demand //
    await http
      .get(
        `/requirement/requirements?limit=24&sort=createDate&sortDirection=-1&place=${path.location}&category=${path.category}`
      )
      .then(async (result) => {
        await context.store.dispatch(
          changeDataDemand(result.data.requirements)
        );
        await context.store.dispatch(changeCount(24));
      })
      .catch((err) => console.log(err));
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
