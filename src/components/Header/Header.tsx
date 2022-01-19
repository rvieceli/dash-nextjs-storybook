import { Divider, Flex, Icon, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawer.context";
import { useIsWideScreen } from "../../hooks/useIsWideScreen";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

const Header = () => {
  const isWideScreen = useIsWideScreen();
  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open sidebar navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        />
      )}

      <Logo />

      {isWideScreen && <SearchBox />}

      <Flex alignItems="center" marginLeft="auto">
        <NotificationNav />

        <Divider
          orientation="vertical"
          paddingX="4"
          borderColor="gray.700"
          height={["6", "8"]}
        />

        <Profile showUsername={isWideScreen} />
      </Flex>
    </Flex>
  );
};

export { Header };
