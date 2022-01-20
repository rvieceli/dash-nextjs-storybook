import { ReactNode } from "react";

import Head from "next/head";

import { Box, Flex } from "@chakra-ui/react";

import { Header, Sidebar } from "app/components";

interface PageContainerProps {
  children: ReactNode;
  title?: string;
}

const PageContainer = ({ children, title }: PageContainerProps) => {
  const composedTitle = title
    ? `${title} | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <>
      <Head>
        <title>{composedTitle}</title>
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
          {children}
        </Flex>
      </Box>
    </>
  );
};

export { PageContainer };
