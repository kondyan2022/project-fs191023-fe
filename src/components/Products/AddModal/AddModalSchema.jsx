import { object, number } from 'yup';

export const inputSchema = object({
  grams: number().positive().required("Grams are required")
})