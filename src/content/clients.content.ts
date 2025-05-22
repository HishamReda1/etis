import { type Dictionary } from "intlayer";

const clientsContent = {
  key: "clients",
  content: {
    en: {
      title: "Our Clients",
      subtitle: "Trusted Partners", 
      description: "We are proud to serve a diverse range of clients across various industries.",
      groups: {
        "Educational Institutions": "Educational Institutions",
        "Hospitals & Healthcare": "Hospitals & Healthcare",
        "Hotels & Tourism": "Hotels & Tourism",
        "Corporates & Industry": "Corporates & Industry",
        "Telecom & Technology": "Telecom & Technology",
        "Religious Institutions": "Religious Institutions"
      }
    },
    ar: {
      title: "عملاؤنا",
      subtitle: "شركاء موثوق بهم",
      description: "نحن فخورون بخدمة مجموعة متنوعة من العملاء في مختلف الصناعات.",
      groups: {
        "Educational Institutions": "المؤسسات التعليمية",
        "Hospitals & Healthcare": "المستشفيات والرعاية الصحية",
        "Hotels & Tourism": "الفنادق والسياحة",
        "Corporates & Industry": "الشركات والصناعة",
        "Telecom & Technology": "الاتصالات والتكنولوجيا",
        "Religious Institutions": "المؤسسات الدينية"
      }
    },
    fr: {
      title: "Nos Clients",
      subtitle: "Partenaires de Confiance",
      description: "Nous sommes fiers de servir une gamme diversifiée de clients dans diverses industries.",
      groups: {
        "Educational Institutions": "Institutions Éducatives",
        "Hospitals & Healthcare": "Hôpitaux et Soins de Santé",
        "Hotels & Tourism": "Hôtels et Tourisme",
        "Corporates & Industry": "Entreprises et Industrie",
        "Telecom & Technology": "Télécommunications et Technologie",
        "Religious Institutions": "Institutions Religieuses"
      }
    },
    es: {
      title: "Nuestros Clientes",
      subtitle: "Socios de Confianza",
      description: "Nos enorgullece servir a una amplia gama de clientes en diversas industrias.",
      groups: {
        "Educational Institutions": "Instituciones Educativas",
        "Hospitals & Healthcare": "Hospitales y Atención Médica",
        "Hotels & Tourism": "Hoteles y Turismo",
        "Corporates & Industry": "Corporaciones e Industria",
        "Telecom & Technology": "Telecomunicaciones y Tecnología",
        "Religious Institutions": "Instituciones Religiosas"
      }
    }
  }
} satisfies Dictionary;

export default clientsContent; 