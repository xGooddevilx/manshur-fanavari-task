import { ssrAuthGuard } from "@/modules/auth/ssrAuthGuard";
import { routes } from "@/modules/routes";

const Page = async () => {
	await ssrAuthGuard({ against: "role",allowRole:"user" });

	return <div>User dashboard</div>;
};
export default Page;
