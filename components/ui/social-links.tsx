"use client";

import { Button } from './button';
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function SocialLinks() {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hola,%20me%20interesa%20saber%20más%20sobre%20FuelGuard', '_blank');
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-green-50 text-green-600 border-green-200"
        onClick={openWhatsApp}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-blue-50 text-blue-600 border-blue-200"
        asChild
      >
        <a href="https://facebook.com/fuelguard" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-sky-50 text-sky-500 border-sky-200"
        asChild
      >
        <a href="https://twitter.com/fuelguard" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-blue-50 text-blue-700 border-blue-200"
        asChild
      >
        <a href="https://linkedin.com/company/fuelguard" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-white hover:bg-pink-50 text-pink-600 border-pink-200"
        asChild
      >
        <a href="https://instagram.com/fuelguard" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}