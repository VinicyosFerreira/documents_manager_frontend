"use client";
import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-1">
      <h1 className="text-2xl font-semibold">Ocorreu um erro interno</h1>
      <h2 className="text-destructive">{error.message}</h2>
      <div>
        <Button onClick={() => reset()}>Tente novamente</Button>
      </div>
    </div>
  );
};

export default Error;
