export default {
  global: {
    componenteFormativo: 'El cerebro de las máquinas',
    descripcionCurso:
      'En la búsqueda de hacer que las máquinas puedan operar de manera autónoma y sean capaces de realizar actividades cada vez más complejas se ha logrado mediante la incorporación de sistemas y mecanismos robotizados, que deben ser configurados para que la máquina ejecute las instrucciones impartidas por la unidad central de procesamiento (CPU). A esta unidad se denomina “el cerebro de la máquina” y de su programación depende el funcionamiento y operación de esta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Higiene y seguridad industrial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Riesgo laboral y normatividad en salud y seguridad en el trabajo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Medio ambiente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Automatización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Operación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mando',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
  referencias: [
    {
      referencia:
        'Daneri, P.  (2009). PLC: automatización y control industrial. Editorial Hispanoamérica HASA.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/66558?page=1',
    },
    {
      referencia:
        'Dempro. (s.f.). Sensores industriales para la automatización de fábrica.',
      link: 'https://www.dempro.co/pepperl-fuchs',
    },
    {
      referencia:
        'Escalona, I. (2007). Transductores y sensores en la automatización industrial. El Cid Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/34463?page=1',
    },
    {
      referencia:
        'Gea, E. (2017). Seguridad y salud en el trabajo. Editorial de la Pontificia Universidad Católica del Ecuador.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/125562?page=1',
    },
    {
      referencia: 'Ingeniería ISA. (2009). Lógica cableada.',
      link: 'https://es.slideshare.net/federicoblanco2009/02-logica-cableada',
    },
    {
      referencia:
        'Izaguirre, E. (2012). Sistemas de automatización. Editorial Feijóo.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124330?page=1 ',
    },
    {
      referencia:
        'Medina, J. (2015). La automatización en la industria química. Universitat Politècnica de Catalunya.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/61458?page=1',
    },
    {
      referencia:
        'Tecnos, E. (2015). Legislación sobre seguridad y salud en el trabajo. (17a. ed.). Difusora Larousse - Editorial Tecnos.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/46812?page=1',
    },
    {
      referencia: 'Tumero, P. (s.f.). Comparador A - MSP430F149.',
    },
  ],
  glosario: [
    {
      termino: 'Autómata',
      significado:
        'máquina automática programable capaz de realizar determinadas operaciones de manera autónoma y sustituir a los seres humanos en algunas tareas, en especial las pesadas, repetitivas o peligrosas; puede estar dotada de sensores, que le permiten adaptarse a nuevas situaciones.',
    },
    {
      termino: 'Industria',
      significado:
        'actividad económica y técnica que consiste en transformar las materias primas hasta convertirlas en productos adecuados para satisfacer las necesidades del hombre.',
    },
    {
      termino: 'Mando',
      significado:
        'botón o dispositivo que sirve para controlar el funcionamiento de un aparato o una máquina.',
    },
    {
      termino: 'Operar',
      significado:
        'Producir con una acción para obtener un determinado resultado.',
    },
  ],
  complementario: [
    {
      texto:
        'Izaguirre, E. (2012). Sistemas de automatización. Santa Clara, Editorial Feijóo.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124330',
    },
    {
      texto:
        'Gea, E. (2017). Seguridad y salud en el trabajo. Centro de publicaciones.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/125562?page=18',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Hernando José Góngora Valencia',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Industrial - Regional Valle del Cauca',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: '--',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
