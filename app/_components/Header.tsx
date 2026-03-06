import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header>
      <nav className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-between gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-primary font-bold text-xl">SuperSign</h2>
            </div>
            <Button>
              <FileText className="w-6 h-6 text-white" />
              <span>Documentos</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
