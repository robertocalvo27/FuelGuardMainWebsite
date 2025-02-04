import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Política de Privacidad</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">
            En FuelGuard, nos comprometemos a proteger la privacidad y seguridad de los datos personales recopilados y procesados a través de nuestro sistema de gestión de combustible. Este documento describe cómo recopilamos, utilizamos y protegemos la información de nuestros usuarios corporativos e individuales.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datos Recopilados</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Datos personales: nombre, cargo, identificación, correo electrónico, información del vehículo o equipo.</li>
              <li>Datos operativos: registros de despacho de combustible, consumos, ubicación de entregas, estadísticas de rendimiento.</li>
              <li>Información técnica: dirección IP, tipo de dispositivo, navegador utilizado, datos de geolocalización y registros de acceso.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Facilitar el control y registro de despachos de combustible.</li>
              <li>Generar estadísticas de consumo y rendimiento para usuarios individuales y corporativos.</li>
              <li>Prevenir y detectar posibles fraudes en el manejo de combustible.</li>
              <li>Mejorar la eficiencia operativa del sistema y la experiencia del usuario.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protección de los Datos</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Implementamos encriptación de datos y medidas de seguridad avanzadas para proteger la información sensible.</li>
              <li>El acceso a los datos está restringido según el tipo de suscripción y nivel de autorización del usuario.</li>
              <li>Realizamos respaldos regulares y mantenemos protocolos de recuperación ante incidentes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Derechos de los Usuarios</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Acceder y exportar sus datos de consumo y registros de combustible.</li>
              <li>Solicitar la corrección de información inexacta sobre vehículos o consumos.</li>
              <li>Solicitar la eliminación de datos personales, sujeto a obligaciones contractuales y regulatorias.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Para ejercer estos derechos, contacte a nuestro equipo de privacidad en:{' '}
              <a href="mailto:privacidad@fuelguard.com" className="text-blue-600 hover:text-blue-800">
                privacidad@fuelguard.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Conservación de Datos</h2>
            <p className="text-gray-600">
              Mantenemos los registros de consumo y despacho de combustible durante el período de suscripción activa y hasta 5 años después, cumpliendo con requisitos regulatorios y facilitando análisis históricos de consumo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Transferencia de Datos</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>En suscripciones corporativas, compartimos datos agregados con los administradores autorizados de la empresa.</li>
              <li>No compartimos datos individuales de conductores sin su consentimiento expreso.</li>
              <li>Utilizamos proveedores de servicios cloud seguros para el almacenamiento y procesamiento de datos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cambios en la Política</h2>
            <p className="text-gray-600">
              Actualizaremos esta política según evolucionen nuestros servicios o cambien las regulaciones aplicables. Notificaremos cambios significativos a través de la plataforma y correo electrónico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
            <p className="text-gray-600 mb-4">
              Para consultas sobre privacidad o gestión de datos, contacte a nuestro equipo de protección de datos:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:privacidad@fuelguard.com" className="text-blue-600 hover:text-blue-800">
                  privacidad@fuelguard.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">(+123) 456-7890</span>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aceptación de la Política</h2>
            <p className="text-gray-600">
              Al utilizar FuelGuard, los usuarios aceptan esta política de privacidad. Si no está de acuerdo con estos términos, absténgase de usar el sistema.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 