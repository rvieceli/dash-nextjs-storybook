import { yupResolver } from "@hookform/resolvers/yup";
import { AnySchema, object, ref, string } from "yup";

import { CreateUserFormData } from "./dtos/CreateUserFormData.dto";

const createUserSchema = object<Record<keyof CreateUserFormData, AnySchema>>({
  name: string().required("Name is required"),
  email: string().required("Email is required").email("Invalid email"),
  password: string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  password_confirmation: string().oneOf(
    [null, ref("password")],
    "The password confirmation and the password must be the same."
  ),
});

const createUserResolver = yupResolver(createUserSchema);

export { createUserSchema, createUserResolver };
