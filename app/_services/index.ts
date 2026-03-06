import { DocumentSchema, CreateDocumentSchema } from "@/schemas";
import { z } from "zod";
import { apiUrl } from "@/lib/env";
import { toast } from "sonner";

export type DocumentInput = z.infer<typeof DocumentSchema>;
export type CreateDocumentInput = z.infer<typeof CreateDocumentSchema>;

export const DocumentService = {
  getDocuments: async (): Promise<DocumentInput[]> => {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Erro ao buscar documentos");
    }
    return response.json();
  },

  createDocument: async (data: CreateDocumentInput): Promise<DocumentInput> => {
    const response = await fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Erro ao criar documento");
      throw new Error("Erro ao criar documento");
    }
    return response.json();
  },

  updateDocument: async (id: string): Promise<DocumentInput> => {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
    });

    if (!response.ok) {
      toast.error("Erro ao atualizar documento");
      throw new Error("Erro ao atualizar documento");
    }
    return response.json();
  },
};
