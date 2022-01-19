import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showUsername?: boolean;
}

const Profile = ({ showUsername = true }: ProfileProps) => {
  return (
    <Flex alignItems="center">
      {showUsername && (
        <Box marginRight="4" textAlign="right">
          <Text>John Doe</Text>
          <Text color="gray.300" fontSize="small">
            john.doe@spacex.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="John Doe"
        src="https://www.github.com/rvieceli.png"
      />
    </Flex>
  );
};

export { Profile };
