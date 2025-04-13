import { ssrAuthGuard } from "@/modules/auth/ssrAuthGuard";
import { UserDashboardPage } from "@/views/user-dashboard/UserDashboardPage";

const Page = async () => {
	await ssrAuthGuard({ against: "role",allowRole:"user" });

	return <UserDashboardPage/>;
};
export default Page;
