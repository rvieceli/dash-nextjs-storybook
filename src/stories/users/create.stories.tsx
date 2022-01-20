import { ComponentMeta } from "@storybook/react";

import Page from "app/pages/users/create";

const Meta: ComponentMeta<typeof Page> = {
  title: "Pages/Users",
  component: Page,
};

export default Meta;

export const CreatePage = () => <Page />;

CreatePage.story = {
  parameters: {
    nextRouter: {
      pathname: "/users/create",
    },
  },
};
