"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrialDialog } from "@/components/ui/trial-dialog";

const MotionCard = motion(Card);

const blogPosts = [
  {
    id: 1,
    title: "Cómo Optimizar el Consumo de Combustible y Reducir Pérdidas en tu Flota",
    excerpt: "Descubre las mejores prácticas y estrategias para maximizar la eficiencia de tu flota y reducir costos operativos.",
    image: "https://images.unsplash.com/photo-1586438104042-fd557c8bd401?auto=format&fit=crop&q=80",
    date: "2024-03-20",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "5 Señales de Robo de Combustible en Flotas y Cómo Detectarlas",
    excerpt: "Aprende a identificar patrones sospechosos y protege tu inversión con sistemas de monitoreo avanzado.",
    image: "https://images.unsplash.com/photo-1582898967731-b5834427fd66?auto=format&fit=crop&q=80",
    date: "2024-03-18",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "Tecnología en Tiempo Real: El Futuro del Control de Combustible",
    excerpt: "Explora cómo la tecnología está revolucionando la gestión de combustible en la industria del transporte.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    date: "2024-03-15",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Casos de Éxito: Cómo Empresas Ahorraron Miles con FuelGuard",
    excerpt: "Historias reales de clientes que transformaron su operación y maximizaron su ROI con nuestras soluciones.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80",
    date: "2024-03-12",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Guía Completa para Prevenir Irregularidades en Despachos de Combustible",
    excerpt: "Todo lo que necesitas saber para implementar un sistema efectivo de control de despachos.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80",
    date: "2024-03-10",
    readTime: "12 min"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Blog FuelGuard</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra las últimas tendencias en gestión de combustible, mejores prácticas y casos de éxito.
            </p>
            <TrialDialog />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <MotionCard
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="px-0">
                    Leer más →
                  </Button>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}