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
      termino: 'Activo',
      significado:
        'recurso controlado por la unidad económica que puede generar beneficios y estar representado en efectivo, cuentas por cobrar, inventarios, equipos u otros bienes.',
    },
    {
      termino: 'Control de recursos',
      significado:
        'acciones utilizadas para verificar el manejo, uso y disponibilidad de los recursos de la unidad económica.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'estado financiero que presenta los ingresos y gastos de un periodo y permite determinar la utilidad o pérdida.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'estado financiero que presenta los activos, pasivos y patrimonio en una fecha determinada.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'herramienta que organiza las entradas y salidas de efectivo durante un periodo para conocer la disponibilidad de dinero.',
    },
    {
      termino: 'Gasto',
      significado:
        'recurso utilizado para apoyar el funcionamiento y desarrollo de la actividad económica.',
    },
    {
      termino: 'Impacto',
      significado:
        'magnitud de las consecuencias que puede generar la materialización de un riesgo.',
    },
    {
      termino: 'Ingreso',
      significado:
        'valor generado por las actividades económicas realizadas, como ventas de bienes o prestación de servicios.',
    },
    {
      termino: 'Liquidez',
      significado:
        'disponibilidad de recursos para atender oportunamente pagos y obligaciones.',
    },
    {
      termino: 'Medida preventiva',
      significado:
        'acción establecida anticipadamente para disminuir la probabilidad o el efecto de un riesgo.',
    },
    {
      termino: 'Nivel de afectación',
      significado:
        'resultado de valorar la probabilidad y el impacto de un riesgo para determinar su importancia.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación que tiene la unidad económica y que requiere recursos para su cumplimiento.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'parte de los recursos que corresponde a los propietarios después de descontar los pasivos de los activos.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'posibilidad de que un riesgo identificado llegue a ocurrir.',
    },
    {
      termino: 'Proyección del flujo de caja',
      significado:
        'estimación de las entradas, salidas y saldos de efectivo esperados para periodos futuros.',
    },
    {
      termino: 'Riesgo de crédito',
      significado:
        'posibilidad de que un cliente u otro tercero no realice oportunamente el pago de una obligación.',
    },
    {
      termino: 'Riesgo de liquidez',
      significado:
        'posibilidad de no disponer de efectivo suficiente para atender las obligaciones previstas.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'posibilidad de que una situación afecte negativamente los recursos, resultados o capacidad de pago del negocio.',
    },
    {
      termino: 'Saldo final',
      significado:
        'valor de efectivo disponible al finalizar un periodo después de considerar las entradas y salidas.',
    },
    {
      termino: 'Utilidad',
      significado:
        'resultado positivo obtenido cuando los ingresos superan los costos y gastos del periodo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (s. f.). Sectores económicos. La Enciclopedia.',
      link: 'https://enciclopedia.banrepcultural.org/Sectores_econ%C3%B3micos',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1983, 6 de julio). Ley 14 de 1983. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=267',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995, 20 de diciembre). Ley 223 de 1995. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6968',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998, 24 de diciembre). Ley 488 de 1998. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=187',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005, 8 de julio). Ley 962 de 2005. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17004',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Guía para la administración del riesgo y el diseño de controles en entidades públicas (Versión 6). Consultar guía de Función Pública',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2022). Clasificación Industrial Internacional Uniforme de todas las actividades económicas. Revisión 4 adaptada para Colombia (CIIU Rev. 4 A.C.).',
      link: 'https://www.dane.gov.co/files/sen/nomenclatura/ciiu/CIIU_Rev_4_AC2022.pdf',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2023). Sistema de Información de Economía Popular.',
      link: 'https://siep.dane.gov.co/medicion-de-la-economia-popular',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025, 23 de septiembre). Resolución 000227 de 2025. Compilación Jurídica DIAN.',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0227_2025.htm',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Abecé de la actualización en el RUT.',
      link: 'https://www.dian.gov.co/Prensa/Aprendelo-en-un-DIAN-X3/Paginas/Abece-Actualizacion-RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente. Consultar documento soporte en la DIAN',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Factura electrónica.',
      link: 'https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-FE-Facturador.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Impuestos.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Inicio.aspx',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, 27 de marzo). Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989, 30 de marzo). Decreto 624 de 1989. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales. Dirección de Impuestos y Aduanas Nacionales. Consultar Decreto 624 de 1989',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2650 de 1993. Instituto Nacional de Contadores Públicos.',
      link: 'https://incp.org.co/Site/productosyservicios/legislativa/2650.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2012, 27 de diciembre). Decreto 2706 de 2012. Por el cual se reglamenta la Ley 1314 de 2009 sobre el marco técnico normativo de información financiera para las microempresas. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=51148',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Anexo 3 del Decreto 2420 de 2015. Marco técnico normativo para los preparadores de información financiera que conforman el Grupo 3. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76055',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2021, 9 de diciembre). Decreto 1670 de 2021. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=174053',
    },
    {
      referencia:
        'Sistema Estadístico Nacional. (s. f.). Sistema de consulta de conceptos estandarizados. Departamento Administrativo Nacional de Estadística.',
      link: 'https://conceptos.dane.gov.co/conceptos/conceptos/4062/ficha/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s. f.). Glosario: C.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/13140/glosario-c-13140/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s. f.). Glosario: R.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/13155/glosario-r-13155/',
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
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
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
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
