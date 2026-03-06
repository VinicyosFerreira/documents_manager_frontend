import CreateDocument from "./_components/CreateDocument";
import Header from "./_components/Header";
import CardDocuments from "./_components/CardDocuments";

const Page = () => {
  return (
    <div className="space-y-4">
      <Header />
      <CreateDocument />
      <CardDocuments />
    </div>
  );
};

export default Page;
