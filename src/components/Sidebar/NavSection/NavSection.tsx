import { ReactNode } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text
        fontSize="small"
        fontWeight="bold"
        color="gray.400"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export { NavSection };
