import { createEnv } from "@t3-oss/env-nextjs";
import { stringSchema, urlSchema } from "./schemas";

export const clientEnvironments = createEnv({
	client: {
		NEXT_PUBLIC_API_URL_ADDRESS: urlSchema,
		NEXT_PUBLIC_API_PREFIX_URL: stringSchema,
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_API_URL_ADDRESS: process.env.NEXT_PUBLIC_API_URL_ADDRESS,
		NEXT_PUBLIC_API_PREFIX_URL: process.env.NEXT_PUBLIC_API_PREFIX_URL,
	},
});
