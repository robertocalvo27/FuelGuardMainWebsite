import React from 'react';
import { Info, Settings, Shield } from 'lucide-react';

export function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Política de Cookies</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">
            FuelGuard utiliza cookies y tecnologías similares para mejorar su experiencia en nuestra plataforma de gestión de combustible. Esta política explica cómo y por qué utilizamos estas tecnologías.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestra plataforma. Nos ayudan a recordar sus preferencias y mejorar su experiencia de uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies Esenciales</h3>
                <p className="text-gray-600">Necesarias para el funcionamiento básico de FuelGuard:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Autenticación y seguridad de sesión</li>
                  <li>Funcionalidades básicas de la plataforma</li>
                  <li>Prevención de fraudes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies Funcionales</h3>
                <p className="text-gray-600">Mejoran la experiencia de usuario:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Preferencias de idioma</li>
                  <li>Configuración de reportes</li>
                  <li>Historial de uso reciente</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies Analíticas</h3>
                <p className="text-gray-600">Nos ayudan a mejorar nuestros servicios:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Estadísticas de uso</li>
                  <li>Patrones de navegación</li>
                  <li>Rendimiento de la plataforma</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Gestión de Cookies</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <Settings className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-600 mb-4">
                    Puede gestionar sus preferencias de cookies a través de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>El panel de configuración de cookies de FuelGuard</li>
                    <li>La configuración de su navegador web</li>
                    <li>Las opciones de privacidad de su dispositivo</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ... resto del contenido ... */}
        </div>
      </div>
    </div>
  );
} 