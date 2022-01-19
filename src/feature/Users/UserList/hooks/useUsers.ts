import { useQuery } from "react-query";

import { api } from "app/services/api";

import { User, UserFormatted } from "../dtos/User.dto";

interface UsersResponseData {
  users: User[];
}

interface GetUsersResponse {
  users: UserFormatted[];
  totalItems: number;
}

interface UseUsersProps {
  page: number;
}

const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get<UsersResponseData>("/users", {
    params: {
      page,
    },
  });

  const totalItems = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    ...user,
    createdAtFormatted: new Date(user.created_at).toLocaleDateString(
      undefined,
      {
        dateStyle: "long",
      }
    ),
  }));

  return { users, totalItems };
};

const useUsers = ({ page }: UseUsersProps) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useUsers, getUsers };
