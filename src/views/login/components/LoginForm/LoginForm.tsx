"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginFormSchema } from "./useLoginFormSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/modules/auth/useAuth/useAuth";
import { Input } from "@/components/ui/Input";
import { routes } from "@/modules/routes";
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
			router.replace(routes.home);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
		<div>
		  <label className="block text-sm font-medium text-gray-700 mb-1">
			Username
		  </label>
		  <Input
			type="text"
			inputMode="text"
			{...register("username")}
			className="w-full"
		  />
		  {errors.username && (
			<p className="text-red-500 text-xs mt-1">
			  {errors.username.message}
			</p>
		  )}
		</div>
  
		<div>
		  <label className="block text-sm font-medium text-gray-700 mb-1">
			Password
		  </label>
		  <Input
			type="password"
			inputMode="text"
			{...register("password")}
			className="w-full"
		  />
		  {errors.password && (
			<p className="text-red-500 text-xs mt-1">
			  {errors.password.message}
			</p>
		  )}
		</div>
  
		<div className="flex justify-between text-sm text-blue-600">
		  <p className="hover:underline cursor-pointer">
			Forgot password?
		  </p>
		  <p  className="hover:underline cursor-pointer">
			Create account
		  </p>
		</div>
  
		<button
		  type="submit"
		  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-150"
		>
		  Login
		</button>
	  </form>
	);
};
