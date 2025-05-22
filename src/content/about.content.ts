import { type Dictionary } from "intlayer";

const aboutContent = {
  key: "about",
  content: {
    en: {
      title: 'About',
      subtitle: 'Who We Are',
      description: 'Learn more about our company and our mission',
      companyTitle: 'Our Company',
      companySubtitle: 'Innovating Today for a Smarter, Sustainable Tomorrow',
      companyDescription: 'EITS has established strategic partnerships with world-leading developers and manufacturers of both software (front-end supervisory systems) and hardware (including sensors, control valves, actuators, water valves, strainers, and more). In addition to a comprehensive range of products, these collaborations empower us to meet any requirement in building automation, regardless of complexity. Our deep knowledge, extensive experience, and continuous awareness of developments in the field enable us to deliver complete and tailored solutions for every need.',
      globalPresence: 'EITS Automation Control continues to expand its footprint across Egypt, Dubai, and the UK. With prestigious recognitions such as being a Platinum and Gold Partner for Honeywell Alerton BMS in Egypt and Dubai, our strategic visit to Sontay\'s headquarters in the UK, and active participation in key events like the Schneider Electric forum at Baron Hotel — we proudly demonstrate our commitment to innovation, strong international partnerships, and leadership in automation and control solutions.',
      mission: {
        title: 'Our Mission',
        description: 'To provide innovative technical solutions that empower businesses and individuals'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading provider of technical solutions in the energy sector'
      }
    },
    ar: {
      title: "",
      subtitle: 'تعرف علينا',
      description: 'اعرف المزيد عن شركتنا ومهمتنا',
      companyTitle: 'شركتنا',
      companySubtitle: 'نبتكر اليوم لغد أذكى وأكثر استدامة',
      companyDescription: 'قامت شركة EITS بتأسيس شراكات استراتيجية مع كبرى الشركات العالمية المطورة والمنتجة للبرمجيات (أنظمة الإشراف الأمامية) والأجهزة (بما في ذلك أجهزة الاستشعار، وصمامات التحكم، والمحركات، وصمامات المياه، والمرشحات، وغيرها). بالإضافة إلى مجموعة شاملة من المنتجات، تمكننا هذه التعاونات من تلبية أي متطلبات في أتمتة المباني، بغض النظر عن التعقيد. معرفتنا العميقة وخبرتنا الواسعة وإدراكنا المستمر للتطورات في هذا المجال تمكننا من تقديم حلول كاملة ومخصصة لكل احتياج.',
      globalPresence: 'تواصل شركة EITS للتحكم الآلي توسعها في مصر ودبي والمملكة المتحدة. مع اعترافات مرموقة مثل كوننا شريك بلاتيني وذهبي لـ Honeywell Alerton BMS في مصر ودبي، وزيارتنا الاستراتيجية لمقر Sontay في المملكة المتحدة، والمشاركة النشطة في الفعاليات الرئيسية مثل منتدى Schneider Electric في فندق Baron — نعرض بفخر التزامنا بالابتكار والشراكات الدولية القوية والريادة في حلول الأتمتة والتحكم.',
      mission: {
        title: 'مهمتنا',
        description: 'تقديم حلول تقنية مبتكرة تمكّن الشركات والأفراد'
      },
      vision: {
        title: 'رؤيتنا',
        description: 'أن نكون المزود الرائد للحلول التقنية في قطاع الطاقة'
      }
    },
    fr: {
      title: 'À Propos',
      subtitle: 'Qui Sommes-Nous',
      description: 'En savoir plus sur notre entreprise et notre mission',
      companyTitle: 'Notre Entreprise',
      companySubtitle: 'Innover Aujourd\'hui pour un Demain Plus Intelligent et Durable',
      companyDescription: 'EITS a établi des partenariats stratégiques avec des développeurs et fabricants leaders mondiaux de logiciels (systèmes de supervision front-end) et de matériel (y compris des capteurs, des vannes de contrôle, des actionneurs, des vannes d\'eau, des filtres, etc.). En plus d\'une gamme complète de produits, ces collaborations nous permettent de répondre à toute exigence en matière d\'automatisation des bâtiments, quelle que soit sa complexité. Notre connaissance approfondie, notre vaste expérience et notre conscience continue des développements dans le domaine nous permettent de fournir des solutions complètes et adaptées à chaque besoin.',
      globalPresence: 'EITS Automation Control continue d\'étendre sa présence en Égypte, à Dubaï et au Royaume-Uni. Avec des reconnaissances prestigieuses telles que notre statut de partenaire Platine et Or pour Honeywell Alerton BMS en Égypte et à Dubaï, notre visite stratégique au siège de Sontay au Royaume-Uni, et notre participation active à des événements clés comme le forum Schneider Electric à l\'hôtel Baron — nous démontrons fièrement notre engagement envers l\'innovation, des partenariats internationaux solides et le leadership dans les solutions d\'automatisation et de contrôle.',
      mission: {
        title: 'Notre Mission',
        description: 'Fournir des solutions techniques innovantes qui donnent du pouvoir aux entreprises et aux particuliers'
      },
      vision: {
        title: 'Notre Vision',
        description: 'Être le fournisseur leader de solutions techniques dans le secteur de l\'énergie'
      }
    },
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Quiénes Somos',
      description: 'Conozca más sobre nuestra empresa y nuestra misión',
      companyTitle: 'Nuestra Empresa',
      companySubtitle: 'Innovando Hoy para un Mañana Más Inteligente y Sostenible',
      companyDescription: 'EITS ha establecido asociaciones estratégicas con desarrolladores y fabricantes líderes mundiales de software (sistemas de supervisión front-end) y hardware (incluyendo sensores, válvulas de control, actuadores, válvulas de agua, filtros, y más). Además de una gama completa de productos, estas colaboraciones nos permiten satisfacer cualquier requisito en automatización de edificios, independientemente de su complejidad. Nuestro profundo conocimiento, amplia experiencia y conciencia continua de los desarrollos en el campo nos permiten entregar soluciones completas y personalizadas para cada necesidad.',
      globalPresence: 'EITS Automation Control continúa expandiendo su presencia en Egipto, Dubái y el Reino Unido. Con reconocimientos prestigiosos como ser Socio Platino y Oro de Honeywell Alerton BMS en Egipto y Dubái, nuestra visita estratégica a la sede de Sontay en el Reino Unido, y la participación activa en eventos clave como el foro de Schneider Electric en el Hotel Baron — demostramos con orgullo nuestro compromiso con la innovación, fuertes alianzas internacionales y liderazgo en soluciones de automatización y control.',
      mission: {
        title: 'Nuestra Misión',
        description: 'Proporcionar soluciones técnicas innovadoras que empoderen a empresas e individuos'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser el proveedor líder de soluciones técnicas en el sector energético'
      }
    }
  }
} satisfies Dictionary;

export default aboutContent;
