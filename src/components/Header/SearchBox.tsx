import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <Flex
      as="label"
      flex="1"
      position="relative"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      borderRadius="full"
      alignSelf="center"
      color="gray.200"
      backgroundColor="gray.800"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        // paddingX="4"
        marginRight="4"
        placeholder="Search on the platform"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
};

export { SearchBox };
