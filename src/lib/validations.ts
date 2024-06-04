import z from "zod";

export const certificateSchema = z.object({
  course: z.string().min(1).max(50),
  firstName: z.string().min(1).max(15),
  lastName: z.string().min(1).max(15),
});
export type TSearchParams = z.infer<typeof certificateSchema>;
