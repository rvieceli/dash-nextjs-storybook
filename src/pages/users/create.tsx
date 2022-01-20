import type { NextPage } from "next";
import { useRouter } from "next/router";

import { PageContainer } from "app/components";
import { CreateUser } from "app/feature/Users/CreateUser";

const CreateUserPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageContainer title="New User">
      <CreateUser />
    </PageContainer>
  );
};

export default CreateUserPage;
