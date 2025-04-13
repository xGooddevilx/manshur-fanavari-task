import { ssrAuthGuard } from "@/modules/auth/ssrAuthGuard";
import { routes } from "@/modules/routes";

const Page = async () => {

  await ssrAuthGuard({ against: "role",allowRole:"admin" });


    return (
      <div>Admin Dashboard</div>
    )
  }
  export default Page