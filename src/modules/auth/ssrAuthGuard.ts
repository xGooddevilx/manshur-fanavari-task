import { redirect } from "next/navigation";
import { ssrGetUser } from "./ssrGetUser";
import { routes } from "../routes";
import { Role } from "@/api-services/types";

type GuardType =
	| { against: "authenticated-user"; redirectTo?: string }
	| { against: "unauthenticated-guest"; redirectTo?: string }
	| { against: "role"; allowRole: Role; redirectTo?: string };

export const ssrAuthGuard = async (params: GuardType) => {
	const user = await ssrGetUser();

	if (params.against === "authenticated-user") {
		if (user) {
			redirect(params.redirectTo ?? routes.home);
		}
		return;
	}

	if (params.against === "unauthenticated-guest") {
		if (!user) {
			redirect(params.redirectTo ?? routes.auth.login);
		}
		return;
	}

	if (params.against === "role") {
		if (!user) {
			redirect(routes.auth.login);
		}

		if (user.role !== params.allowRole) {

			const fallback =
				user.role === "admin"
					? routes.dashboard.adminDashboard
					: routes.dashboard.userDashboard;

			redirect(params.redirectTo ?? fallback);
		}
	}
};
