import { createContext, ReactNode, useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

interface SidebarDrawerContextData extends UseDisclosureReturn {}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure({ defaultIsOpen: false });
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line
  }, [router?.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

const useSidebarDrawer = () => {
  return useContext(SidebarDrawerContext);
};

export { SidebarDrawerProvider, useSidebarDrawer };
