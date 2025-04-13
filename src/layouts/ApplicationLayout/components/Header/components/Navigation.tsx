"use client";

import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { routes } from "@/modules/routes";
import Link from "next/link";

export const Navigation = () => {
	const { user, isAuthenticated } = useAuth();

	return (
		<nav className="flex gap-4">
			<Link
				href={routes.home}
				className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
			>
				Home
			</Link>
			{isAuthenticated && (
				<Link
					href={
						user.role === "admin"
							? routes.dashboard.adminDashboard
							: routes.dashboard.userDashboard
					}
					className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
				>
					Dashboard
				</Link>
			)}
		</nav>
	);
};
