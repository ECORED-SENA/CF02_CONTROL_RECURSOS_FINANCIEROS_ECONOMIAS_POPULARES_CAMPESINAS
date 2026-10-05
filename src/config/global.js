export default {
  global: {
    Name: 'Información financiera, liquidez y control de riesgos',
    Description:
      'La consolidación de la información financiera organiza los registros del negocio para elaborar estados financieros básicos, analizar el flujo de caja y reconocer dificultades de liquidez. Sus resultados permiten identificar y evaluar riesgos financieros, proyectar entradas y salidas de efectivo y establecer medidas preventivas y mecanismos de control que fortalecen la gestión de los recursos y respaldan las decisiones económicas.',
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
        titulo: 'Consolidación de la información financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Organización de ingresos y egresos del periodo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Consolidación de activos, pasivos y patrimonio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Consolidación de ingresos, costos y gastos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Determinación de utilidad o pérdida',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Verificación de información para informes financieros',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estados financieros básicos del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Marco normativo de la información financiera básica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estado de situación financiera simplificado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estado de resultados simplificado',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre situación financiera y resultado del periodo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Lectura e interpretación básica de los estados financieros',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Flujo de caja y análisis de liquidez',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Flujo de caja: concepto, importancia y clases',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Entradas y salidas de efectivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Elaboración del flujo de caja',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Identificación de problemas de liquidez',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Proyección del flujo de caja',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Identificación y evaluación de riesgos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Riesgo financiero: concepto y características',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación de riesgos financieros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Identificación de riesgos a partir de resultados del negocio',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Probabilidad, impacto y nivel de afectación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Evaluación y priorización de riesgos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Medidas preventivas y control de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Medidas preventivas: concepto e importancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación de medidas según riesgos identificados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Implementación de medidas preventivas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Mecanismos y objetivos del control de recursos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Seguimiento, ajustes y decisiones de control',
            hash: 't_5_5',
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
