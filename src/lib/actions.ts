"use server";

import { z } from "zod";
import { contactSchema } from "./schemas";

/**
 * Server action result type — every action returns { success, message, data? } or { success, error }.
 */
type ActionResult<T = void> =
  | { success: true; message: string; data?: T }
  | { success: false; error: string };

/**
 * Example server action — handles contact form submission.
 * Server actions run on the server and can be called directly from client components.
 *
 * @example
 * // In a client component:
 * import { submitContact } from "@/lib/actions";
 *
 * const result = await submitContact(formData);
 * if (result.success) toast.success(result.message);
 * else toast.error(result.error);
 */
export async function submitContact(data: z.infer<typeof contactSchema>): Promise<ActionResult> {
  // Validate on the server (defense in depth — client already validated with Zod)
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  // TODO: Replace with your actual logic — send email, save to DB, etc.
  // await sendEmail({ to: "team@example.com", subject: "Contact form", body: parsed.data.message });

  return { success: true, message: "Message sent successfully." };
}
