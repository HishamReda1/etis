import { type Dictionary,  } from "intlayer";

const homeContent =({
  key: "home",
  content: {
    en: {
      title: 'eits',
      subtitle: 'Energy International for Technical Solutions',
      tagline: 'Only one touch to change your life',
      socialMedia: {
        alt: 'Social Icon'
      }
    },
    ar: {
      title: 'ايتس',
      subtitle: 'العالمية للطاقة للحلول التقنية',
      tagline: 'لمسة واحدة لتغيير حياتك',
      socialMedia: {
        alt: 'أيقونة التواصل الاجتماعي'
      }
    },
    fr: {
      title: 'eits',
      subtitle: 'Energy International pour les Solutions Techniques',
      tagline: 'Un seul toucher pour changer votre vie',
      socialMedia: {
        alt: 'Icône de réseau social'
      }
    },
    es: {
      title: 'eits',
      subtitle: 'Energy International para Soluciones Técnicas',
      tagline: 'Solo un toque para cambiar tu vida',
      socialMedia: {
        alt: 'Icono de red social'
      }
    },
    de: {
      title: 'eits',
      subtitle: 'Energy International für Technische Lösungen',
      tagline: 'Nur eine Berührung, um Ihr Leben zu verändern',
      socialMedia: {
        alt: 'Social Media Icon'
      }
    },
    zh: {
      title: 'eits',
      subtitle: '能源国际技术解决方案',
      tagline: '只需一次触摸，改变您的生活',
      socialMedia: {
        alt: '社交媒体图标'
      }
    }
  }
}) satisfies Dictionary;

export default homeContent;