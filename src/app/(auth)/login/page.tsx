import { ssrAuthGuard } from "@/modules/auth/ssrAuthGuard";
import { LoginPage } from "@/views/login/LoginPage";

const Page = async () => {
	await ssrAuthGuard({against:"authenticated-user"})

	return <LoginPage/>
};

export default Page;
