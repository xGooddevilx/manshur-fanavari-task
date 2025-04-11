import { createEnv } from '@t3-oss/env-nextjs';

export const clientEnvironments = createEnv({
	client: {},
	experimental__runtimeEnv: {},
});