import React from 'react';
import { Users, Lightbulb, Target, Award } from 'lucide-react';
import Image from 'next/image';

export function AboutPage() {
  return (
    <main className="pt-24">
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Nuestra Historia
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Tres ingenieros unidos por una misión: transformar el control de combustible en Latinoamérica
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead text-xl text-muted-foreground">
            Todo comenzó en 2008, cuando tres amigos de la universidad - Gabriel Mendoza, Alejandro Ramírez y Diego Valencia - 
            se encontraron trabajando en diferentes proyectos mineros y de construcción en Perú, Chile y Colombia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-secondary mb-4">
                <Image 
                  src="/founders/gabriel.jpg" 
                  alt="Gabriel Mendoza" 
                  width={200} 
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gabriel Mendoza</h3>
              <p className="text-muted-foreground">Ing. Industrial - Perú</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-secondary mb-4">
                <Image 
                  src="/founders/alejandro.jpg" 
                  alt="Alejandro Ramírez" 
                  width={200} 
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alejandro Ramírez</h3>
              <p className="text-muted-foreground">Ing. Mecánico - Chile</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-secondary mb-4">
                <Image 
                  src="/founders/diego.jpg" 
                  alt="Diego Valencia" 
                  width={200} 
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diego Valencia</h3>
              <p className="text-muted-foreground">Ing. Sistemas - Colombia</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">El Problema que Nos Unió</h2>
          
          <div className="bg-secondary/20 p-8 rounded-lg my-8">
            <p className="text-lg">
              "En cada proyecto veíamos el mismo patrón: sistemas costosos que prometían mucho pero entregaban poco, 
              mientras las pérdidas de combustible seguían creciendo. Sabíamos que tenía que haber una mejor manera."
              <span className="block mt-2 font-semibold">- Alejandro Ramírez</span>
            </p>
          </div>

          <p>
            Durante más de una década, cada uno experimentó de primera mano los desafíos del control de combustible 
            en la industria. Vieron cómo las empresas invertían millones en sistemas complejos que, al final del día, 
            no resolvían el problema fundamental: la falta de un control efectivo y accesible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">La Idea</h3>
              <p className="text-center text-muted-foreground">
                Un sistema simple pero poderoso que cualquier empresa pudiera implementar sin grandes inversiones
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">La Misión</h3>
              <p className="text-center text-muted-foreground">
                Democratizar el control de combustible en Latinoamérica
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-lg">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">El Resultado</h3>
              <p className="text-center text-muted-foreground">
                FuelGuard: control efectivo al alcance de todos
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">El Nacimiento de FuelGuard</h2>
          
          <p>
            En 2023, después de años de investigación y desarrollo, los tres amigos unieron sus experiencias 
            para crear FuelGuard. La premisa era simple: un sistema que combinara la potencia del software 
            moderno con la simplicidad que las empresas necesitan.
          </p>

          <div className="bg-primary/10 p-8 rounded-lg my-8">
            <p className="text-lg">
              "No necesitábamos reinventar la rueda - necesitábamos hacer que la rueda fuera accesible para todos. 
              Esa es la esencia de FuelGuard."
              <span className="block mt-2 font-semibold">- Diego Valencia</span>
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">Hoy</h2>
          
          <p>
            FuelGuard está transformando la manera en que las empresas latinoamericanas controlan su combustible. 
            Desde pequeñas constructoras hasta grandes operaciones mineras, nuestra solución demuestra que la 
            innovación no tiene que ser compleja ni costosa para ser efectiva.
          </p>

          <div className="text-center mt-16">
            <p className="text-lg font-semibold mb-8">
              ¿Listo para ser parte de la revolución en el control de combustible?
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 