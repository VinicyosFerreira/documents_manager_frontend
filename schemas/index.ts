import z from "zod";

export const DocumentSchema = z.object({
  id: z.uuid(),
  titulo: z.string().trim().min(1),
  descricao: z.string().trim().min(1),
  status: z.enum(["PENDENTE", "ASSINADO"]),
  criado_em: z.date(),
});

export const CreateDocumentSchema = z.object({
  titulo: z.string().trim().min(1, {
    message: "O título é obrigatório",
  }),
  descricao: z.string().trim().min(1, {
    message: "A descrição é obrigatória",
  }),
});

export const UpdateStatusDocumentSchema = z.object({
  id: z.uuid(),
});
