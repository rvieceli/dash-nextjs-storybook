import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { useSidebarDrawer } from "../../contexts/SidebarDrawer.context";
import { useIsWideScreen } from "../../hooks/useIsWideScreen";
import { NavMenu } from "./NavMenu/NavMenu";

const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();
  const isWideScreen = useIsWideScreen();
  console.log({ isWideScreen });
  if (!isWideScreen) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <NavMenu />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <NavMenu />
    </Box>
  );
};

export { Sidebar };
