import { type Dictionary } from "intlayer";

const productsContent = {
  key: "products",
  content: {
    en: {
      title: "Our Products",
      subtitle: "Innovative Solutions",
      description: "Discover our range of cutting-edge products designed to meet your needs.",
      features: {
        title: 'Product Features',
      },
      products: {
        building_management_system: {
          name: "Building Management System",
          description: "Solutions Technology Unleashed, Integration Perfected",
          features: [
            "Authorized/Certified Partner for Honeywell for the Building Management System of Alerton (US).",
            "Authorized Partner for Honeywell critical environment Air Valves solutions from Phoenix Controls (US) specialized in the Healthcare & Pharma applications.",
            'Certified Partner for Honeywell specialized PLC for the critical commercial infrastructure from SAIA BURGESS "SBC" (SW).',
            "Authorized Reseller for Dwyer for BMS & Controls Instrumentation devices.",
            "The only Platinum partner for Honeywell in Egypt."
          ],
          images: [
            "./bms.webp",
            "./honeywell5.avif",
            "./honeywell9.webp",
            "./honeywell8.avif",
            "./honeywell6.avif",
            "./honeywell3.webp",
            "./honeywell2.webp",
            "./honywell1.webp",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-2-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-3-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-4-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-5-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-6-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-7-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-8-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-9-2880x1440"
          ],
          icon: "MonitorCog"
        },
        elv_lighting_control_solutions: {
          name: "ELV & Lighting Control Solutions",
          description: "Solutions Technology Unleashed, Integration Perfected",
          features: [
            "Authorized partner for Honeywell in the commercial lighting control of EX-OR (UK).",
            "Recently become an authorized system integrator in the physical security of Hanwha Vision (S.K), covering video surveillance, access control and public address."
          ],
          images: [
            "./ELV.webp",
            "https://son04-live-0559e086fe33459f92ce8a277429-ab9e917.divio-media.org/filer_public_thumbnails/images/ll-cc-rgb-72dpi.png__800x600_q90_subsampling-2_upscale.png.webp",
            "https://www.hanwhavision.com/wp-content/uploads/2017/02/X200_01_M-600x600.png",
            "https://www.hanwhavision.com/wp-content/uploads/2025/03/XNO-A9084RA8084R_01_M-600x600.png"
          ],
          icon: "Lightbulb"
        },
        electrical_solutions: {
          name: "Electrical Solutions",
          description: "Solutions Technology Unleashed, Integration Perfected",
          features: [
            "MCC & LV panels provider for ABB in the Egyptian market.",
            "MCC & LV panels provider for Siemens Electric.",
            "VFD panel providers (ABB, Siemens Electric & Honeywell)."
          ],
          images: ["./electrical.webp", "./install.webp", "./electric2.webp"],
          icon: "Zap"
        },
        installation_repair_center: {
          name: "Installation & Repair Center",
          description: "Solutions Technology Unleashed, Integration Perfected",
          features: [
            "Our professional teams excel in MEP installations, covering all phases from initial setup to final fixes. Expertise includes comprehensive cabling solutions, trays, conduits, trunks, and ladder installations.",
            "As a specialized HVAC installation company, we have established a strong footprint in critical applications such as healthcare and hospitality sectors.",
            "We also boast a dedicated in-house repair center for all controls and BMS products, staffed by experienced engineers to ensure top-notch service and reliability."
          ],
          images: ["./HVAC.webp", "./install.webp"],
          icon: "Wrench"
        }
      }
    },
    ar: {
      title: "منتجاتنا",
      subtitle: "حلول مبتكرة",
      description: "اكتشف مجموعتنا من المنتجات المتطورة المصممة لتلبية احتياجاتك.",
      features: {
        title: 'مميزات المنتج',
      },
      products: {
        building_management_system: {
          name: "نظام إدارة المباني",
          description: "حلول تكنولوجية متكاملة، تكامل مثالي",
          features: [
            "شريك معتمد/مرخص لهونيول لنظام إدارة المباني من ألرتون (الولايات المتحدة الأمريكية).",
            "شريك معتمد لهونيول لحلول صمامات الهواء للبيئات الحرجة من فينيكس كونترولز (الولايات المتحدة الأمريكية) متخصص في تطبيقات الرعاية الصحية والأدوية.",
            "شريك معتمد لهونيول متخصص في أجهزة التحكم المنطقية القابلة للبرمجة للبنية التحتية التجارية الحرجة من سايا بورغيس 'SBC' (سويسرا).",
            "موزع معتمد لـ Dwyer لأجهزة قياس ومراقبة أنظمة إدارة المباني.",
            "الشريك البلاتيني الوحيد لهونيول في مصر."
          ],
          images: [
            "./bms.webp",
            "./honeywell5.avif",
            "./honeywell9.webp",
            "./honeywell8.avif",
            "./honeywell6.avif",
            "./honeywell3.webp",
            "./honeywell2.webp",
            "./honywell1.webp",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-2-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-3-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-4-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-5-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-6-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-7-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-8-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-9-2880x1440"
          ],
          icon: "MonitorCog"
        },
        elv_lighting_control_solutions: {
          name: "حلول التحكم في الإضاءة والأنظمة الكهربائية الخفيفة",
          description: "حلول تكنولوجية متكاملة، تكامل مثالي",
          features: [
            "شريك معتمد لهونيول في التحكم في الإضاءة التجارية من EX-OR (المملكة المتحدة).",
            "أصبحنا مؤخراً مزود خدمات معتمد في الأمن المادي من هانوا فيجن (كوريا الجنوبية)، يشمل المراقبة بالفيديو، التحكم في الوصول، والأنظمة الصوتية."
          ],
          images: [
            "./ELV.webp",
            "https://son04-live-0559e086fe33459f92ce8a277429-ab9e917.divio-media.org/filer_public_thumbnails/images/ll-cc-rgb-72dpi.png__800x600_q90_subsampling-2_upscale.png.webp",
            "https://www.hanwhavision.com/wp-content/uploads/2017/02/X200_01_M-600x600.png",
            "https://www.hanwhavision.com/wp-content/uploads/2025/03/XNO-A9084RA8084R_01_M-600x600.png"
          ],
          icon: "Lightbulb"
        },
        electrical_solutions: {
          name: "الحلول الكهربائية",
          description: "حلول تكنولوجية متكاملة، تكامل مثالي",
          features: [
            "مزود لوحات MCC و LV لـ ABB في السوق المصري.",
            "مزود لوحات MCC و LV لـ Siemens Electric.",
            "مزود لوحات VFD (ABB، Siemens Electric & Honeywell)."
          ],
          images: ["./electrical.webp", "./install.webp", "./electric2.webp"],
          icon: "Zap"
        },
        installation_repair_center: {
          name: "مركز التركيب والصيانة",
          description: "حلول تكنولوجية متكاملة، تكامل مثالي",
          features: [
            "تتميز فرقنا المهنية في تركيب أنظمة MEP، تغطي جميع المراحل من الإعداد الأولي إلى الإصلاحات النهائية. تشمل الخبرة حلول كابلات شاملة، وصواني، وقنوات، وجذوع، وتركيب سلالم.",
            "كشركة متخصصة في تركيب أنظمة التكييف، قمنا بإنشاء وجود قوي في التطبيقات الحرجة مثل قطاعات الرعاية الصحية والضيافة.",
            "نمتلك أيضاً مركز إصلاح داخلي مخصص لجميع منتجات التحكم وأنظمة إدارة المباني، يعمل به مهندسون ذوو خبرة لضمان خدمة وموثوقية عالية الجودة."
          ],
          images: ["./HVAC.webp", "./install.webp"],
          icon: "Wrench"
        }
      }
    },
    fr: {
      title: "Nos Produits",
      subtitle: "Solutions Innovantes",
      description: "Découvrez notre gamme de produits de pointe conçus pour répondre à vos besoins.",
      features: {
        title: 'Caractéristiques du Produit',
      },
      products: {
        building_management_system: {
          name: "Système de Gestion des Bâtiments",
          description: "Solutions Technologiques Déchaînées, Intégration Parfaite",
          features: [
            "Partenaire Autorisé/Certifié de Honeywell pour le Système de Gestion des Bâtiments d'Alerton (États-Unis).",
            "Partenaire Autorisé de Honeywell pour les solutions de vannes d'air d'environnement critique de Phoenix Controls (États-Unis) spécialisé dans les applications de Santé et Pharma.",
            "Partenaire Certifié de Honeywell spécialisé en PLC pour l'infrastructure commerciale critique de SAIA BURGESS 'SBC' (Suisse).",
            "Revendeur Autorisé de Dwyer pour les dispositifs d'instrumentation BMS et de contrôle.",
            "Le seul partenaire Platinum de Honeywell en Égypte."
          ],
          images: [
            "./bms.webp",
            "./honeywell5.avif",
            "./honeywell9.webp",
            "./honeywell8.avif",
            "./honeywell6.avif",
            "./honeywell3.webp",
            "./honeywell2.webp",
            "./honywell1.webp",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-2-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-3-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-4-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-5-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-6-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-7-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-8-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-9-2880x1440"
          ],
          icon: "MonitorCog"
        },
        elv_lighting_control_solutions: {
          name: "Solutions de Contrôle d'Éclairage et ELV",
          description: "Solutions Technologiques Déchaînées, Intégration Parfaite",
          features: [
            "Partenaire autorisé de Honeywell dans le contrôle d'éclairage commercial d'EX-OR (Royaume-Uni).",
            "Devenu récemment intégrateur de systèmes autorisé dans la sécurité physique de Hanwha Vision (Corée du Sud), couvrant la vidéosurveillance, le contrôle d'accès et l'adresse publique."
          ],
          images: [
            "./ELV.webp",
            "https://son04-live-0559e086fe33459f92ce8a277429-ab9e917.divio-media.org/filer_public_thumbnails/images/ll-cc-rgb-72dpi.png__800x600_q90_subsampling-2_upscale.png.webp",
            "https://www.hanwhavision.com/wp-content/uploads/2017/02/X200_01_M-600x600.png",
            "https://www.hanwhavision.com/wp-content/uploads/2025/03/XNO-A9084RA8084R_01_M-600x600.png"
          ],
          icon: "Lightbulb"
        },
        electrical_solutions: {
          name: "Solutions Électriques",
          description: "Solutions Technologiques Déchaînées, Intégration Parfaite",
          features: [
            "Fournisseur de panneaux MCC et LV pour ABB sur le marché égyptien.",
            "Fournisseur de panneaux MCC et LV pour Siemens Electric.",
            "Fournisseurs de panneaux VFD (ABB, Siemens Electric & Honeywell)."
          ],
          images: ["./electrical.webp", "./install.webp", "./electric2.webp"],
          icon: "Zap"
        },
        installation_repair_center: {
          name: "Centre d'Installation et de Réparation",
          description: "Solutions Technologiques Déchaînées, Intégration Parfaite",
          features: [
            "Nos équipes professionnelles excellent dans les installations MEP, couvrant toutes les phases de la configuration initiale aux corrections finales. L'expertise comprend des solutions de câblage complètes, des plateaux, des conduits, des troncs et des installations d'échelles.",
            "En tant qu'entreprise spécialisée dans l'installation CVC, nous avons établi une forte présence dans les applications critiques telles que les secteurs de la santé et de l'hôtellerie.",
            "Nous disposons également d'un centre de réparation interne dédié à tous les produits de contrôle et BMS, doté d'ingénieurs expérimentés pour assurer un service et une fiabilité de premier ordre."
          ],
          images: ["./HVAC.webp", "./install.webp"],
          icon: "Wrench"
        }
      }
    },
    es: {
      title: "Nuestros Productos",
      subtitle: "Soluciones Innovadoras",
      description: "Descubra nuestra gama de productos de vanguardia diseñados para satisfacer sus necesidades.",
      features: {
        title: 'Características del Producto',
      },
      products: {
        building_management_system: {
          name: "Sistema de Gestión de Edificios",
          description: "Soluciones Tecnológicas Desatadas, Integración Perfecta",
          features: [
            "Socio Autorizado/Certificado de Honeywell para el Sistema de Gestión de Edificios de Alerton (EE.UU.).",
            "Socio Autorizado de Honeywell para soluciones de válvulas de aire de entorno crítico de Phoenix Controls (EE.UU.) especializado en aplicaciones de Salud y Farmacéuticas.",
            "Socio Certificado de Honeywell especializado en PLC para la infraestructura comercial crítica de SAIA BURGESS 'SBC' (Suiza).",
            "Revendedor Autorizado de Dwyer para dispositivos de instrumentación BMS y control.",
            "El único socio Platinum de Honeywell en Egipto."
          ],
          images: [
            "./bms.webp",
            "./honeywell5.avif",
            "./honeywell9.webp",
            "./honeywell8.avif",
            "./honeywell6.avif",
            "./honeywell3.webp",
            "./honeywell2.webp",
            "./honywell1.webp",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-2-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-3-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-4-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-5-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-6-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-7-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-8-2880x1440",
            "https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-9-2880x1440"
          ],
          icon: "MonitorCog"
        },
        elv_lighting_control_solutions: {
          name: "Soluciones de Control de Iluminación y ELV",
          description: "Soluciones Tecnológicas Desatadas, Integración Perfecta",
          features: [
            "Socio autorizado de Honeywell en el control de iluminación comercial de EX-OR (Reino Unido).",
            "Recientemente convertido en integrador de sistemas autorizado en la seguridad física de Hanwha Vision (Corea del Sur), cubriendo videovigilancia, control de acceso y dirección pública."
          ],
          images: [
            "./ELV.webp",
            "https://son04-live-0559e086fe33459f92ce8a277429-ab9e917.divio-media.org/filer_public_thumbnails/images/ll-cc-rgb-72dpi.png__800x600_q90_subsampling-2_upscale.png.webp",
            "https://www.hanwhavision.com/wp-content/uploads/2017/02/X200_01_M-600x600.png",
            "https://www.hanwhavision.com/wp-content/uploads/2025/03/XNO-A9084RA8084R_01_M-600x600.png"
          ],
          icon: "Lightbulb"
        },
        electrical_solutions: {
          name: "Soluciones Eléctricas",
          description: "Soluciones Tecnológicas Desatadas, Integración Perfecta",
          features: [
            "Proveedor de paneles MCC y LV para ABB en el mercado egipcio.",
            "Proveedor de paneles MCC y LV para Siemens Electric.",
            "Proveedores de paneles VFD (ABB, Siemens Electric & Honeywell)."
          ],
          images: ["./electrical.webp", "./install.webp", "./electric2.webp"],
          icon: "Zap"
        },
        installation_repair_center: {
          name: "Centro de Instalación y Reparación",
          description: "Soluciones Tecnológicas Desatadas, Integración Perfecta",
          features: [
            "Nuestros equipos profesionales sobresalen en instalaciones MEP, cubriendo todas las fases desde la configuración inicial hasta las correcciones finales. La experiencia incluye soluciones completas de cableado, bandejas, conductos, troncos e instalaciones de escaleras.",
            "Como empresa especializada en instalación HVAC, hemos establecido una fuerte presencia en aplicaciones críticas como los sectores de salud y hospitalidad.",
            "También contamos con un centro de reparación interno dedicado a todos los productos de control y BMS, dotado de ingenieros experimentados para garantizar un servicio y una fiabilidad de primer nivel."
          ],
          images: ["./HVAC.webp", "./install.webp"],
          icon: "Wrench"
        }
      }
    }
  }
} satisfies Dictionary;

export default productsContent; 