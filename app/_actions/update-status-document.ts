"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { UpdateStatusDocumentSchema, DocumentSchema } from "@/schemas";
import { apiUrl } from "@/lib/env";

export interface ActionResponse {
  success: boolean;
  message: string;
  data?: z.infer<typeof DocumentSchema>;
}

export const updateStatusDocumentAction = async (
  id: z.infer<typeof UpdateStatusDocumentSchema>,
): Promise<ActionResponse> => {
  const validated = UpdateStatusDocumentSchema.safeParse(id);

  if (!validated.success) {
    return {
      success: false,
      message: validated.error.message,
    };
  }

  try {
    const response = await fetch(`${apiUrl}/${id.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Status do documento atualizado com sucesso",
      data: await response.json(),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Erro ao atualizar status do documento",
    };
  }
};
