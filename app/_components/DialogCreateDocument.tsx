"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { createDocumentAction } from "../_actions/create-document";
import { CreateDocumentSchema } from "@/schemas";
import {toast} from "sonner";

const DialogCreateDocument = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const form = useForm<z.infer<typeof CreateDocumentSchema>>({
    resolver: zodResolver(CreateDocumentSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateDocumentSchema>) => {
    const result = await createDocumentAction(data);
    form.reset();
    setOpenDialog(false);
    toast.success(result.message);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <PlusIcon className="w-4 h-4 mr-1" />
          Novo Documento
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo documento</DialogTitle>
          <DialogDescription>
            Preencha os campos para criar um novo documento.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="titulo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o titulo da transação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        className="max-w-full"
                        placeholder="Digite a descrição da transação"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button type="submit" className="w-50 cursor-pointer">
                Criar documento
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateDocument;
