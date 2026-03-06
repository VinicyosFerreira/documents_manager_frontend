import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Clock } from "lucide-react";
import DialogViewDocument from "./DialogViewDocument";

const CardItemDocument = ({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <p className="line-clamp-5">{description}</p>
        </div>

        <DialogViewDocument title={title} description={description} />

        <div className="flex justify-end">
          {status === "PENDENTE" ? (
            <Badge variant="destructive">
              <span className="font-bold">Pendente</span>
              <Clock className="w-4 h-4 ml-1" />
            </Badge>
          ) : (
            <Badge>
              <span className="font-bold">Assinado</span>
              <Lock className="w-4 h-4 ml-1" />
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItemDocument;
