import { useMemo } from "react";
import { apiClient } from "./ApiClient";

export const useApiClient = () => {
	const client = useMemo(() => apiClient, []);
    return client
};
