import type { NextPage } from "next";
import Head from "next/head";

import { Box, Flex } from "@chakra-ui/react";

import { Header, Sidebar } from "app/components";
import { UserList } from "app/feature/Users/UserList";

const UserListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users | DashGo</title>
      </Head>
      <Box>
        <Header />

        <Flex
          width="100%"
          maxWidth={1480}
          marginY="6"
          marginX="auto"
          paddingX="6"
        >
          <Sidebar />
          <UserList />
        </Flex>
      </Box>
    </>
  );
};

export default UserListPage;
