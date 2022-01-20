import { ComponentMeta } from "@storybook/react";

import Page from "app/pages/users/index";

const Meta: ComponentMeta<typeof Page> = {
  title: "Pages/Users",
  component: Page,
};

export default Meta;

export const ListPage = () => <Page />;

ListPage.story = {
  parameters: {
    nextRouter: {
      pathname: "/users",
    },
    mirage: {
      logging: true,
      timing: 1000,
      handlers: {
        get: {
          "/users": [
            200,
            { "x-total-count": 10 },
            { items: [{ id: 1, name: "Test" }] },
          ],
        },
      },
    },
  },
};
