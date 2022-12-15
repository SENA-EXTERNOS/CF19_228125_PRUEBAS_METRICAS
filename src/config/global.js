export default {
  global: {
    componenteFormativo: 'Pruebas y métricas',
    descripcionCurso:
      'El componente formativo 19 está diseñado con el fin de que el estudiante adquiera los conocimientos sobre conceptos necesarios para su formación, tales como: técnicas de pruebas, pruebas, <i>Rational Test</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Trazar la ruta de desarrollo de <i>software</i>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de prueba',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Basadas en la especificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Basadas en el código',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Basadas en errores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Basadas en el Uso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Basadas en la naturaleza de la aplicación',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Según la finalidad de las mismas',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Automatización de pruebas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Virtualización de servicios',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Enfoques <i>Shift Left</i>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Rational Test</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<i>Rational Test Virtualization Server</i>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<i>Rational Test Workbench</i>',
            hash: 't_4_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Calidad del <i>software</i> e ingeniería de la usabilidad',
      referencia: 'Artículo de noticias en línea·2012·Mascheroni',
      tipo: 'Artículo',
      link: 'http://sedici.unlp.edu.ar/handle/10915/19202',
    },
    {
      tema: 'Ingeniería de la Usabilidad',
      referencia:
        'Mascheroni, M. A. (2012, 6 agosto). <i>Calidad de software e ingeniería de usabilidad</i>.',
      tipo: 'Texto',
      link:
        'https://utncomunicacionprofesional.files.wordpress.com/2012/04/ingenieria-de-sitios-web.pdf',
    },
    {
      tema: '<i>Unit testing</i>',
      referencia:
        'İnan, E. (2022, 23 febrero). <i>What is Unit Testing? - HardwareAndro</i>. ',
      tipo: 'Texto',
      link:
        'https://medium.com/hardwareandro/what-is-unit-testing-435e8134b16e',
    },
    {
      tema: '<i>Best practices for test automation</i>',
      referencia:
        'Galani, L. (2022, 21 marzo). <i>Best practices for test automation - assert(QA)</i>.',
      tipo: 'Artículo',
      link:
        'https://medium.com/assertqualityassurance/best-practices-for-test-automation-536e7a94ded4',
    },

    {
      tema: '<i>Unit Testing with JUnit and Mockito</i>',
      referencia:
        'Weidner, F. A. G. (2022, 5 enero). <i>Unit Testing with JUnit and Mockito - Ana Flávia G Weidner.</i> ',
      tipo: 'Artículo',
      link:
        'https://medium.com/@anaflaviagw/unit-testing-with-junit-and-mockito-55330d93b8a0',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad web',
      significado:
        'tiene como objetivo lograr que las páginas web sean utilizables por el máximo número de personas, independientemente de sus conocimientos o capacidades personales e independientemente de las características técnicas del equipo utilizado para acceder a la web.',
    },
    {
      termino: 'Adaptabilidad',
      significado:
        'la capacidad del producto <i>software</i> para adaptarse a diferentes entornos especificados sin aplicar acciones o medios distintos a los previstos para este fin para el <i>software</i> considerado. [ISO 9126] Consulte también pruebas de portabilidad.',
    },
    {
      termino: 'Criterios de aceptación',
      significado:
        'los criterios de salida que debe satisfacer un componente o sistema para ser aceptado por un usuario, cliente u otra entidad autorizada.',
    },
    {
      termino: 'Ingeniería de <i>software</i>',
      significado:
        'disciplina formada por un conjunto de métodos, herramientas y técnicas que se utilizan en el desarrollo de programas informáticos, más conocidos como <i>softwares</i>.',
    },
    {
      termino: 'Ingeniería web',
      significado:
        'uso de métodos sistemáticos, disciplinados y cuantificables al desempeño eficaz, operatividad y crecimiento de programas de muy buena calidad en la World Wide Web.',
    },
    {
      termino: 'Pruebas de accesibilidad',
      significado:
        'pruebas para determinar la facilidad con la que los usuarios con discapacidades pueden usar un componente o sistema.',
    },
    {
      termino: 'Pruebas de integración',
      significado:
        'las pruebas de integración están destinadas a validar el funcionamiento de múltiples componentes de aplicaciones a medida que interactúan entre sí o se integran entre sí.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'una prueba unitaria solo valida la unidad más pequeña de un proceso computacional. Eso podría significar una prueba de un solo método o componente en una aplicación.',
    },
    {
      termino: '<i>Software</i> a medida',
      significado:
        '<i>software</i> desarrollado específicamente para un conjunto de usuarios o clientes. Lo opuesto es el software estándar.',
    },
    {
      termino: '<i>Software</i> de prueba automatizado',
      significado:
        '<i>testware</i> utilizado en pruebas automatizadas, como scripts de herramientas.',
    },
  ],
  referencias: [
    {
      referencia: 'IBM (2022)',
      link: 'https://www.ibm.com/',
    },
    {
      referencia:
        'López Echeverry, et al. (2008). Introducción a la calidad de software. <i>Scientia Et Technica</i>, 2(39).',
      link: 'https://doi.org/10.22517/23447214.3241',
    },
    {
      referencia:
        'Mascheroni, M. et al. (2012). <i>Calidad de software e Ingeniería de Usabilidad</i>. XIV Workshop de investigadores en ciencias de la computación',
      link: 'https://core.ac.uk/download/pdf/301039589.pdf',
    },
    {
      referencia: 'Significados (2022)',
      link: 'https://www.significados.com/calidad/',
    },
    {
      referencia:
        'Pressman (2006). <i>Ingeniería de software, un enfoque práctico</i>, 5ª. Edición. Editorial Pressman.',
    },
    {
      referencia:
        'Tsui (2022). <i>Essential of Software Engineering</i>, 5a. edición. JB Learning.',
    },
    {
      referencia: 'Torcivia, M. (2020). Shift-left-Testing. Medium',
      link: 'https://medium.com/globant/shift-left-testing-c838521617b0',
    },
    {
      referencia:
        'Universidad de Alicante. (2022). ¿Qué es la accesibilidad web',
      link: 'http://accesibilidadweb.dlsi.ua.es/',
    },
    {
      referencia: 'Accesibilidad Web (2022)',
      link: 'http://accesibilidadweb.dlsi.ua.es/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
