import { useRouter } from "next/router";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

import { Form } from "app/components";

import { createUserResolver } from "./CreateUser.schema";
import { CreateUserFormData } from "./dtos/CreateUserFormData.dto";
import { useCreateUser } from "./hooks/useCreateUser";

const CreateUser = () => {
  const router = useRouter();
  const createUser = useCreateUser();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: createUserResolver,
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);

    reset();

    router.push("/users");
  };

  return (
    <Box
      as="form"
      flex="1"
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      onSubmit={handleSubmit(handleCreateUser)}
    >
      <Heading size="lg" fontWeight="normal">
        Create a new user
      </Heading>
      <Divider marginY="6" borderColor="gray.700" />
      <VStack spacing={["6", "8"]}>
        <SimpleGrid width="100%" spacing={["6", "8"]} minChildWidth="340px">
          <Form.Input
            label="Full name"
            {...register("name")}
            error={errors.name}
          />
          <Form.Input
            type="email"
            label="Email"
            {...register("email")}
            error={errors.email}
          />
        </SimpleGrid>
        <SimpleGrid width="100%" spacing={["6", "8"]} minChildWidth="240px">
          <Form.Input
            type="password"
            label="Password"
            {...register("password")}
            error={errors.password}
          />
          <Form.Input
            type="password"
            label="Confirm the password"
            {...register("password_confirmation")}
            error={errors.password_confirmation}
          />
        </SimpleGrid>
      </VStack>
      <Flex marginTop={["6", "8"]} justifyContent="flex-end">
        <HStack spacing="4">
          <Button colorScheme="whiteAlpha" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            type="submit"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
            isDisabled={formState.isSubmitting}
          >
            Save
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export { CreateUser };
