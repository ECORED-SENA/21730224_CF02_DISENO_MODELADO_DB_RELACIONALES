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
        download: 'downloads/21730224_CF02_DU.pdf',
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
      termino: 'Dependencia transitiva',
      significado:
        'Condición lógica perjudicial para el rendimiento en la cual un atributo no clave depende funcionalmente de otra columna intermedia no clave, la cual a su vez depende de la clave primaria principal. Su eliminación es obligatoria para alcanzar la Tercera Forma Normal (3FN).',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Repositorio o catálogo formal de metadatos que documenta de manera exhaustiva el diseño físico del esquema de la empresa, detallando para cada tabla y columna sus tipos nativos, longitudes, descripciones semánticas y reglas de validación en el SGBD.',
    },
    {
      termino: 'Ingeniería hacia adelante',
      significado:
        'Capacidad avanzada integrada en las herramientas CASE que analiza de forma automatizada un modelo lógico visual de tablas para compilarlo y generar el script de código fuente SQL (DDL) de creación e implantación física del repositorio (Forward engineering).',
    },
    {
      termino: 'Integridad referencial',
      significado:
        'Principio obligatorio del paradigma relacional que exige que cada valor almacenado en una llave foránea (FK) coincida de forma exacta con una clave primaria (PK) válida y existente en la tabla maestra de origen, impidiendo la existencia de registros huérfanos.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Datos estructurados que describen las características técnicas, procedencia, restricciones y semántica de otros datos. En ingeniería de software, constituyen el núcleo del diccionario de datos de la organización, definiendo conceptualmente los datos acerca de los datos.',
    },
    {
      termino: 'Normalización',
      significado:
        'Proceso y algoritmo matemático relacional fundamentado en la teoría de conjuntos que permite descomponer tablas complejas o universales en estructuras atómicas puras, minimizando la redundancia física y erradicando anomalías de inserción, actualización y borrado.',
    },
    {
      termino: 'SGBD',
      significado:
        'Sistema gestor de bases de datos. Complejo entorno de software encargado de servir como interfaz entre la base de datos física, los usuarios y las aplicaciones del sector productivo. Controla de forma nativa el almacenamiento, la seguridad, la recuperación ante fallos y el cumplimiento estricto de las propiedades ACID.',
    },
    {
      termino: 'TI',
      significado:
        'Tecnologías de la información. Conjunto convergente de recursos tecnológicos, herramientas de hardware, arquitecturas de software, redes de conectividad y metodologías de ingeniería orientados a automatizar el procesamiento, almacenamiento, protección y transmisión de los activos informáticos corporativos.',
    },
    {
      termino: 'Tipos de datos nativos',
      significado:
        'Conjunto de formatos y estructuras de almacenamiento predefinidos y reconocidos de manera interna por un motor relacional específico (SGBD) para categorizar y limitar el dominio de los atributos en el nivel físico (por ejemplo: VARCHAR, INT, DECIMAL, TIMESTAMP).',
    },
  ],
  referencias: [
    {
      referencia:
        'CEPETEL. (2023). Introducción a bases de datos y programación SQL.',
      link: 'https://www.cepetel.org.ar/wp-content/uploads/2024/02/Introduccion-a-Bases-de-Datos-y-Programacion-SQL.pdf',
    },
    {
      referencia:
        'Camps Paré, R., Casillas Santillán, L., Costal Costa, D., Ginestà, M., Martín Escofet, C., & Pérez Mora, O. (2024). Software libre. Universitat Oberta de Catalunya.',
      link: 'https://www.uoc.edu/pdf/masters/oficiales/img/913.pdf',
    },
    {
      referencia:
        'Casas Roma, J. (2013). Introducción al diseño de bases de datos. Universitat Oberta de Catalunya.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w25213w/M1CDN112_S1_Introduccion_al_diseno_de_bases.pdf',
    },
    {
      referencia:
        'Marqués, M. (2011). Bases de datos. Departament d’Enginyeria i Ciència dels Computadors, Universitat Jaume I. ISBN 978-84-693-0146-3.',
      link: '',
    },
    {
      referencia:
        'Moncayo Gutiérrez, K. A., Alarcón Josué, S., Suárez Colín, S., Barrientos, A., & Isaí, R. (2021). Estándar ISO/IEC 12207: Information technology—Software life cycle processes. Universidad Veracruzana.',
      link: 'https://www.uv.mx/personal/ermeneses/files/2021/05/Estandar_12207-FebJul2021.pdf',
    },
    {
      referencia:
        'Torregrosa García, B. (2020). Modelos de datos. Universitat Oberta de Catalunya.',
      link: 'https://openaccess.uoc.edu/server/api/core/bitstreams/cd624356-d7bd-4022-888f-e2324ee440aa/content',
    },
    {
      referencia:
        'Universidad de Cantabria, ISTR – Ingeniería Software y Tiempo Real. (2007). IEEE Std 830-1998: Especificaciones de los requisitos del software.',
      link: 'https://www.ctr.unican.es/asignaturas/is1/ieee830_esp.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernan Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
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
