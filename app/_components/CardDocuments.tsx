import CardItemDocument from "./CardItemDocument";

const data = [
  {
    title: "a",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "PENDENTE",
  },
  {
    title: "b",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "ASSINADO",
  },
  {
    title: "c",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "PENDENTE",
  },
  {
    title: "d",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam aliquid corrupti dolorem fugit inventore ullam voluptas saepe odit rem dignissimos repellat 
    repellendus deserunt, in sunt at sequi cupiditate maiores vero!`,
    status: "ASSINADO",
  },
];

const CardDocuments = () => {
  return (
    <div className="grid grid-cols-4  gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {data.map((item, i) => (
        <CardItemDocument
          key={i}
          title={item.title}
          status={item.status}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardDocuments;
