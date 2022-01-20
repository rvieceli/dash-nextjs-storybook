import type { NextPage } from "next";

import { PageContainer } from "app/components";
import { Dashboard } from "app/feature/Dashboard/Dashboard";

const DashboardPage: NextPage = () => {
  return (
    <PageContainer title="Dashboard">
      <Dashboard />
    </PageContainer>
  );
};

export default DashboardPage;
