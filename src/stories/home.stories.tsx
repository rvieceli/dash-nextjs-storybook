import { ComponentMeta } from "@storybook/react";

import Home from "app/pages/index";

const Meta: ComponentMeta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
};

export default Meta;

export const HomePage = () => <Home />;
