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

export const AdminDashboardPage = () => {
	const { data, error, isLoading } = useGetUserList();

	if (isLoading) return <p className="text-center mt-10">Loading...</p>;
	if (error)
		return (
			<p className="text-center mt-10 text-red-500">Something went wrong!</p>
		);

	type TableHeaderTypes = Array<{
		title: string;
		className?: string;
		key: number;
	}>;

	const tableHeaderItems = [
		{ title: "Name", className: "w-[200px]", key: 1 },
		{ title: "Username", key: 2 },
		{ title: "Role", className: "text-right", key: 3 },
	] satisfies TableHeaderTypes;

  
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
					{false ? (
						<TableRow>
							<TableCell
								colSpan={4}
								className="text-center py-10 text-gray-500"
							>
								<div className="flex flex-col items-center justify-center gap-2">
									<InboxIcon className="w-6 h-6" />
									<span>No users found</span>
								</div>
							</TableCell>
						</TableRow>
					) : (
						data?.users.map(user => (
							<TableRow key={user.id}>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.username}</TableCell>
								<TableCell className="text-right">{user.role}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
};
