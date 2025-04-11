"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginFormSchema } from "./useLoginFormSchema";
import { z } from "zod";
import { useApiClient } from "@/api-services/api-client/useApiClient";
import { useRouter } from "next/navigation";
export const LoginForm = () => {
	const router = useRouter()
	const FormSchema = useLoginFormSchema();

  type FormDataType = z.infer<typeof FormSchema>;

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormDataType>({
		resolver: zodResolver(FormSchema),
	});


	const apiClient = useApiClient()

	const onSubmit = async (data:FormDataType) => {
		console.log("Form data:", data);
	try {
		const response = await apiClient.post("auth/login", {json:data})
		const responseData = await response.json()
		console.log(responseData);
		router.replace('/')
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
					<input
						type="text"
						{...register("username")}
						className="w-full border border-gray-300 p-2 rounded"
					/>
					{errors.username && (
						<p className="text-red-500 text-sm">{errors.username.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">Password</label>
					<input
						type="password"
						{...register("password")}
						className="w-full border border-gray-300 p-2 rounded"
					/>
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
