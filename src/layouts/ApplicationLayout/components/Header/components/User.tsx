"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/Popover";
import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { routes } from "@/modules/routes";
import { G } from "@mobily/ts-belt";
import {
	LayoutDashboardIcon,
	Loader2Icon,
	LogInIcon,
	LogOutIcon,
	UserRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const User = () => {
	const { isAuthenticated, isAuthenticating, user, logout } = useAuth();
	const hasUser = isAuthenticated && G.isNotNullable(user);
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<div className="flex items-center gap-2">
				{hasUser && <p className="font-semibold hidden lg:block">{user.name}</p>}
				<PopoverTrigger className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none">
					{isAuthenticating ? (
						<Loader2Icon className="animate-spin" />
					) : (
						<UserRoundIcon />
					)}
				</PopoverTrigger>
			</div>
			<PopoverContent className="me-2">
				{hasUser ? (
					<div>
						<div className="text-gray-800 border-b">
							<Link
								href={
									user.role === "admin"
										? routes.dashboard.adminDashboard
										: routes.dashboard.userDashboard
								}
								className="w-full flex items-center gap-2 px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
								onClick={handleClose}
							>
								<LayoutDashboardIcon className="size-4" />
								Dashboard
							</Link>
						</div>
						<button
							className="w-full px-4 py-2 text-left flex items-center gap-2 text-gray-800 hover:bg-red-100 hover:text-red-500"
							onClick={() => {
								logout();
								handleClose();
							}}
						>
							<LogOutIcon className="size-4" />
							Logout
						</button>
					</div>
				) : (
					<Link
						href="/login"
						className="w-full px-4 py-2 text-left flex items-center gap-2 text-gray-800 hover:bg-gray-100"
						onClick={handleClose}
					>
						<LogInIcon className="size-4" />
						Login
					</Link>
				)}
			</PopoverContent>
		</Popover>
	);
};
