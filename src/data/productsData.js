export const modules = [
  {
    name: 'Análisis Sísmico',
    icon: '📊',
    description: 'Procesamiento avanzado de datos sísmicos para exploración y evaluación de riesgos geotécnicos.'
  },
  {
    name: 'Petrofísica',
    icon: '🧪',
    description: 'Análisis de propiedades de rocas y fluidos para optimizar decisiones de perforación.'
  },
  {
    name: 'Geoquímica',
    icon: '⚗️',
    description: 'Interpretación de datos geoquímicos para exploración mineral y evaluación ambiental.'
  },
  {
    name: 'Modelamiento 3D',
    icon: '🎯',
    description: 'Reconstrucción de modelos geológicos del subsuelo con precisión espacial.'
  }
]

export const plans = [
  {
    name: 'Individual',
    price: '$29',
    period: '/mes',
    description: 'Para profesionales independientes',
    features: [
      '1 usuario',
      'Análisis básicos de datos geológicos',
      '50 GB almacenamiento',
      'Soporte por email',
      'Actualizaciones estándar'
    ],
    cta: 'Comenzar Prueba',
    highlight: false
  },
  {
    name: 'Profesional',
    price: '$99',
    period: '/mes',
    description: 'Para equipos pequeños y consultoras',
    features: [
      'Hasta 5 usuarios',
      'Todos los módulos de análisis',
      '500 GB almacenamiento',
      'API para integraciones',
      'Soporte prioritario',
      'Análisis avanzado con IA'
    ],
    cta: 'Comenzar Prueba',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contactar',
    description: 'Para corporaciones grandes',
    features: [
      'Usuarios ilimitados',
      'Almacenamiento ilimitado',
      'Integraciones personalizadas',
      'Soporte 24/7 dedicado',
      'Modelos de IA personalizados',
      'SLA garantizado'
    ],
    cta: 'Contactar Ventas',
    highlight: false
  }
]
