export interface Artist {
  id: string;
  name: string;
  slug: string;
  genre: string;
  description: string;
  image: string;
  video?: string;
  socialMedia: {
    instagram?: string | string[];
    youtube?: string;
    spotify?: string;
  };
  showTime?: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "La Quijada",
    slug: "la-quijada",
    genre: "Folclore",
    description:
      "La Quijada es un grupo de jóvenes músicos que mantienen viva la esencia del folclore argentino con un estilo fresco y auténtico. Unidos por la pasión por nuestras raíces, llevan al escenario zambas, chacareras y otros ritmos tradicionales, combinando respeto por la tradición con la energía de una nueva generación. Su música busca conectar al público con la identidad cultural de nuestro país, transformando cada presentación en un encuentro de emociones, canto y celebración.",
    image: "/images/artists/la-quijada.webp",
    video: "https://www.youtube.com/embed/tp0X36pqIE8",
    socialMedia: {
      instagram: "la.quijada",
    },
  },
  // {
  //   id: "2",
  //   name: "Las Etcheberry",
  //   slug: "las-etcheberry",
  //   genre: "Folclore",
  //   description:
  //     "Las Etcheberry son un dúo de folclore argentino integrado por las Mellis Nachi y Ampi Etcheberry. Con guitarra y voz, reviven clásicos de nuestro cancionero popular con una frescura única, transmitiendo emoción y autenticidad en cada interpretación. Su propuesta combina la tradición del folclore con la calidez de un estilo íntimo y cercano, logrando conectar tanto con el público en vivo como con la creciente comunidad que las acompaña en redes sociales. Cada presentación de Las Etcheberry es una invitación a compartir la música, las raíces y la pasión por nuestra cultura.",
  //   image: "/images/artists/las-etcheberry.webp",
  //   video: "https://www.youtube.com/embed/ONsVykiB5No",
  //   socialMedia: {
  //     instagram: "lasetcheberry",
  //   },
  // },
  {
    id: "3",
    name: "Juanchy Osuna",
    slug: "juanchy-osuna",
    genre: "Folclore",
    description:
      "Juanchy Osuna es un joven cantautor argentino que lleva en su voz y en su guitarra la esencia del folclore nacional. Nacido en Buenos Aires e inspirado por las raíces litoraleñas, comenzó su camino artístico en agrupaciones como Los Hermanitos Giménez y Tulma, para luego abrirse paso con su carrera solista. Con un estilo fresco y auténtico, interpreta tanto clásicos del cancionero popular como composiciones propias, transmitiendo emoción y respeto por la tradición. Su primer espectáculo como solista, “Mi Voz”, marcó el inicio de una etapa donde comparte escenario con referentes y da vida a un proyecto que busca acercar el folclore a nuevas generaciones. Su presencia en ciclos como Folclore en Casa y Raíz Litoral refleja su compromiso con mantener viva y en movimiento la cultura argentina.",
    image: "/images/artists/juanchy-osuna.webp",
    video: "https://www.youtube.com/embed/kMr5rgwxJoM",
    socialMedia: {
      instagram: "juanchyosunaok",
    },
  },
  {
    id: "4",
    name: "Lucho Ciganda",
    slug: "lucho-ciganda",
    genre: "Folclore",
    description:
      "Lucho Ciganda es un joven cantante argentino que viene dejando su huella en la música popular y el folclore nacional. Su talento lo llevó a ganar el Certamen Pre Cosquín 2022 en la categoría Solista Vocal, obteniendo así un lugar en el prestigioso Festival de Cosquín, la máxima vidriera del género. Con una voz potente y llena de matices, Lucho transmite en cada interpretación la fuerza de la tradición junto con la frescura de una nueva generación de artistas. Su recorrido incluye presentaciones en escenarios reconocidos y la participación en el ciclo televisivo Elegidos, donde fue elogiado por referentes como Axel, Soledad Pastorutti, Los Miranda y José Luis Rodríguez “El Puma”. Hoy, Lucho continúa consolidando su carrera solista, llevando el folclore argentino a más públicos y reafirmando su compromiso con la música que lo apasiona.",
    image: "/images/artists/lucho-ciganda.webp",
    video: "https://www.youtube.com/embed/KRokgV5p80c?si=8V9ZEhvhmxUw1b_Q",
    socialMedia: {
      instagram: "lucianociganda",
    },
  },
  {
    id: "5",
    name: "PorTres Folcklore ",
    slug: "portres",
    genre: "Folclore",
    description:
      "PorTres Folklore es un conjunto vocal nacido en 2018 en Roberts, partido de Lincoln, Buenos Aires, integrado por Nicolás Ferreyra y los hermanos Gastón, Nicolás y Agustín Ibañez. Con una propuesta fresca y arraigada en nuestras raíces, el grupo interpreta zambas, chacareras, triunfos, milongas y huellas, destacándose por la fuerza y calidez de sus armonías vocales. Su talento los llevó a importantes escenarios del país, siendo Revelación del Festival de Baradero 2020 y obteniendo una Mención Especial en los Espectáculos Callejeros de Cosquín 2023. Con su primer disco Encuentro (2019) y un nuevo material en camino, PorTres Folklore continúa consolidándose como una de las voces jóvenes que mantienen viva la tradición, llevando el folclore argentino a nuevas generaciones.",
    image: "/images/artists/portres.webp",
    video: "https://www.youtube.com/embed/uIV9_2V1Lt4?si=dnwHhePpLA5S0EL4",
    socialMedia: {
      instagram: "portresfolck",
    },
  },
  {
    id: "6",
    name: "Runamacha",
    slug: "runamacha",
    genre: "Folclore",
    description:
      "Runamacha es una banda de folclore argentino que nace con la misión de mantener vivas nuestras raíces y llevarlas a nuevas generaciones. Con un repertorio que recorre zambas, chacareras y otros ritmos tradicionales, la agrupación fusiona el respeto por la música de nuestros ancestros con la frescura de un estilo propio y actual. Cada presentación es una invitación a compartir la identidad cultural argentina a través del canto, la danza y la emoción del folclore.",
    image: "/images/artists/runamacha.webp",
    video: "https://www.youtube.com/embed/nlyw7rsjlDA",
    socialMedia: {
      instagram: "runamacha",
    },
  },
  // {
  //   id: "7",
  //   name: "Rodrigo Figueroa",
  //   slug: "rodrigo-figueroa",
  //   genre: "Folclore",
  //   description:
  //     "Rodrigo Figueroa desde Miguel Riglos, La Pampa, les trae nuestra música desde el centro del país con ganas de verlos bailar, interpretará varios estilos dentro de nuestro cancionero de folklore bien argentino que nos identifica.",
  //   image: "/images/artists/rodrigo-figueroa.webp",
  //   video: "https://www.youtube.com/embed/cfDci0k0ukg?si=XA3AcuFtSApRl4DH",
  //   socialMedia: {},
  // },
  {
    id: "8",
    name: "Seres",
    slug: "seres",
    genre: "Folclore",
    description:
      "Seres es un conjunto musical nacido en 2016, inicialmente llamado 3 Seres por sus tres integrantes originales, pero que adoptó su nombre actual al ir variando la formación. El grupo se define como “seres musicales”, con la misión de aportar al mundo su propia nota en el gran pentagrama de la vida. Tras varios cambios de integrantes y experiencias previas, hoy se reúnen con un compromiso renovado, transformando lo que antes era un sueño en una misión compartida de crear y compartir música con propósito.",
    image: "/images/artists/seres.webp",
    video: "https://www.youtube.com/embed/jB_BF9OmPzc",
    socialMedia: {
      instagram: "seres.musicapopular",
    },
  },
  {
    id: "9",
    name: "Huayra Muyoj",
    slug: "huayra-muyoj",
    genre: "Grupo de danza folclórica",
    description:
      "El Huayra Mujol es una escuela de danzas folclóricas de la localidad de Roberts que nace con el propósito de mantener vivas nuestras tradiciones y transmitirlas a las nuevas generaciones. Con pasión, dedicación y un fuerte sentido de comunidad, forma bailarines y bailarinas que se expresan a través de chacareras, zambas, gatos, escondidos y otros ritmos que son parte de la identidad cultural argentina. Más que un espacio de formación, El Huayra Mujol es un punto de encuentro donde se celebran nuestras raíces, se fortalecen los lazos comunitarios y se comparte el amor por el folclore en cada presentación, dentro y fuera del pueblo.",
    image: "/images/artists/huayra-muyoj.webp",
    socialMedia: {},
  },
  {
    id: "10",
    name: "Lautaro Calvimonte - Gustty Pérez",
    slug: "lautaro-calvimonte-gustty-perez",
    genre: "Malambo",
    description:
      "Lautaro Calvimonte y Gusty Pérez son dos talentosos bailarines argentinos que forman parte de Malevo, la reconocida compañía de malambo que ha conquistado escenarios de todo el mundo. Con un estilo que combina la fuerza del folclore tradicional y la energía de la danza contemporánea, ambos artistas representan a la nueva generación que lleva la cultura argentina más allá de nuestras fronteras. Su paso por escenarios internacionales junto a Malevo, embajadores del malambo argentino, les permitió compartir su arte en giras por América, Europa y Asia, siendo ovacionados por públicos diversos. Lautaro y Gusty se destacan por su disciplina, potencia y compromiso con el baile, convirtiéndose en referentes jóvenes que mantienen viva la tradición mientras la proyectan hacia nuevas audiencias globales.",
    image: "/images/artists/lautaro-calvimonte-gustty-perez.webp",
    video: "https://www.youtube.com/embed/h4ysPnOIH9k",
    socialMedia: {
      instagram: ["lautarocalvimonte", "gustty_perez"],
    },
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function getAllArtists(): Artist[] {
  return artists;
}
