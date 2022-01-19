import { useMutation, useQueryClient } from "react-query";

import { api } from "app/services/api";

import { CreateUserFormData } from "../dtos/CreateUserFormData.dto";
import { User } from "../dtos/User.dto";

interface CreateUserApiResponse {
  user: User;
}

const createUser = async (user: CreateUserFormData): Promise<User> => {
  const { data } = await api.post<CreateUserApiResponse>("/users", {
    user: {
      ...user,
      created_at: new Date(),
    },
  });

  return data.user;
};

const useCreateUser = () => {
  const client = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      client.invalidateQueries("users");
    },
  });
};

export { useCreateUser };
