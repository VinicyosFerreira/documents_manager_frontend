"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { CreateDocumentSchema, DocumentSchema } from "@/schemas";
import { DocumentService } from "../_services";

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
    const result = await DocumentService.createDocument(data);
    revalidatePath("/");
    return {
      success: true,
      message: "Documento criado com sucesso",
      data: result,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Erro ao criar documento",
    };
  }
};
