import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      {process.env.NEXT_PUBLIC_APP_NAME}
      <Text as="span" marginLeft="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};

export { Logo };
