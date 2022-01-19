import { yupResolver } from "@hookform/resolvers/yup";
import { AnySchema, object, string } from "yup";

import { SignInFormDataDTO } from "./dtos/SignInFormData.dto";

const schema = object<Record<keyof SignInFormDataDTO, AnySchema>>({
  email: string().required("Email is required").email("Invalid email"),
  password: string().required("Password is required"),
});

const resolver = yupResolver(schema);

export { schema, resolver };
