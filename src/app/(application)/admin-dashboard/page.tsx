import { ssrAuthGuard } from "@/modules/auth/ssrAuthGuard";
import { AdminDashboardPage } from "@/views/admin-dashboard/AdminDashboardPage";

const Page = async () => {

  await ssrAuthGuard({ against: "role",allowRole:"admin" });


    return (
      <AdminDashboardPage/>
    )
  }
export default Page