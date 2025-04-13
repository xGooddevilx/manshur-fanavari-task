"use client";

import type { ReactNode } from "react";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { AuthContextType } from "./AuthContext";

import { AuthContext } from "./AuthContext";
import { G, R } from "@mobily/ts-belt";
import { LoginResponse, LoginVariables, LogoutApiResponse, UserDto } from "@/api-services/types";
import { apiClient } from "@/api-services/api-client/ApiClient";
import { redirect, useRouter } from "next/navigation";
import { routes } from "@/modules/routes";
import { toast } from "sonner";

export type AuthProviderProperties = {
	children: ReactNode;
	initialData: UserDto | undefined;
};

export const AuthProvider = ({
	children,
	initialData,
}: AuthProviderProperties) => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [user, setUser] = useState<UserDto | undefined>(initialData);
	const isAuthenticated = G.isNotNullable(user);
	const router = useRouter()

	const login = useCallback(
		async (loginVariables: LoginVariables) => {
			setIsAuthenticating(true);
			try {
				const response = await apiClient.post("auth/login", { json: loginVariables }).json<LoginResponse>();
				const userResult = await apiClient.get("auth/whoami").json<UserDto | undefined>();

				if (G.isNotNullable(userResult)) {
					setUser(userResult);
					toast.success(response.message)
					router.push(userResult.role === "admin" ? routes.dashboard.adminDashboard : routes.dashboard.userDashboard)
					
					return userResult;
				} else {
					toast.error("Authentication failed, Please login again")
					return undefined;
				}
			} catch (error:any) {
				if (error.response) {
					const errData = await error.response.json();
					toast.error(errData.error);
				} else {
					toast.error("Something went wrong. Please try again.");
				}
			} finally {
				setIsAuthenticating(false);	
			}
		},
		[setIsAuthenticating, setUser]
	);

	const logout = useCallback(async () => {
		try {
			setUser(undefined);
			setIsAuthenticating(true);
			const response = await apiClient.post("auth/logout").json<LogoutApiResponse>();
			
			toast.success(response.message)

		} finally {
			setIsAuthenticating(false);
			router.replace(routes.auth.login)
		}
	}, []);

	const refreshUser = useCallback(
		async (retryCount = 0) => {
			const MAX_RETRY_COUNT = 1;

			if (!isAuthenticated) return;
			const userResult = await apiClient.get("auth/whoami").json<UserDto>();

			if (G.isNotNullable(userResult)) {
				setUser(userResult);
			} else {
				if (retryCount < MAX_RETRY_COUNT) refreshUser(retryCount + 1);
				else setUser(undefined);
			}
		},
		[isAuthenticated]
	);

	useEffect(() => {
		if (!isAuthenticated) return;
		const handleFocus = () => refreshUser();

		window.addEventListener("focus", handleFocus);

		return () => {
			window.removeEventListener("focus", handleFocus);
		};
	}, [isAuthenticated, refreshUser]);

	const providedValues = useMemo(
		() =>
			({
				isAuthenticated,
				isAuthenticating,
				login,
				logout,
				user,
			} as unknown as AuthContextType),
		[user, isAuthenticated, isAuthenticating, login, logout]
	);

	return (
		<AuthContext.Provider value={providedValues}>
			{children}
		</AuthContext.Provider>
	);
};
