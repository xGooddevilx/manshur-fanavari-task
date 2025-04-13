/* eslint-disable @typescript-eslint/no-unused-expressions */
import type { NextConfig } from "next";

import { serverEnvironments } from './src/modules/env/server';
import { clientEnvironments } from "@/modules/env/client";

serverEnvironments;
clientEnvironments

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
