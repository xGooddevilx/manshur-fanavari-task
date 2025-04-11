import { z } from 'zod';

export const environmentSchema = z.enum(['development', 'production', 'test']);

export const stringSchema = z.string();

export const urlSchema = z.string().url();
