import { type Dictionary } from "intlayer";

const companyHistoryContent = {
  key: "companyHistory",
  content: {
    en: {
      title: "Our Journey",
      description: "A timeline of our company's growth and achievements",
      history: [
        {
          year: 2008,
          event: "Arab Corporation was established as an MEP contractor in the market.",
          description: "Arab Corporation entered the market as a Mechanical, Electrical, and Plumbing contractor, focusing on delivering high-quality engineering solutions."
        },
        {
          year: 2015,
          event: "Power Technology was launched to specialize in motor control centers (MCC) and distribution panels (DPs).",
          description: "The launch of Power Technology expanded the company's capabilities into motor control centers and distribution panels, enhancing its electrical distribution and automation services."
        },
        {
          year: 2016,
          event: "EITS Control was founded as a system integrator for Building Management Systems (BMS) and automation solutions.",
          description: "EITS Control's establishment marked the company's foray into smart building solutions, offering integrated systems for building management and automation."
        },
        {
          year: 2018,
          event: "Became a registered BMS Partner with Honeywell and an indirect panel builder for Schneider Electric through MAS Electric with an initial contract value of EGP 500K.",
          description: "Achieved partnerships with industry leaders Honeywell and Schneider Electric, securing an initial contract worth EGP 500K through MAS Electric."
        },
        {
          year: 2020,
          event: "Achieved Honeywell Gold Partner status, upgraded the indirect Schneider Electric Panel Builder contract to EGP 1M, and signed a joint venture with an authorized panel builder for ABB.",
          description: "Elevated to Honeywell Gold Partner status, expanded the Schneider Electric contract to EGP 1M, and formed a joint venture with an authorized ABB panel builder, diversifying the company's partnerships."
        },
        {
          year: 2022,
          event: "Upgraded to Honeywell Platinum Partner status and expanded the Schneider Electric Panel Builder contract to EGP 5M.",
          description: "Reached Honeywell Platinum Partner status and significantly increased the Schneider Electric contract to EGP 5M, reinforcing the company's industry presence."
        },
        {
          year: 2023,
          event: "Moved to the new EITS headquarters and manufacturing facility in Obour City.",
          description: "Relocated to a new headquarters and manufacturing facility in Obour City, enhancing operational efficiency and production capacity."
        },
        {
          year: 2024,
          event: "Celebrated a milestone of 120+ employees under the company umbrella.",
          description: "Achieved a significant milestone with a workforce exceeding 120 employees, reflecting the company's growth and commitment to excellence."
        },
        {
          year: 2025,
          event: "Became an Authorized Approved partner for SIEMENS Low Voltage Products & Control Products",
          description: "Etis is an Authorized Approved partner for SIEMENS Low Voltage Products & Control Products, who has the right to use and sell Siemens products inside 3rd Party or Own Design switchgears."
        }
      ]
    },
    ar: {
      title: "رحلتنا",
      description: "خط زمني لنمو وإنجازات شركتنا",
      history: [
        {
          year: 2008,
          event: "تم تأسيس شركة العرب كمتعهد MEP في السوق.",
          description: "دخلت شركة العرب السوق كمتعهد ميكانيكي وكهربائي وسباكة، مع التركيز على تقديم حلول هندسية عالية الجودة."
        },
        {
          year: 2015,
          event: "تم إطلاق شركة باور تكنولوجي متخصصة في مراكز التحكم في المحركات (MCC) ولوحات التوزيع (DPs).",
          description: "وسع إطلاق شركة باور تكنولوجي قدرات الشركة في مراكز التحكم في المحركات ولوحات التوزيع، مما عزز خدمات التوزيع الكهربائي والأتمتة."
        },
        {
          year: 2016,
          event: "تم تأسيس شركة EITS كنظام متكامل لأنظمة إدارة المباني (BMS) وحلول الأتمتة.",
          description: "مثل تأسيس EITS دخول الشركة في حلول المباني الذكية، حيث تقدم أنظمة متكاملة لإدارة المباني والأتمتة."
        },
        {
          year: 2018,
          event: "أصبحنا شريك BMS مسجل مع هانيويل وموزع غير مباشر لشركة شنايدر إلكتريك من خلال MAS Electric بقيمة عقد أولية 500 ألف جنيه مصري.",
          description: "حققت شراكات مع رواد الصناعة هانيويل وشنايدر إلكتريك، مع ضمان عقد أولي بقيمة 500 ألف جنيه مصري من خلال MAS Electric."
        },
        {
          year: 2020,
          event: "حققنا وضع شريك ذهبي مع هانيويل، ورفعنا عقد شنايدر إلكتريك إلى مليون جنيه مصري، ووقعنا مشروعاً مشتركاً مع موزع معتمد لـ ABB.",
          description: "ارتقينا إلى وضع شريك ذهبي مع هانيويل، ووسعنا عقد شنايدر إلكتريك إلى مليون جنيه مصري، وشكلنا مشروعاً مشتركاً مع موزع معتمد لـ ABB، مما وسع شراكات الشركة."
        },
        {
          year: 2022,
          event: "ارتقينا إلى وضع شريك بلاتينيوم مع هانيويل ووسعنا عقد شنايدر إلكتريك إلى 5 ملايين جنيه مصري.",
          description: "وصلنا إلى وضع شريك بلاتينيوم مع هانيويل وزادنا بشكل كبير عقد شنايدر إلكتريك إلى 5 ملايين جنيه مصري، مما عزز وجود الشركة في الصناعة."
        },
        {
          year: 2023,
          event: "انتقلنا إلى المقر الرئيسي الجديد لـ EITS ومنشأة التصنيع في مدينة العبور.",
          description: "انتقلنا إلى مقر رئيسي جديد ومنشأة تصنيع في مدينة العبور، مما عزز الكفاءة التشغيلية وقدرة الإنتاج."
        },
        {
          year: 2024,
          event: "احتفلنا بوصول عدد الموظفين إلى أكثر من 120 موظف تحت مظلة الشركة.",
          description: "حققت إنجازاً كبيراً مع قوة عاملة تتجاوز 120 موظف، مما يعكس نمو الشركة والتزامها بالتميز."
        },
        {
          year: 2025,
          event: "أصبحنا شريكاً معتمداً لمنتجات سيمنز للجهد المنخفض ومنتجات التحكم",
          description: "إيتس هي شريك معتمد لمنتجات سيمنز للجهد المنخفض ومنتجات التحكم، ولها الحق في استخدام وبيع منتجات سيمنز داخل لوحات التوزيع الخاصة أو التصميمات الخارجية."
        }
      ]
    },
    fr: {
      title: "Notre Parcours",
      description: "Une chronologie de la croissance et des réalisations de notre entreprise",
      history: [
        {
          year: 2008,
          event: "Arab Corporation a été créée en tant qu'entrepreneur MEP sur le marché.",
          description: "Arab Corporation est entrée sur le marché en tant qu'entrepreneur en mécanique, électricité et plomberie, se concentrant sur la fourniture de solutions d'ingénierie de haute qualité."
        },
        {
          year: 2015,
          event: "Power Technology a été lancée pour se spécialiser dans les centres de contrôle moteur (MCC) et les tableaux de distribution (DPs).",
          description: "Le lancement de Power Technology a élargi les capacités de l'entreprise dans les centres de contrôle moteur et les tableaux de distribution, renforçant ses services de distribution électrique et d'automatisation."
        },
        {
          year: 2016,
          event: "EITS Control a été fondée en tant qu'intégrateur de systèmes pour les systèmes de gestion de bâtiments (BMS) et les solutions d'automatisation.",
          description: "La création d'EITS Control a marqué l'entrée de l'entreprise dans les solutions de bâtiments intelligents, offrant des systèmes intégrés pour la gestion et l'automatisation des bâtiments."
        },
        {
          year: 2018,
          event: "Devenu partenaire BMS enregistré avec Honeywell et constructeur de tableaux indirect pour Schneider Electric via MAS Electric avec une valeur de contrat initiale de 500K EGP.",
          description: "A obtenu des partenariats avec les leaders de l'industrie Honeywell et Schneider Electric, sécurisant un contrat initial de 500K EGP via MAS Electric."
        },
        {
          year: 2020,
          event: "Atteint le statut de Partenaire Or Honeywell, amélioré le contrat de constructeur de tableaux Schneider Electric à 1M EGP, et signé une coentreprise avec un constructeur de tableaux autorisé pour ABB.",
          description: "Élevé au statut de Partenaire Or Honeywell, élargi le contrat Schneider Electric à 1M EGP, et formé une coentreprise avec un constructeur de tableaux autorisé ABB, diversifiant les partenariats de l'entreprise."
        },
        {
          year: 2022,
          event: "Passé au statut de Partenaire Platine Honeywell et élargi le contrat de constructeur de tableaux Schneider Electric à 5M EGP.",
          description: "Atteint le statut de Partenaire Platine Honeywell et augmenté significativement le contrat Schneider Electric à 5M EGP, renforçant la présence de l'entreprise dans l'industrie."
        },
        {
          year: 2023,
          event: "Déménagé vers le nouveau siège social EITS et l'installation de fabrication à Obour City.",
          description: "Relocalisé vers un nouveau siège social et une installation de fabrication à Obour City, améliorant l'efficacité opérationnelle et la capacité de production."
        },
        {
          year: 2024,
          event: "Célébré une étape importante avec plus de 120 employés sous l'égide de l'entreprise.",
          description: "Atteint une étape importante avec une main-d'œuvre dépassant 120 employés, reflétant la croissance de l'entreprise et son engagement envers l'excellence."
        },
        {
          year: 2025,
          event: "Devenu partenaire approuvé autorisé pour les produits basse tension et de contrôle SIEMENS",
          description: "Etis est un partenaire approuvé autorisé pour les produits basse tension et de contrôle SIEMENS, ayant le droit d'utiliser et de vendre des produits Siemens dans des armoires de distribution tierces ou de conception propre."
        }
      ]
    },
    es: {
      title: "Nuestro Recorrido",
      description: "Una línea de tiempo del crecimiento y logros de nuestra empresa",
      history: [
        {
          year: 2008,
          event: "Arab Corporation se estableció como contratista MEP en el mercado.",
          description: "Arab Corporation entró en el mercado como contratista mecánico, eléctrico y de plomería, enfocándose en la entrega de soluciones de ingeniería de alta calidad."
        },
        {
          year: 2015,
          event: "Se lanzó Power Technology para especializarse en centros de control de motores (MCC) y paneles de distribución (DPs).",
          description: "El lanzamiento de Power Technology expandió las capacidades de la empresa en centros de control de motores y paneles de distribución, mejorando sus servicios de distribución eléctrica y automatización."
        },
        {
          year: 2016,
          event: "Se fundó EITS Control como integrador de sistemas para Sistemas de Gestión de Edificios (BMS) y soluciones de automatización.",
          description: "La fundación de EITS Control marcó la incursión de la empresa en soluciones de edificios inteligentes, ofreciendo sistemas integrados para la gestión y automatización de edificios."
        },
        {
          year: 2018,
          event: "Se convirtió en Socio BMS registrado con Honeywell y fabricante de paneles indirecto para Schneider Electric a través de MAS Electric con un valor de contrato inicial de 500K EGP.",
          description: "Logró alianzas con líderes de la industria Honeywell y Schneider Electric, asegurando un contrato inicial de 500K EGP a través de MAS Electric."
        },
        {
          year: 2020,
          event: "Alcanzó el estatus de Socio Oro de Honeywell, mejoró el contrato de fabricante de paneles de Schneider Electric a 1M EGP, y firmó una empresa conjunta con un fabricante de paneles autorizado para ABB.",
          description: "Elevado al estatus de Socio Oro de Honeywell, expandido el contrato de Schneider Electric a 1M EGP, y formada una empresa conjunta con un fabricante de paneles autorizado de ABB, diversificando las alianzas de la empresa."
        },
        {
          year: 2022,
          event: "Ascendido a Socio Platino de Honeywell y expandido el contrato de fabricante de paneles de Schneider Electric a 5M EGP.",
          description: "Alcanzado el estatus de Socio Platino de Honeywell y aumentado significativamente el contrato de Schneider Electric a 5M EGP, reforzando la presencia de la empresa en la industria."
        },
        {
          year: 2023,
          event: "Trasladado a la nueva sede corporativa de EITS y la instalación de fabricación en Ciudad Obour.",
          description: "Relocalizado a una nueva sede corporativa e instalación de fabricación en Ciudad Obour, mejorando la eficiencia operativa y la capacidad de producción."
        },
        {
          year: 2024,
          event: "Celebrado un hito de más de 120 empleados bajo el paraguas de la empresa.",
          description: "Alcanzado un hito significativo con una fuerza laboral que supera los 120 empleados, reflejando el crecimiento de la empresa y su compromiso con la excelencia."
        },
        {
          year: 2025,
          event: "Convertido en socio aprobado autorizado para productos de baja tensión y control de SIEMENS",
          description: "Etis es un socio aprobado autorizado para productos de baja tensión y control de SIEMENS, con derecho a usar y vender productos Siemens dentro de armarios de distribución de terceros o de diseño propio."
        }
      ]
    },
    de: {
      title: "Unsere Reise",
      description: "Eine Zeitleiste unseres Unternehmenswachstums und unserer Erfolge",
      history: [
        {
          year: 2008,
          event: "Arab Corporation wurde als MEP-Auftragnehmer auf dem Markt gegründet.",
          description: "Arab Corporation trat als mechanischer, elektrischer und sanitäter Auftragnehmer in den Markt ein und konzentrierte sich auf hochwertige Ingenieurlösungen."
        },
        {
          year: 2015,
          event: "Power Technology wurde gegründet, um sich auf Motorsteuerungszentren (MCC) und Verteilungsanlagen (DPs) zu spezialisieren.",
          description: "Die Gründung von Power Technology erweiterte die Fähigkeiten des Unternehmens in Motorsteuerungszentren und Verteilungsanlagen und verbesserte seine elektrischen Verteilungs- und Automatisierungsdienste."
        },
        {
          year: 2016,
          event: "EITS Control wurde als Systemintegrator für Gebäudemanagementsysteme (BMS) und Automatisierungslösungen gegründet.",
          description: "Die Gründung von EITS Control markierte den Einstieg des Unternehmens in intelligente Gebäudelösungen mit integrierten Systemen für Gebäudemanagement und Automatisierung."
        },
        {
          year: 2018,
          event: "Wurde registrierter BMS-Partner von Honeywell und indirekter Schaltschrankhersteller für Schneider Electric über MAS Electric mit einem anfänglichen Vertragswert von 500K EGP.",
          description: "Erzielte Partnerschaften mit Branchenführern Honeywell und Schneider Electric und sicherte einen anfänglichen Vertrag im Wert von 500K EGP über MAS Electric."
        },
        {
          year: 2020,
          event: "Erreichte den Honeywell Gold Partner-Status, verbesserte den Schneider Electric Schaltschrankhersteller-Vertrag auf 1M EGP und unterzeichnete ein Joint Venture mit einem autorisierten ABB-Schaltschrankhersteller.",
          description: "Erhielt den Honeywell Gold Partner-Status, erweiterte den Schneider Electric-Vertrag auf 1M EGP und bildete ein Joint Venture mit einem autorisierten ABB-Schaltschrankhersteller, was die Partnerschaften des Unternehmens diversifizierte."
        },
        {
          year: 2022,
          event: "Aufgestiegen zum Honeywell Platinum Partner-Status und erweitert den Schneider Electric Schaltschrankhersteller-Vertrag auf 5M EGP.",
          description: "Erreichte den Honeywell Platinum Partner-Status und erhöhte den Schneider Electric-Vertrag signifikant auf 5M EGP, was die Präsenz des Unternehmens in der Branche stärkte."
        },
        {
          year: 2023,
          event: "Umzug zum neuen EITS-Hauptsitz und zur Fertigungsstätte in Obour City.",
          description: "Verlagerte sich zu einem neuen Hauptsitz und einer Fertigungsstätte in Obour City, was die betriebliche Effizienz und Produktionskapazität verbesserte."
        },
        {
          year: 2024,
          event: "Feierte einen Meilenstein von über 120 Mitarbeitern unter dem Unternehmensdach.",
          description: "Erreichte einen bedeutenden Meilenstein mit einer Belegschaft von über 120 Mitarbeitern, was das Wachstum des Unternehmens und sein Engagement für Exzellenz widerspiegelt."
        },
        {
          year: 2025,
          event: "Wurde autorisierter Partner für SIEMENS Niederspannungsprodukte und Steuerungsprodukte",
          description: "Etis ist ein autorisierter Partner für SIEMENS Niederspannungsprodukte und Steuerungsprodukte, der das Recht hat, Siemens-Produkte in Schaltschränken von Drittanbietern oder Eigenkonstruktionen zu verwenden und zu verkaufen."
        }
      ]
    },
    zh: {
      title: "我们的历程",
      description: "我们公司发展和成就的时间线",
      history: [
        {
          year: 2008,
          event: "Arab Corporation作为MEP承包商进入市场。",
          description: "Arab Corporation作为机械、电气和管道承包商进入市场，专注于提供高质量的工程解决方案。"
        },
        {
          year: 2015,
          event: "Power Technology成立，专注于电机控制中心(MCC)和配电盘(DPs)。",
          description: "Power Technology的成立扩展了公司在电机控制中心和配电盘方面的能力，增强了其电气配电和自动化服务。"
        },
        {
          year: 2016,
          event: "EITS Control成立，作为楼宇管理系统(BMS)和自动化解决方案的系统集成商。",
          description: "EITS Control的成立标志着公司进入智能建筑解决方案领域，提供集成的楼宇管理和自动化系统。"
        },
        {
          year: 2018,
          event: "成为霍尼韦尔注册BMS合作伙伴，并通过MAS Electric成为施耐德电气的间接面板制造商，初始合同价值50万埃及镑。",
          description: "与行业领导者霍尼韦尔和施耐德电气建立合作伙伴关系，通过MAS Electric获得50万埃及镑的初始合同。"
        },
        {
          year: 2020,
          event: "获得霍尼韦尔金牌合作伙伴地位，将施耐德电气面板制造商合同提升至100万埃及镑，并与ABB授权面板制造商签署合资协议。",
          description: "提升为霍尼韦尔金牌合作伙伴，将施耐德电气合同扩展至100万埃及镑，并与ABB授权面板制造商组建合资企业，实现公司合作伙伴关系的多元化。"
        },
        {
          year: 2022,
          event: "晋升为霍尼韦尔白金合作伙伴，并将施耐德电气面板制造商合同扩展至500万埃及镑。",
          description: "达到霍尼韦尔白金合作伙伴地位，并将施耐德电气合同大幅增加至500万埃及镑，加强了公司在行业中的影响力。"
        },
        {
          year: 2023,
          event: "迁至位于奥布尔市的新EITS总部和制造工厂。",
          description: "搬迁至奥布尔市的新总部和制造工厂，提高了运营效率和生产能力。"
        },
        {
          year: 2024,
          event: "庆祝公司员工人数突破120人的里程碑。",
          description: "实现重要里程碑，员工人数超过120人，反映了公司的增长和对卓越的承诺。"
        },
        {
          year: 2025,
          event: "成为西门子低压产品和控制产品的授权合作伙伴",
          description: "Etis是西门子低压产品和控制产品的授权合作伙伴，有权在第三方或自主设计的开关柜中使用和销售西门子产品。"
        }
      ]
    }
  }
} satisfies Dictionary;

export default companyHistoryContent; 