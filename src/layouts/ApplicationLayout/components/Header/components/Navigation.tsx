"use client";

import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { routes } from "@/modules/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

export const Navigation = () => {
	const { user, isAuthenticated } = useAuth();
	const pathname = usePathname();

	const isActive = (href: string) => pathname === href;

	return (
		<nav className="flex gap-4">
			<Link
				href={routes.home}
				className={clsx(
					"text-sm font-medium transition",
					isActive(routes.home)
						? "text-blue-600 font-semibold"
						: "text-gray-600 hover:text-blue-600"
				)}
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
					className={clsx(
						"text-sm font-medium transition",
						isActive(
							user.role === "admin"
								? routes.dashboard.adminDashboard
								: routes.dashboard.userDashboard
						)
							? "text-blue-600 font-semibold"
							: "text-gray-600 hover:text-blue-600"
					)}
				>
					Dashboard
				</Link>
			)}
		</nav>
	);
};
