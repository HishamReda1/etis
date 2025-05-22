import { type Dictionary } from "intlayer";

const achievementsContent = {
  key: "achievements",
  content: {
    en: {
      title: "Our Achievements",
      description: "A timeline of our key milestones and recognitions in the industry.",
      sections: {
        revenue: "Annual Revenue",
        kpi: "Key Performance Indicators",
        certificates: "Certificates",
        hospitals: "Hospitals & Care Centers",
        commercial: "Commercial",
        datacenters: "Datacenters",
        pharma: "Pharma",
        religious: "Religious Institutions"
      },
      kpi: {
        title: "ACHIEVED Performance Indicators Over the Last 5 Years",
        items: [
          "Became Honeywell Elite BMS Partner (+4M USD).",
          "Established E.D.N EITS Distribution Network.",
          "Expanded into new markets: IRAQ & LYBIA.",
          "Became an authorized SIEMENS PANEL BUILDER.",
          "Expanded portfolio to cover Light Current Systems."
        ]
      },
      certificates: {
        siemens: {
          title: "Approved partner by Siemens",
          alt: "Siemens Certificate"
        },
        honeywell: {
          title: "Honeywell Certificate",
          alt: "Honeywell Certificate"
        },
        centraline: {
          title: "Honeywell Centraline Letter",
          alt: "Honeywell Centraline Letter"
        },
        platinum: {
          title: "Platinum Partner Honeywell Certificate",
          alt: "Platinum Partner Honeywell Certificate"
        },
        gold: {
          title: "Gold Partner Honeywell Certificate",
          alt: "Gold Partner Honeywell Certificate"
        },
        silver: {
          title: "Silver Partner Honeywell Certificate",
          alt: "Silver Partner Honeywell Certificate"
        },
        alerton: {
          title: "Alerton Ascent technical training certificate",
          alt: "Alerton Ascent technical training certificate"
        }
      }
    },
    ar: {
      title: "إنجازاتنا",
      description: "خط زمني لأهم إنجازاتنا وتقديراتنا في الصناعة.",
      sections: {
        revenue: "الإيرادات السنوية",
        kpi: "مؤشرات الأداء الرئيسية",
        certificates: "الشهادات",
        hospitals: "المستشفيات ومراكز الرعاية",
        commercial: "التجارية",
        datacenters: "مراكز البيانات",
        pharma: "الصيدلة",
        religious: "مؤسسات دينية"
      },
      kpi: {
        title: "مؤشرات الأداء المحققة خلال السنوات الخمس الماضية",
        items: [
          "أصبحنا شريكًا نخبويًا في أنظمة إدارة المباني من هانيويل (+4 مليون دولار).",
          "إنشاء شبكة توزيع E.D.N EITS.",
          "التوسع في أسواق جديدة: العراق وليبيا.",
          "أصبحنا موزعًا معتمدًا لشركة سيمنز.",
          "توسيع المحفظة لتشمل أنظمة التيار الخفيف."
        ]
      },
      certificates: {
        siemens: {
          title: "شريك معتمد من سيمنز",
          alt: "شهادة سيمنز"
        },
        honeywell: {
          title: "شهادة هانيويل",
          alt: "شهادة هانيويل"
        },
        centraline: {
          title: "خطاب هانيويل سنترالين",
          alt: "خطاب هانيويل سنترالين"
        },
        platinum: {
          title: "شهادة شريك بلاتينيوم هانيويل",
          alt: "شهادة شريك بلاتينيوم هانيويل"
        },
        gold: {
          title: "شهادة شريك ذهبي هانيويل",
          alt: "شهادة شريك ذهبي هانيويل"
        },
        silver: {
          title: "شهادة شريك فضي هانيويل",
          alt: "شهادة شريك فضي هانيويل"
        },
        alerton: {
          title: "شهادة تدريب تقني أليرتون أسينت",
          alt: "شهادة تدريب تقني أليرتون أسينت"
        }
      }
    },
    fr: {
      title: "Nos Réalisations",
      description: "Une chronologie de nos principales réalisations et reconnaissances dans l'industrie.",
      sections: {
        revenue: "Revenus Annuels",
        kpi: "Indicateurs Clés de Performance",
        certificates: "Certificats",
        religious: "Institutions Religieuses"
      },
      kpi: {
        title: "Indicateurs de Performance Réalisés au Cours des 5 Dernières Années",
        items: [
          "Devenu Partenaire Elite BMS de Honeywell (+4M USD).",
          "Établissement du Réseau de Distribution E.D.N EITS.",
          "Expansion vers de nouveaux marchés : IRAK & LIBYE.",
          "Devenu Constructeur de Tableaux Autorisé SIEMENS.",
          "Extension du portefeuille pour couvrir les Systèmes de Courant Faible."
        ]
      },
      certificates: {
        siemens: {
          title: "Partenaire approuvé par Siemens",
          alt: "Certificat Siemens"
        },
        honeywell: {
          title: "Certificat Honeywell",
          alt: "Certificat Honeywell"
        },
        centraline: {
          title: "Lettre Honeywell Centraline",
          alt: "Lettre Honeywell Centraline"
        },
        platinum: {
          title: "Certificat Partenaire Platine Honeywell",
          alt: "Certificat Partenaire Platine Honeywell"
        },
        gold: {
          title: "Certificat Partenaire Or Honeywell",
          alt: "Certificat Partenaire Or Honeywell"
        },
        silver: {
          title: "Certificat Partenaire Argent Honeywell",
          alt: "Certificat Partenaire Argent Honeywell"
        },
        alerton: {
          title: "Certificat de formation technique Alerton Ascent",
          alt: "Certificat de formation technique Alerton Ascent"
        }
      }
    },
    es: {
      title: "Nuestros Logros",
      description: "Una línea de tiempo de nuestros hitos clave y reconocimientos en la industria.",
      sections: {
        revenue: "Ingresos Anuales",
        kpi: "Indicadores Clave de Rendimiento",
        certificates: "Certificados",
        religious: "Instituciones Religiosas"
      },
      kpi: {
        title: "Indicadores de Rendimiento Logrados en los Últimos 5 Años",
        items: [
          "Convertido en Socio Elite BMS de Honeywell (+4M USD).",
          "Establecimiento de la Red de Distribución E.D.N EITS.",
          "Expansión a nuevos mercados: IRAK y LIBIA.",
          "Convertido en Constructor de Cuadros Autorizado SIEMENS.",
          "Ampliación del portafolio para cubrir Sistemas de Corriente Débil."
        ]
      },
      certificates: {
        siemens: {
          title: "Socio aprobado por Siemens",
          alt: "Certificado Siemens"
        },
        honeywell: {
          title: "Certificado Honeywell",
          alt: "Certificado Honeywell"
        },
        centraline: {
          title: "Carta Honeywell Centraline",
          alt: "Carta Honeywell Centraline"
        },
        platinum: {
          title: "Certificado Socio Platino Honeywell",
          alt: "Certificado Socio Platino Honeywell"
        },
        gold: {
          title: "Certificado Socio Oro Honeywell",
          alt: "Certificado Socio Oro Honeywell"
        },
        silver: {
          title: "Certificado Socio Plata Honeywell",
          alt: "Certificado Socio Plata Honeywell"
        },
        alerton: {
          title: "Certificado de formación técnica Alerton Ascent",
          alt: "Certificado de formación técnica Alerton Ascent"
        }
      }
    }
  }
} satisfies Dictionary;

export default achievementsContent; 