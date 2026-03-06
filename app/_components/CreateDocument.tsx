import DialogCreateDocument from "./DialogCreateDocument";

const CreateDocument = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">
          SuperSign - Gerenciador de Documentos
        </h1>
        <p className="font-semibold text-sm">
          Gerenciar e acompanhar todos os documentos da organização.
        </p>
      </div>
      <DialogCreateDocument />
    </div>
  );
};

export default CreateDocument;
