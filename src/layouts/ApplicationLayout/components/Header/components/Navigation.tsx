"use client";

import { useState } from "react";
import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { routes } from "@/modules/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/Sheet";

export const Navigation = () => {
	const { user, isAuthenticated } = useAuth();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = (href: string) => pathname === href;

	const links = [
		{
			href: routes.home,
			label: "Home",
		},
		...(isAuthenticated
			? [
					{
						href:
							user.role === "admin"
								? routes.dashboard.adminDashboard
								: routes.dashboard.userDashboard,
						label: "Dashboard",
					},
			  ]
			: []),
	];

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<nav className="hidden sm:flex gap-4">
				{links.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={clsx(
							"text-sm font-medium transition",
							isActive(link.href)
								? "text-blue-600 font-semibold"
								: "text-gray-600 hover:text-blue-600"
						)}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<div className="sm:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<button>
							<MenuIcon className="h-6 w-6 text-gray-700" />
						</button>
					</SheetTrigger>
					<SheetContent side="left">
						<SheetTitle>
							<Link href={routes.home} onClick={handleClose}>
								MyApp
							</Link>
						</SheetTitle>
						<nav className="flex flex-col gap-4 mt-6">
							{links.map(link => (
								<Link
									key={link.href}
									href={link.href}
									onClick={handleClose}
									className={clsx(
										"text-base font-medium transition",
										isActive(link.href)
											? "text-blue-600 font-semibold"
											: "text-gray-600 hover:text-blue-600"
									)}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
};
