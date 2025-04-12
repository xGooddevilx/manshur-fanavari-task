"use client";

import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { G } from "@mobily/ts-belt";
import { UserRoundIcon } from "lucide-react";
import Link from "next/link";

export const User = () => {
	const { isAuthenticated, isAuthenticating, user, logout } = useAuth();
	const hasUser = isAuthenticated && G.isNotNullable(user);

	return (
		<div className="relative group inline-block">
			<button className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
				{hasUser && <p className="font-semibold">{user.name}</p>}
				<UserRoundIcon />
			</button>

			{/* Dropdown */}
			<div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 hidden group-hover:block">
				{hasUser ? (
					<div>
						<div className="px-4 py-2 text-gray-800 border-b">
							<p className="font-semibold">{user.name}</p>
							<p className="text-sm text-gray-600">{user.username}</p>
						</div>
						<button
							className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				) : (
					<Link
						href="/login"
						className="w-full px-4 py-2 block text-left text-gray-800 hover:bg-gray-100"
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};
