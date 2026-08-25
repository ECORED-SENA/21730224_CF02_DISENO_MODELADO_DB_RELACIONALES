export default {
  global: {
    Name: 'Optimización, consistencia y documentación técnica de bases de datos',
    Description:
      'Este componente capacita al aprendiz en el aseguramiento de la calidad y la formalización documental de los repositorios relacionales. A través de la teoría de normalización, la aplicación de reglas de integridad y auditorías técnicas, el estudiante verificará la consistencia del diseño arquitectónico, consolidando un informe final bajo estándares de la industria.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Optimización de estructuras mediante teoría de normalización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Fundamentos de la normalización de datos y el problema de las anomalías de actualización ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Dependencias funcionales y transitivas ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Primera Forma Normal (1FN): eliminación de grupos repetitivos y atomicidad ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Segunda Forma Normal (2FN): dependencia funcional completa y fragmentación ',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Tercera Forma Normal (3FN): dependencias transitivas y evaluación de la redundancia ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Caso de uso: proceso completo de normalización para <i>ecommerce</i> ',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Integridad del dato y arquitectura del diccionario de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Principios fundamentales de integridad de los datos: integridad de entidad, de dominio y referencial ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Mecanismos avanzados de integridad: restricciones de transición y de transacción ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Especificación del modelado físico: arquitectura del diccionario de datos ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Diseño, construcción y mantenimiento formal del diccionario de datos corporativo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Caso de uso productivo: arquitectura de integridad y diccionario de datos para <i>ecommerce</i> ',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Aseguramiento de la calidad del diseño mediante técnicas de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Técnicas de evaluación estática de modelos: metodologías de inspección y revisión técnica de artefactos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Buenas prácticas en ingeniería de bases de datos: métricas de acoplamiento y cohesión aplicadas a esquemas de datos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Consolidación documental e informes técnicos de diseño de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'El informe de diseño en el ciclo de vida del <i>software</i>: conceptos, estructura y características de calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Normatividad vigente y estándares internacionales de documentación técnica de TI',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Integración de artefactos para la transferencia al entorno de producción',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
