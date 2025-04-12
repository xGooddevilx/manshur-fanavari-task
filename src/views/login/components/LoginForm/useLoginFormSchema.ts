import { useMemo } from "react";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const useLoginFormSchema = () => {
  return useMemo(() => schema, []);
};