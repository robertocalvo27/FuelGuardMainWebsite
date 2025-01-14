"use client";

import { useState } from "react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { TrialForm } from "./trial-form";
import { SuccessDialog } from "./success-dialog";
import { Zap } from "lucide-react";

export function TrialDialog() {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
    setShowSuccess(true);
  };

  return (
    <>
      <Button size="lg" className="gap-2" onClick={() => setOpen(true)}>
        Prueba Gratuita 14 Días <Zap className="w-4 h-4" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comience su prueba gratuita de 14 días</DialogTitle>
            <DialogDescription>
              Complete el formulario para acceder a todas las funcionalidades sin compromiso.
            </DialogDescription>
          </DialogHeader>
          <TrialForm onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>

      <SuccessDialog 
        open={showSuccess} 
        onOpenChange={setShowSuccess}
        loginUrl="https://fuelguard.netlify.app/login"
      />
    </>
  );
}