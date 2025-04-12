import { User } from "./components/User";

export const Header = () => {
	return (
		<header className="w-full bg-white shadow p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
      <User/>
		</header>
	);
};
