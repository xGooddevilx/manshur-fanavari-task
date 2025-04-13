"use client";

import { useGetUserList } from "@/api-services/queries/users";

export const AdminDashboardPage = () => {
	const { data, error, isLoading } = useGetUserList();

	if (isLoading) return <p>Loading</p>;
	if (!data) return <p>MEh</p>;
	return (
		<div>
			{data.users.map(item => (
				<p>{item.name}</p>
			))}
		</div>
	);
};
