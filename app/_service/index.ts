import { DocumentSchema } from "@/schemas";
import { z } from "zod";
import { apiUrl } from "@/lib/env";

export type DocumentInput = z.infer<typeof DocumentSchema>;

export const DocumentService = {
  getDocuments: async (): Promise<DocumentInput[]> => {
    const response = await fetch(apiUrl);
  
    if (!response.ok) {
      throw new Error("Erro ao buscar documentos");
    }
    return response.json();
  },
};
