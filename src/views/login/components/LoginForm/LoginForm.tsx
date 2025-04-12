"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginFormSchema } from "./useLoginFormSchema";
import { z } from "zod";
import { useApiClient } from "@/api-services/api-client/useApiClient";
import { useRouter } from "next/navigation";
import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { Input } from "@/components/ui/Input";
export const LoginForm = () => {
	const router = useRouter();
	const { login } = useAuth();

	const FormSchema = useLoginFormSchema();

	type FormDataType = z.infer<typeof FormSchema>;

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormDataType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = async (data: FormDataType) => {
		try {
			login(data);
			router.replace("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-4 max-w-sm mx-auto"
			>
				<div>
					<label className="block text-sm font-medium mb-1">Username</label>
					<Input type="text" inputMode="text" {...register("username")} />
					{errors.username && (
						<p className="text-red-500 text-sm">{errors.username.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">Password</label>
					<Input type="password" inputMode="text" {...register("password")} />
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					Login
				</button>
			</form>
		</div>
	);
};
