import { createEnv } from '@t3-oss/env-nextjs';
import { stringSchema, urlSchema } from './schemas';

export const serverEnvironments = createEnv({
	server: {
        JWT_SECRET: stringSchema,
    },
	experimental__runtimeEnv: {
        JWT_SECRET: process.env.JWT_SECRET,
    },
});