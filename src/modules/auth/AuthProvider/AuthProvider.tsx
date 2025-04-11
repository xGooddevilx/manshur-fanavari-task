"use client";

import type { ReactNode } from "react";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { AuthContextType } from "./AuthContext";

import { AuthContext } from "./AuthContext";
import { G, R } from "@mobily/ts-belt";
import { LoginVariables, UserDto } from "@/api-services/types";
import { apiClient } from "@/api-services/api-client/ApiClient";

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

	const login = useCallback(
		async (loginVariables: LoginVariables) => {
			setIsAuthenticating(true);
			await apiClient.post("auth/login", { json: loginVariables });
			const userResult = await apiClient.get("auth/whoami").json<UserDto>();

			setIsAuthenticating(false);

			if (G.isNotNullable(userResult)) {
				setUser(userResult);
				return userResult;
			} else {
				console.log("Authentication failed!!!!");
				return undefined;
			}
		},
		[setIsAuthenticating, setUser]
	);

	const logout = useCallback(async () => {
		try {
			setUser(undefined);
			setIsAuthenticating(true);
			await apiClient.get("auth/logout");
		} finally {
			setIsAuthenticating(false);
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
