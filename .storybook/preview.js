import { QueryClientProvider } from "react-query";

import { RouterContext } from "next/dist/shared/lib/router-context";

import { SidebarDrawerProvider } from "../src/contexts/SidebarDrawer.context";
import { theme } from "../src/styles/theme.chakra";
import { queryClient } from "../src/services/queryClient";

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

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <Story />
      </SidebarDrawerProvider>
    </QueryClientProvider>
  ),
];
