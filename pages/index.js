import Head from "next/head";
import Content from "../src/components/Home/Content";
import Footer from "../src/components/Home/Footer";
import Header from "../src/components/Home/Header";
import { addDataDemand } from "../src/components/redux/demand";
import { wrapper } from "../src/components/redux/store/configureStore";
import http from "../src/components/utils/ConfigDefaults";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const res = (
      await http.get(
        "/requirement/requirements?limit=24&sort=createDate&sortDirection=-1"
      )
    ).data.requirements;
    store.dispatch(addDataDemand(res));
  }
);

export default Home;
