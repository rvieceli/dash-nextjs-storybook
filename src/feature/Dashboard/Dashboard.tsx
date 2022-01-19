import dynamic from "next/dynamic";

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { Header, Sidebar } from "app/components";

import { openingRate, weekRegistration } from "./Chart.data";
import { options } from "./Chart.options";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            padding={["6", "8"]}
            paddingBottom="4"
            backgroundColor="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" marginBottom="4">
              Week registration
            </Text>
            <Chart
              options={options}
              series={weekRegistration}
              type="area"
              height={160}
            />
          </Box>

          <Box padding={["6", "8"]} backgroundColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" marginBottom="4">
              Opening rate
            </Text>
            <Chart
              options={options}
              series={openingRate}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export { Dashboard };
