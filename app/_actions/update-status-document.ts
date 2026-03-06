"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { UpdateStatusDocumentSchema, DocumentSchema } from "@/schemas";
import { DocumentService } from "../_services";

export interface ActionResponse {
  success: boolean;
  message: string;
  data?: z.infer<typeof DocumentSchema>;
}

export const updateStatusDocumentAction = async (
  documentId: z.infer<typeof UpdateStatusDocumentSchema>,
): Promise<ActionResponse> => {
  const validated = UpdateStatusDocumentSchema.safeParse(documentId);

  if (!validated.success) {
    return {
      success: false,
      message: validated.error.message,
    };
  }

  try {
    const response = await DocumentService.updateDocument(documentId.id);

    revalidatePath("/");
    return {
      success: true,
      message: "Status do documento atualizado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Erro ao atualizar status do documento",
    };
  }
};
