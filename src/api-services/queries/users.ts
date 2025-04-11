import { useQuery } from "@tanstack/react-query";

const useGetUserList = () => {
	const query = useQuery({
		queryKey: ["userList"],
		queryFn: () => fetch("/api/users").then(res => res.json()),
	});
    return query
};

export { useGetUserList };
