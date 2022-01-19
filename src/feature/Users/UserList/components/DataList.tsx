import {
  Box,
  Button,
  HStack,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

import { UserFormatted } from "../dtos/User.dto";

interface DataListProps {
  users: UserFormatted[];
}

const DataList = ({ users }: DataListProps) => {
  return (
    <UnorderedList
      spacing="6"
      styleType="none"
      marginInlineStart="0"
      //
    >
      {users.map((user) => (
        <ListItem
          key={user.id}
          _notLast={{
            borderBottomWidth: "1px",
            borderBottomColor: "gray.700",
            paddingBottom: "6",
          }}
        >
          <Box>
            <Text fontWeight="bold">{user.name}</Text>
            <Text fontSize="sm" color="gray.300">
              {user.email}
            </Text>
          </Box>
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginTop="2"
          >
            <Box>
              <Text fontSize="xs" color="gray.400" textTransform="uppercase">
                Created At
              </Text>
              <Text>{user.createdAtFormatted}</Text>
            </Box>
            <Button
              as="a"
              size="sm"
              colorScheme="whiteAlpha"
              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
            >
              Edit
            </Button>
          </HStack>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export { DataList };
