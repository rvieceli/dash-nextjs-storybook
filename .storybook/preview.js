import { RouterContext } from "next/dist/shared/lib/router-context";

import { theme } from "app/styles/theme.chakra";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
