// app/admin/dashboard/page.tsx

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/modules/react-query/getQueryClient";
import { AdminDashboardPage } from "@/views/admin-dashboard/AdminDashboardPage";
import { UsersApiResponse } from "@/api-services/types/User";
import { serverEnvironments } from "@/modules/env/server";

const fetchUserList = async () => {
  let result: UsersApiResponse = { users: [] }; 
  try {
    const response = await fetch(`${serverEnvironments.API_URL_ADDRESS}/admin/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    result = await response.json(); 
  } catch (error) {
    console.error("Error fetching users:", error);
  }
  return result;
};

const Page = async () => {
  const queryClient = getQueryClient();

  const users = await fetchUserList();

  queryClient.setQueryData(["userList"], users);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AdminDashboardPage />
    </HydrationBoundary>
  );
};

export default Page;
