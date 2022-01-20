import type { NextPage } from "next";

import { PageContainer } from "app/components";
import { UserList } from "app/feature/Users/UserList";

const UserListPage: NextPage = () => {
  return (
    <PageContainer title="Users">
      <UserList />
    </PageContainer>
  );
};

export default UserListPage;
