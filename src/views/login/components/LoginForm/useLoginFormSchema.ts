import { useMemo } from "react";
import z from "zod";

export const useLoginFormSchema = () => {
	const schema = useMemo(
		() =>
			z.object({
				username: z.string().min(1, "Username is required"),
				password: z.string().min(1, "Password is required"),
			}),
		[]
	);
	return schema;
};
