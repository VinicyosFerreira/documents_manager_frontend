import CardItemDocument from "./CardItemDocument";
import { DocumentService } from "../_service"

const CardDocuments = async () => {
  const documents = await DocumentService.getDocuments();

  return (
    <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {documents.map((item) => (
        <CardItemDocument
          key={item.id}
          title={item.titulo}
          status={item.status}
          description={item.descricao}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default CardDocuments;
