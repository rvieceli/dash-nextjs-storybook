import { useState } from "react";

import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiRefreshLine } from "react-icons/ri";

import { Pagination } from "app/components";
import { useUsers } from "app/feature/Users/UserList/hooks/useUsers";
import { useIsWideScreen } from "app/hooks/useIsWideScreen";

import { DataList } from "./components/DataList";
import { DataTable } from "./components/DataTable";

const UserList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError, refetch } = useUsers({ page });
  const isWideScreen = useIsWideScreen("md");

  const renderData = () => {
    if (isLoading) {
      return (
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      );
    }

    if (isError) {
      return (
        <Flex justifyContent="center">
          <Text fontSize="xl">An error occurred during the request.</Text>
        </Flex>
      );
    }

    if (!data) {
      return (
        <Flex justifyContent="center">
          <Text fontSize="xl">No users found.</Text>
        </Flex>
      );
    }

    return (
      <>
        {isWideScreen ? (
          <DataTable users={data.users} />
        ) : (
          <DataList users={data.users} />
        )}

        <Pagination
          totalItems={data.totalItems}
          onPageChange={setPage}
          currentPage={page}
        />
      </>
    );
  };

  return (
    <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
      <Flex justifyContent="space-between" alignItems="center" marginBottom="8">
        <Heading size="lg" fontWeight="normal">
          Users
        </Heading>
        <HStack>
          <IconButton
            aria-label="Refetch"
            icon={<Icon as={RiRefreshLine} fontSize="16" />}
            size="sm"
            colorScheme="blue"
            onClick={() => refetch()}
            isLoading={!isLoading && isFetching}
          />
          <Link href="/users/create" passHref>
            <Button
              as="a"
              size="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create new
            </Button>
          </Link>
        </HStack>
      </Flex>

      {renderData()}
    </Box>
  );
};

export { UserList };
