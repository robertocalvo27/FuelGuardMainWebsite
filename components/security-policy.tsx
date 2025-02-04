import React from 'react';
import { Shield, Lock, Server, AlertTriangle, KeyRound, Database, Eye, RefreshCw } from 'lucide-react';

export function SecurityPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Política de Seguridad</h1>

        <div className="prose prose-blue max-w-none">
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Compromiso de Seguridad</h2>
            </div>
            <p className="text-gray-600">
              FuelGuard implementa medidas de seguridad de nivel empresarial para proteger los datos sensibles de consumo de combustible y prevenir accesos no autorizados.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Seguridad de Datos</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Encriptación</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Datos en tránsito: TLS 1.3 para todas las comunicaciones</li>
                  <li>Datos en reposo: AES-256 para almacenamiento</li>
                  <li>Encriptación de extremo a extremo para datos sensibles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Almacenamiento</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Servidores redundantes en múltiples zonas geográficas</li>
                  <li>Copias de seguridad diarias encriptadas</li>
                  <li>Aislamiento de datos entre clientes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <KeyRound className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Control de Acceso</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Autenticación multifactor (MFA) obligatoria para accesos críticos</li>
              <li>Sistema de roles y permisos granular</li>
              <li>Registro detallado de todas las acciones de usuarios</li>
              <li>Políticas de contraseñas robustas</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Monitoreo y Detección</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Monitoreo 24/7 de actividad sospechosa</li>
                <li>Sistemas de detección de intrusiones (IDS/IPS)</li>
                <li>Alertas automáticas de comportamientos anómalos</li>
                <li>Análisis de patrones de consumo para detectar fraudes</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Infraestructura</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Centros de datos certificados ISO 27001</li>
              <li>Firewalls de última generación</li>
              <li>Arquitectura de microservicios aislados</li>
              <li>Escaneo regular de vulnerabilidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <RefreshCw className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Continuidad de Negocio</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>SLA de disponibilidad del 99.9%</li>
                <li>Plan de recuperación ante desastres documentado</li>
                <li>Pruebas regulares de respaldo y recuperación</li>
                <li>Redundancia en todos los sistemas críticos</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Gestión de Incidentes</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Equipo de respuesta a incidentes 24/7</li>
                <li>Protocolo de notificación de brechas</li>
                <li>Tiempo de respuesta garantizado según severidad</li>
                <li>Análisis post-incidente y mejora continua</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Cumplimiento y Certificaciones</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>ISO 27001 - Gestión de Seguridad de la Información</li>
              <li>SOC 2 Type II - Controles de Seguridad y Privacidad</li>
              <li>Cumplimiento con regulaciones de protección de datos</li>
              <li>Auditorías de seguridad regulares por terceros</li>
            </ul>
          </section>

          <section className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto de Seguridad</h2>
            <p className="text-gray-600">
              Para reportar vulnerabilidades o incidentes de seguridad, contacte inmediatamente a:{' '}
              <a href="mailto:security@fuelguard.com" className="text-blue-600 hover:text-blue-800">
                security@fuelguard.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 