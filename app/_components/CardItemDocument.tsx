"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Clock } from "lucide-react";
import DialogViewDocument from "./DialogViewDocument";
import { Button } from "@/components/ui/button";

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
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="truncate">{title}</CardTitle>
        {status === "PENDENTE" && (
          <Button variant="outline" size="sm">
            <Lock className="w-4 h-4 mr-2" />
            Assinar
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col h-full">
        <div className="flex-1">
          <p className="line-clamp-2">{description}</p>
        </div>

        <DialogViewDocument title={title} description={description} />

        <div className="flex justify-end mt-1">
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
