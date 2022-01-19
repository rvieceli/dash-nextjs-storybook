import type { NextPage } from "next";
import Head from "next/head";

import { Dashboard } from "app/feature/Dashboard/Dashboard";

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DashGo</title>
      </Head>

      <Dashboard />
    </>
  );
};

export default DashboardPage;
