import CardItemDocument from "./CardItemDocument";
import { DocumentService } from "../_service";

const data = [
  {
    id: 1,
    titulo: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "PENDENTE",
  },
  {
    id: 2,
    titulo: "b",
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "ASSINADO",
  },
  {
    id: 3,
    titulo: "c",
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "PENDENTE",
  },
  {
    id: 4,
    titulo: "d",
    descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "ASSINADO",
  },
];

const CardDocuments = async () => {
  //  const documents = await DocumentService.getDocuments();

  return (
    <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {data.map((item) => (
        <CardItemDocument
          key={item.id}
          titulo={item.titulo}
          status={item.status}
          description={item.descricao}
        />
      ))}
    </div>
  );
};

export default CardDocuments;
