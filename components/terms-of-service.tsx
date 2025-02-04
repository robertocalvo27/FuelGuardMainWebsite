import React from 'react';
import { Mail, Phone, AlertTriangle } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Términos de Uso</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">
            Bienvenido a FuelGuard, la plataforma de gestión y control de combustible. Este sistema está diseñado para optimizar el control de consumo de combustible y prevenir pérdidas. Al utilizar FuelGuard, los usuarios aceptan cumplir con los siguientes términos y condiciones.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceso al Sistema</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>El acceso se otorga según el tipo de suscripción contratada (Corporativa o Individual).</li>
              <li>Cada usuario recibe credenciales únicas que no deben compartirse bajo ninguna circunstancia.</li>
              <li>Las empresas con suscripción corporativa son responsables de gestionar los accesos de sus empleados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso Aceptable del Sistema</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Está estrictamente prohibido:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Registrar despachos o consumos falsos de combustible.</li>
                  <li>Manipular datos de rendimiento o estadísticas.</li>
                  <li>Utilizar el sistema para facilitar el hurto de combustible.</li>
                  <li>Compartir accesos entre conductores o despachadores.</li>
                </ul>
              </li>
              <li>Los usuarios deben registrar información precisa y veraz sobre los consumos de combustible.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades por Tipo de Suscripción</h2>
            <p className="text-gray-600 mb-4">Suscripción Corporativa:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Mantener actualizada la lista de usuarios autorizados.</li>
              <li>Garantizar el uso adecuado del sistema por parte de despachadores.</li>
              <li>Reportar inmediatamente cualquier actividad sospechosa.</li>
            </ul>
            <p className="text-gray-600 mt-4 mb-4">Suscripción Individual:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Registrar consumos de manera oportuna y precisa.</li>
              <li>Mantener actualizados los datos del vehículo.</li>
              <li>No compartir credenciales de acceso.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad y Control</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>FuelGuard monitoreará patrones de uso para detectar anomalías y prevenir fraudes.</li>
              <li>Los usuarios deben reportar inmediatamente cualquier irregularidad en los registros.</li>
              <li>Se realizarán auditorías periódicas de los registros de consumo y despacho.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitación de Responsabilidad</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>FuelGuard no se responsabiliza por pérdidas derivadas del mal uso del sistema.</li>
              <li>Las estadísticas y recomendaciones son orientativas y no garantizan resultados específicos.</li>
              <li>La disponibilidad del servicio está sujeta a mantenimientos programados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Consecuencias por Incumplimiento</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-4">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                <div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>El uso fraudulento resultará en la suspensión inmediata del servicio.</li>
                    <li>FuelGuard se reserva el derecho de reportar actividades sospechosas a las autoridades.</li>
                    <li>La manipulación de datos puede resultar en acciones legales.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modificaciones del Servicio</h2>
            <p className="text-gray-600">
              FuelGuard puede modificar, actualizar o discontinuar funcionalidades del sistema, notificando con anticipación a los usuarios afectados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Soporte Técnico</h2>
            <p className="text-gray-600 mb-4">
              Para asistencia técnica o reportar problemas, contacte a nuestro equipo de soporte:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:soporte@fuelguard.com" className="text-blue-600 hover:text-blue-800">
                  soporte@fuelguard.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">(+123) 456-7890</span>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aceptación de los Términos</h2>
            <p className="text-gray-600">
              Al utilizar FuelGuard, los usuarios aceptan estos términos de uso. Si no está de acuerdo con estos términos, absténgase de usar el sistema.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 