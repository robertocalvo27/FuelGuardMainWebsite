"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./button";

export function ChatBot() {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
      size="icon"
      variant="default"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}