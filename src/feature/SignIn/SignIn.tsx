import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Form } from "app/components";

import { SignInFormDataDTO } from "./dtos/SignInFormData.dto";
import { resolver } from "./SignIn.schema";

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormDataDTO>({
    resolver,
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormDataDTO> = async (
    values,
    event
  ) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(values);
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Form.Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Form.Input
            type="password"
            label="Password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isDisabled={formState.isSubmitting}
          isLoading={formState.isSubmitting}
        >
          Enter
        </Button>
      </Flex>
    </Flex>
  );
};

export { SignIn };
