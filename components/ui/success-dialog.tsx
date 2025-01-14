"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";
import { CheckCircle2 } from "lucide-react";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  loginUrl: string;
}

export function SuccessDialog({ open, onOpenChange, loginUrl }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <DialogTitle className="text-center">¡Felicitaciones!</DialogTitle>
          <DialogDescription className="text-center">
            Su cuenta de prueba ha sido creada exitosamente. En breve recibirá un correo con las instrucciones para comenzar.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={() => window.location.href = loginUrl}>
            Ir al Panel de Control
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}