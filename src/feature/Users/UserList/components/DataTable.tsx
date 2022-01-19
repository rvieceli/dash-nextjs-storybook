import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

import { UserFormatted } from "../dtos/User.dto";

interface DataTableProps {
  users: UserFormatted[];
}

const DataTable = ({ users }: DataTableProps) => {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th paddingX="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>User</Th>
          <Th>Created At</Th>
          <Th width="1%" whiteSpace="nowrap" />
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td paddingX="6">
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">{user.name}</Text>
                <Text fontSize="sm" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>
            <Td>{user.createdAtFormatted}</Td>
            <Td>
              <Button
                as="a"
                size="sm"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
              >
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { DataTable };
