import { useQuery } from "@tanstack/react-query";
import { useApiClient } from '../api-client/useApiClient';
import { UsersApiResponse } from "../types/User";

const useGetUserList = () => {
	const apiClient = useApiClient()

	const query = useQuery({
		queryKey: ["userList"],
		queryFn: async () => {
			const result = await  apiClient.get("admin/users").json<UsersApiResponse>()
			return result
		},
	});
    return query
};

export { useGetUserList };
