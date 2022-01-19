import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Flex } from "@chakra-ui/react";

import { Header, Sidebar } from "app/components";
import { CreateUser } from "app/feature/Users/CreateUser";

const CreateUserPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>New User | DashGo</title>
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
          <CreateUser />
        </Flex>
      </Box>
    </>
  );
};

export default CreateUserPage;
