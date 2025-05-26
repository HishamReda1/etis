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
          title: "Siemens Approved Partner Certificate",
          alt: "Siemens Approved Partner Certificate"
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
          title: "Platinum Partner Certificate",
          alt: "Platinum Partner Certificate"
        },
        gold: {
          title: "Gold Partner Certificate",
          alt: "Gold Partner Certificate"
        },
        silver: {
          title: "Silver Partner Certificate",
          alt: "Silver Partner Certificate"
        },
        alerton: {
          title: "Alerton Certificate",
          alt: "Alerton Certificate"
        },
        certificate15: {
          title: "Alerton Training Certificate",
          alt: "Alerton Training Certificate"
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
        },
        certificate15: {
          title: "شهادة تدريب أليرتون",
          alt: "شهادة تدريب أليرتون"
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
        },
        certificate15: {
          title: "Certificat de Formation Alerton",
          alt: "Certificat de Formation Alerton"
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
        },
        certificate15: {
          title: "Certificado de Formación Alerton",
          alt: "Certificado de Formación Alerton"
        }
      }
    },
    de: {
      title: "Unsere Erfolge",
      description: "Eine Zeitleiste unserer wichtigsten Meilensteine und Anerkennungen in der Branche.",
      sections: {
        revenue: "Jahresumsatz",
        kpi: "Kernleistungsindikatoren",
        certificates: "Zertifikate",
        hospitals: "Krankenhäuser & Pflegezentren",
        commercial: "Kommerziell",
        datacenters: "Rechenzentren",
        pharma: "Pharma",
        religious: "Religiöse Einrichtungen"
      },
      kpi: {
        title: "Erreichte Leistungsindikatoren in den letzten 5 Jahren",
        items: [
          "Wurde Honeywell Elite BMS Partner (+4M USD).",
          "Etablierung des E.D.N EITS Vertriebsnetzwerks.",
          "Expansion in neue Märkte: IRAK & LIBYEN.",
          "Wurde autorisierter SIEMENS SCHALTTAFELHERSTELLER.",
          "Erweiterung des Portfolios um Schwachstromsysteme."
        ]
      },
      certificates: {
        siemens: {
          title: "Siemens zugelassener Partner",
          alt: "Siemens Partnerzertifikat"
        },
        honeywell: {
          title: "Honeywell Zertifikat",
          alt: "Honeywell Zertifikat"
        },
        centraline: {
          title: "Honeywell Centraline Brief",
          alt: "Honeywell Centraline Brief"
        },
        platinum: {
          title: "Platin Partner Zertifikat",
          alt: "Platin Partner Zertifikat"
        },
        gold: {
          title: "Gold Partner Zertifikat",
          alt: "Gold Partner Zertifikat"
        },
        silver: {
          title: "Silber Partner Zertifikat",
          alt: "Silber Partner Zertifikat"
        },
        alerton: {
          title: "Alerton Technisches Training Zertifikat",
          alt: "Alerton Technisches Training Zertifikat"
        },
        certificate15: {
          title: "Alerton Training Zertifikat",
          alt: "Alerton Training Zertifikat"
        }
      }
    },
    zh: {
      title: "我们的成就",
      description: "我们在行业中的关键里程碑和认可的时间线。",
      sections: {
        revenue: "年收入",
        kpi: "关键绩效指标",
        certificates: "证书",
        hospitals: "医院和护理中心",
        commercial: "商业",
        datacenters: "数据中心",
        pharma: "制药",
        religious: "宗教机构"
      },
      kpi: {
        title: "过去5年实现的绩效指标",
        items: [
          "成为霍尼韦尔精英BMS合作伙伴（+400万美元）。",
          "建立E.D.N EITS分销网络。",
          "扩展到新市场：伊拉克和利比亚。",
          "成为西门子授权面板制造商。",
          "扩展产品组合以涵盖弱电系统。"
        ]
      },
      certificates: {
        siemens: {
          title: "西门子认证合作伙伴",
          alt: "西门子合作伙伴证书"
        },
        honeywell: {
          title: "霍尼韦尔证书",
          alt: "霍尼韦尔证书"
        },
        centraline: {
          title: "霍尼韦尔Centraline信函",
          alt: "霍尼韦尔Centraline信函"
        },
        platinum: {
          title: "霍尼韦尔白金合作伙伴证书",
          alt: "霍尼韦尔白金合作伙伴证书"
        },
        gold: {
          title: "霍尼韦尔金牌合作伙伴证书",
          alt: "霍尼韦尔金牌合作伙伴证书"
        },
        silver: {
          title: "霍尼韦尔银牌合作伙伴证书",
          alt: "霍尼韦尔银牌合作伙伴证书"
        },
        alerton: {
          title: "Alerton技术培训证书",
          alt: "Alerton技术培训证书"
        },
        certificate15: {
          title: "Alerton培训证书",
          alt: "Alerton培训证书"
        }
      }
    }
  }
} satisfies Dictionary;

export default achievementsContent; 