import React, { ReactNode } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";

type Properties = {
	children: ReactNode;
};

export const ApplicationLayout = ({ children }: Properties) => {
	return (
		<div className="h-dvh">
			<Header />
			{children}
			<Footer />
		</div>
	);
};
