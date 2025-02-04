"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TrialDialog } from "@/components/ui/trial-dialog";
import { 
  Bot,
  Shield, 
  Droplet, 
  BarChart3, 
  Clock, 
  AlertTriangle, 
  FileBarChart, 
  CheckCircle2,
  Zap,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const MotionCard = motion(Card);

export default function HomeContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Badge variant="secondary" className="mb-4">
                Líder en Control de Combustible
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Control Total de su Combustible en Tiempo Real
              </h1>
              <p className="text-xl text-muted-foreground">
                Optimice el consumo, prevenga pérdidas y ahorre hasta un 30% en costos de combustible con FuelGuard.
              </p>
              <div className="flex gap-4 pt-4">
                <TrialDialog />
                <Button size="lg" variant="outline">
                  Ver Planes
                </Button>
              </div>
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-muted-foreground">Precisión</p>
                  <p className="text-sm text-muted-foreground mt-1">Medición exacta del consumo</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">30%</p>
                  <p className="text-muted-foreground">Ahorro</p>
                  <p className="text-sm text-muted-foreground mt-1">$2,000/mes por 10 vehículos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-muted-foreground">Monitoreo</p>
                  <p className="text-sm text-muted-foreground mt-1">Alertas en tiempo real</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-2xl opacity-25"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="FuelGuard Dashboard"
                  className="relative rounded-lg shadow-2xl border"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra por qué las empresas líderes confían en FuelGuard para el control y monitoreo de combustible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-primary mb-4" />,
                title: "Monitoreo en Tiempo Real",
                description: "Seguimiento continuo del consumo y niveles de combustible con actualizaciones instantáneas."
              },
              {
                icon: <Shield className="w-12 h-12 text-primary mb-4" />,
                title: "Control de Despachos",
                description: "Gestión y autorización de despachos con validación multinivel."
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-primary mb-4" />,
                title: "Detección de Irregularidades",
                description: "Sistema inteligente de alertas para identificar anomalías y prevenir pérdidas."
              },
              {
                icon: <FileBarChart className="w-12 h-12 text-primary mb-4" />,
                title: "Reportes Avanzados",
                description: "Informes detallados y personalizables para una mejor toma de decisiones."
              }
            ].map((feature, index) => (
              <MotionCard
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Cómo Funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Implementación simple en tres pasos para comenzar a optimizar su consumo de combustible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <MotionCard
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paso 1</h3>
              <h4 className="text-lg font-medium mb-4">Activar el Servicio</h4>
              <p className="text-muted-foreground">
                Registrate en nuestra plataforma, selecciona el plan que mejor se adapte a tu flota y configura tu cuenta en pocos minutos.
              </p>
            </MotionCard>

            <MotionCard
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <Droplet className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paso 2</h3>
              <h4 className="text-lg font-medium mb-4">Descargar la Aplicación</h4>
              <p className="text-muted-foreground">
                Cada conductor y/o despachador descargará la app FuelGuard en su dispositivo móvil para un monitoreo y control inteligente.
              </p>
            </MotionCard>

            <MotionCard
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paso 3</h3>
              <h4 className="text-lg font-medium mb-4">Comienza el Monitoreo Inteligente</h4>
              <p className="text-muted-foreground">
                Visualiza en tiempo real las estadísticas de consumo, despachos y alertas desde tu panel de control. Optimiza decisiones con GuardBot AI.
              </p>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* GuardBot AI Section */}
      <section id="guardbot" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Bot className="w-32 h-32 text-primary" />
              </motion.div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">GuardBot AI: Respuestas Inteligentes en Tiempo Real</h2>
              <p className="text-lg text-muted-foreground">
                Nuestro asistente de inteligencia artificial responde preguntas sobre consumo, alertas y rendimiento. Toma decisiones informadas sin depender de equipos externos.
              </p>
              <Button variant="default" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Prueba GuardBot AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Planes y Precios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elija el plan que mejor se adapte a las necesidades de su flota
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Básico",
                price: "299",
                description: "Ideal para flotas pequeñas",
                features: [
                  "Hasta 10 vehículos",
                  "Monitoreo en tiempo real",
                  "Alertas básicas",
                  "Soporte por email"
                ]
              },
              {
                name: "Profesional",
                price: "499",
                description: "Para flotas medianas",
                features: [
                  "Hasta 25 vehículos",
                  "Todas las características básicas",
                  "Reportes avanzados",
                  "Soporte prioritario 24/7"
                ]
              },
              {
                name: "Empresarial",
                price: "Personalizado",
                description: "Para grandes flotas",
                features: [
                  "Vehículos ilimitados",
                  "Todas las características profesionales",
                  "API personalizada",
                  "Gerente de cuenta dedicado"
                ]
              }
            ].map((plan, index) => (
              <MotionCard
                key={index}
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== "Personalizado" && <span className="text-muted-foreground">/mes</span>}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Comenzar</Button>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra por qué las empresas confían en FuelGuard
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodríguez",
                company: "Transportes del Norte",
                quote: "FuelGuard nos ha permitido reducir nuestros costos de combustible en un 25% en solo 3 meses."
              },
              {
                name: "Ana Martínez",
                company: "Logística Express",
                quote: "La facilidad de uso y la precisión del sistema nos han ayudado a optimizar nuestra operación."
              },
              {
                name: "Roberto Sánchez",
                company: "Distribuidora Central",
                quote: "El soporte técnico es excepcional y el sistema ha superado nuestras expectativas."
              }
            ].map((testimonial, index) => (
              <MotionCard
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="mb-4 text-lg">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Comience a Optimizar su Consumo de Combustible Hoy
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Únase a más de 500 empresas en América Latina que ya confían en FuelGuard
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  Prueba Gratuita 14 Días <Zap className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground">
                  Contactar Ventas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}