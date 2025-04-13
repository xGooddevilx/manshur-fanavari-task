"use client";

import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { User2Icon } from "lucide-react";
import { title } from "process";
import { ReactNode, useMemo } from "react";

export const UserDashboardPage = () => {
	const { user } = useAuth();

	type InfoTableType = Array<{ title: string; value: ReactNode; key: number }>;

	if (!user) return null;

	const infoTable = useMemo(
		() =>
			[
				{ title: "Name", value: user.name, key: 1 },
				{ title: "Username", value: user.username, key: 2 },
				{ title: "Role", value: user.role, key: 3 },
			] satisfies InfoTableType,
		[user]
	);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
					<User2Icon size={30} />
					User Dashboard
				</h1>

				<div className="space-y-4 text-gray-700">
					{infoTable.map(item => (
						<div className="flex justify-between" key={item.key}>
							<span className="font-semibold">{item.title}:</span>
							<span>{item.value}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
