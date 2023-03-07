export default {
  global: {
    componenteFormativo: 'Pruebas y métricas',
    descripcionCurso:
      'El componente formativo, está diseñado con el fin que el estudiante adquiera los conocimientos sobre conceptos necesarios para su formación, tales como: técnicas de pruebas, pruebas, <i>Rational Test</i>.',
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
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Rational Test</i>',
        desarrolloContenidos: true,
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
      tema: 'Técnicas de prueba',
      referencia:
        'Mascheroni, M. A. (2012). <em>Calidad de software e ingeniería de usabilidad.</em>',
      tipo: 'Texto',
      link:
        'https://utncomunicacionprofesional.files.wordpress.com/2012/04/ingenieria-de-sitios-web.pdf',
    },
    {
      tema: 'Pruebas',
      referencia:
        'İnan, E. (2022). <em>What is Unit Testing? - HardwareAndro</em>.',
      tipo: 'Texto',
      link:
        'https://medium.com/hardwareandro/what-is-unit-testing-435e8134b16e',
    },
    {
      tema: '<i>Rational Test</i>',
      referencia:
        'Galani, L. (2022). <em>Best practices for test automation - assert(QA)</em>.',
      tipo: 'Artículo',
      link:
        'https://medium.com/assertqualityassurance/best-practices-for-test-automation-536e7a94ded4',
    },
    {
      tema: '<i>Rational Test</i>',
      referencia:
        'Weidner, F. A. G. (2022, 5). <em>Unit Testing with JUnit and Mockito - Ana Flávia G Weidner</em>.',
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
      referencia: 'IBM. (2022).',
      link: 'https://www.ibm.com/',
    },
    {
      referencia:
        'López Echeverry, <em>et al</em>. (2008). Introducción a la calidad de software. <em>Scientia Et Technica, 2</em>(39).',
      link: 'https://doi.org/10.22517/23447214.3241',
    },
    {
      referencia:
        'Mascheroni, M. A. (2012). <em>Calidad de software e ingeniería de usabilidad</em>.',
      link:
        'https://utncomunicacionprofesional.files.wordpress.com/2012/04/ingenieria-de-sitios-web.pdf',
    },
    {
      referencia:
        'Pressman. (2006). <em>Ingeniería de software, un enfoque práctico</em>, 5ª. Edición. Editorial Pressman.',
      link: '',
    },
    {
      referencia:
        'Tsui .(2022). <em>Essential of Software Engineering</em>, 5a. edición. JB Learning.',
    },
    {
      referencia: 'Torcivia, M. (2020). <em>Shift-left-Testing</em>. Medium.',
      link: 'https://medium.com/globant/shift-left-testing-c838521617b0',
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
