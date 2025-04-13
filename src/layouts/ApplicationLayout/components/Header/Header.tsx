import Link from "next/link";
import { User } from "./components/User";
import { routes } from "@/modules/routes";
import { Navigation } from "./components/Navigation";

export const Header = () => {
	return (
		<header className="w-full bg-white shadow p-4 flex justify-between items-center">
			<div className="flex items-center gap-6">
				<h1 className="text-2xl font-bold text-gray-800">
					<Link href={routes.home}>MyApp</Link>
				</h1>
				<Navigation />
			</div>
			<User />
		</header>
	);
};
