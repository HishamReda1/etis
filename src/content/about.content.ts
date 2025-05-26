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
    },
    de: {
      title: 'Über Uns',
      subtitle: 'Wer Wir Sind',
      description: 'Erfahren Sie mehr über unser Unternehmen und unsere Mission',
      companyTitle: 'Unser Unternehmen',
      companySubtitle: 'Innovation Heute für eine Intelligentere, Nachhaltigere Zukunft',
      companyDescription: 'EITS hat strategische Partnerschaften mit weltweit führenden Entwicklern und Herstellern von Software (Front-End-Überwachungssysteme) und Hardware (einschließlich Sensoren, Steuerventile, Aktuatoren, Wasserventile, Filter und mehr) aufgebaut. Neben einer umfassenden Produktpalette ermöglichen uns diese Kooperationen, jegliche Anforderungen an die Gebäudeautomatisierung zu erfüllen, unabhängig von ihrer Komplexität. Unser tiefes Wissen, unsere umfangreiche Erfahrung und unser kontinuierliches Bewusstsein für Entwicklungen in diesem Bereich ermöglichen es uns, vollständige und maßgeschneiderte Lösungen für jeden Bedarf zu liefern.',
      globalPresence: 'EITS Automation Control erweitert kontinuierlich seine Präsenz in Ägypten, Dubai und Großbritannien. Mit prestigeträchtigen Auszeichnungen wie unserer Position als Platin- und Gold-Partner für Honeywell Alerton BMS in Ägypten und Dubai, unserem strategischen Besuch im Hauptsitz von Sontay in Großbritannien und unserer aktiven Teilnahme an wichtigen Veranstaltungen wie dem Schneider Electric Forum im Baron Hotel — demonstrieren wir stolz unser Engagement für Innovation, starke internationale Partnerschaften und Führungsstärke in Automatisierungs- und Steuerungslösungen.',
      mission: {
        title: 'Unsere Mission',
        description: 'Innovative technische Lösungen bereitzustellen, die Unternehmen und Einzelpersonen stärken'
      },
      vision: {
        title: 'Unsere Vision',
        description: 'Der führende Anbieter technischer Lösungen im Energiesektor zu sein'
      }
    },
    zh: {
      title: '关于我们',
      subtitle: '我们是谁',
      description: '了解更多关于我们公司和使命的信息',
      companyTitle: '我们的公司',
      companySubtitle: '今日创新，共创更智能、更可持续的明天',
      companyDescription: 'EITS已与世界领先的软件（前端监控系统）和硬件（包括传感器、控制阀、执行器、水阀、过滤器等）开发商和制造商建立了战略合作伙伴关系。除了全面的产品系列外，这些合作使我们能够满足任何建筑自动化需求，无论其复杂性如何。我们深厚的知识、丰富的经验和对该领域发展的持续关注使我们能够为每个需求提供完整和量身定制的解决方案。',
      globalPresence: 'EITS自动化控制继续扩大其在埃及、迪拜和英国的业务范围。凭借在埃及和迪拜作为霍尼韦尔Alerton BMS的铂金和黄金合作伙伴的声望，我们对英国Sontay总部的战略访问，以及在Baron酒店举行的施耐德电气论坛等重要活动中的积极参与 — 我们自豪地展示了我们对创新、强大的国际合作伙伴关系以及在自动化和控制解决方案领域的领导地位的承诺。',
      mission: {
        title: '我们的使命',
        description: '提供创新的技术解决方案，赋能企业和个人'
      },
      vision: {
        title: '我们的愿景',
        description: '成为能源领域技术解决方案的领先提供商'
      }
    }
  }
} satisfies Dictionary;

export default aboutContent;
