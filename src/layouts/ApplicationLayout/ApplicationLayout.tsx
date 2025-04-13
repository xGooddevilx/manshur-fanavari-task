import React, { ReactNode } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";

type Properties = {
	children: ReactNode;
};

export const ApplicationLayout = ({ children }: Properties) => {
	return (
		<div className="h-dvh flex flex-col">
			<Header />
			<div className="flex-1">
			{children}
			</div>
			<Footer />
		</div>
	);
};
