"use client";

import { useGetUserList } from "@/api-services/queries/users";
import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
	TableCell,
} from "@/components/ui/Table";
import { A, G } from "@mobily/ts-belt";
import { InboxIcon } from "lucide-react";
import { TableContentSkeleton } from "./components/TableContentSkeleton";
import { useEffect } from "react";
import { toast } from "sonner";

export const AdminDashboardPage = () => {
	const { data, isLoading } = useGetUserList();

	type TableHeaderTypes = Array<{
		title: string;
		className?: string;
		key: number;
	}>;

	const tableHeaderItems = [
		{ title: "Name", className: "w-[200px] text-center", key: 1 },
		{ title: "Username", className: "text-center", key: 2 },
		{ title: "Role", className: "text-center", key: 3 },
	] satisfies TableHeaderTypes;

	const hasData =
		G.isNotNullable(data) && A.isNotEmpty(data.users) && !isLoading;

	return (
		<div className="max-w-5xl border mx-auto mt-10 rounded-xl overflow-hidden shadow-sm">
			<Table>
				<TableHeader>
					<TableRow>
						{tableHeaderItems.map(item => (
							<TableHead key={item.key} className={item.className}>
								{item.title}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{isLoading ? (
						<TableContentSkeleton />
					) : hasData ? (
						<>
							{data.users.map(user => (
								<TableRow key={user.id}>
									<TableCell className="text-center">{user.name}</TableCell>
									<TableCell className="text-center">{user.username}</TableCell>
									<TableCell className="text-center">{user.role}</TableCell>
								</TableRow>
							))}
						</>
					) : (
						<TableRow>
							<TableCell
								colSpan={tableHeaderItems.length}
								className="text-center py-10 text-gray-500"
							>
								<div className="flex flex-col items-center justify-center gap-2">
									<InboxIcon className="w-6 h-6" />
									<span>No users found</span>
								</div>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};
