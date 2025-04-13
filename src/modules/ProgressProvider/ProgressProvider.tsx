'use client';

import { AppProgressProvider, useProgress } from "@bprogress/next";
import { ReactNode } from "react";

export const ProgressProvider = ({ children }: { children: ReactNode }) => {

	return (

		<AppProgressProvider
			height="4px"
			color="#464cf2"
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</AppProgressProvider>
	);
};
