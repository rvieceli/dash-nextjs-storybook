import { forwardRef, ForwardRefRenderFunction } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

type InputBaseType = ForwardRefRenderFunction<HTMLInputElement, InputProps>;

const InputBase: InputBaseType = (
  { name, label, id, error, ...props },
  ref
) => {
  const inputId = id ?? name;
  const labelId = `${inputId}-label`;

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor="email" id={labelId}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        ref={ref}
        id={inputId}
        name={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: "gray.900",
        }}
        size="lg"
        {...props}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export { Input };
