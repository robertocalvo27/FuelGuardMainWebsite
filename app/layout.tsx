import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Droplet, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FuelGuard - Control Integral de Combustible',
  description: 'Sistema integral de monitoreo y control de combustible en tiempo real',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Droplet className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">FuelGuard</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/#features" className="text-sm hover:text-primary">
                  Características
                </Link>
                <Link href="/#how-it-works" className="text-sm hover:text-primary">
                  Cómo Funciona
                </Link>
                <Link href="/#pricing" className="text-sm hover:text-primary">
                  Precios
                </Link>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
                <Button>Solicitar Demo</Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="flex flex-col gap-4 mt-8">
                      <Link href="/#features" className="text-lg hover:text-primary">
                        Características
                      </Link>
                      <Link href="/#how-it-works" className="text-lg hover:text-primary">
                        Cómo Funciona
                      </Link>
                      <Link href="/#pricing" className="text-lg hover:text-primary">
                        Precios
                      </Link>
                      <Link href="/blog" className="text-lg hover:text-primary">
                        Blog
                      </Link>
                      <Button className="mt-4">Solicitar Demo</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-secondary">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Droplet className="w-6 h-6 text-primary" />
                  <span className="font-bold text-xl">FuelGuard</span>
                </div>
                <p className="text-muted-foreground">
                  Sistema integral de monitoreo y control de combustible en tiempo real.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Producto</h3>
                <ul className="space-y-2">
                  <li><Link href="/#features" className="text-muted-foreground hover:text-primary">Características</Link></li>
                  <li><Link href="/#pricing" className="text-muted-foreground hover:text-primary">Precios</Link></li>
                  <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                  <li><Link href="/#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li><Link href="/#about" className="text-muted-foreground hover:text-primary">Sobre Nosotros</Link></li>
                  <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
                  <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                  <li><Link href="/#careers" className="text-muted-foreground hover:text-primary">Carreras</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/#privacy" className="text-muted-foreground hover:text-primary">Privacidad</Link></li>
                  <li><Link href="/#terms" className="text-muted-foreground hover:text-primary">Términos</Link></li>
                  <li><Link href="/#security" className="text-muted-foreground hover:text-primary">Seguridad</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} FuelGuard. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}