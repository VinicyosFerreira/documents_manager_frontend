"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { CreateDocumentSchema, DocumentSchema } from "@/schemas";
import { apiUrl } from "@/lib/env";

export interface ActionResponse {
  success: boolean;
  message: string;
  data?: z.infer<typeof DocumentSchema>;
}

export const createDocumentAction = async (
  data: z.infer<typeof CreateDocumentSchema>,
): Promise<ActionResponse> => {
  const validated = CreateDocumentSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      message: validated.error.message,
    };
  }
  try {
    const response = await fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Documento criado com sucesso",
      data: await response.json(),
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Erro ao criar documento",
    };
  }
};
