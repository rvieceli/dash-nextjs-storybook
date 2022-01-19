import type { NextPage } from "next";
import Head from "next/head";

import { SignIn } from "../feature/SignIn/SignIn";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | DashGo</title>
      </Head>
      <SignIn />
    </>
  );
};

export default Home;
