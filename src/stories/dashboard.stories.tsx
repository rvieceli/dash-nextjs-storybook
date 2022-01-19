import { ComponentMeta } from "@storybook/react";

import Dashboard from "app/pages/dashboard";

const Meta: ComponentMeta<typeof Dashboard> = {
  title: "Pages/Dashboard",
  component: Dashboard,
};

export default Meta;

export const DashboardPage = () => <Dashboard />;

DashboardPage.story = {
  parameters: {
    nextRouter: {
      pathname: "/dashboard",
    },
  },
};
