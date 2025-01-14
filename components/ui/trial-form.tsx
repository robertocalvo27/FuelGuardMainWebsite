"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Checkbox } from "./checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { countries } from "@/lib/countries";

interface TrialFormProps {
  onSuccess: () => void;
}

export function TrialForm({ onSuccess }: TrialFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position">Cargo</Label>
          <Input id="position" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo corporativo</Label>
        <Input id="email" type="email" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">País</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <div className="flex gap-2">
            <Input 
              className="w-20" 
              defaultValue="+51" 
              readOnly 
            />
            <Input 
              className="flex-1"
              type="tel"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fleet">Vehículos en flota</Label>
        <Input id="fleet" type="number" min="1" required />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          Acepto los términos y condiciones y la política de privacidad
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Procesando..." : "Comenzar Prueba Gratuita"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Sus datos están seguros y no serán compartidos con terceros
      </p>
    </form>
  );
}