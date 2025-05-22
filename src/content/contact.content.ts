import { type Dictionary } from "intlayer";

const contactContent = {
  key: "contact",
  content: {
    en: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "We'd love to hear from you. Please fill out this form or shoot us an email.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send Message"
      },
      address: {
        title: "Our Location",
        egypt: "Egypt Office",
        dubai: "Dubai Office",
        uk: "UK Office"
      }
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "تواصل معنا",
      description: "نود أن نسمع منك. يرجى ملء هذا النموذج أو إرسال بريد إلكتروني إلينا.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        message: "الرسالة",
        submit: "إرسال الرسالة"
      },
      address: {
        title: "موقعنا",
        egypt: "مكتب مصر",
        dubai: "مكتب دبي",
        uk: "مكتب المملكة المتحدة"
      }
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Entrez en Contact",
      description: "Nous aimerions avoir de vos nouvelles. Veuillez remplir ce formulaire ou nous envoyer un e-mail.",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Message",
        submit: "Envoyer le Message"
      },
      address: {
        title: "Notre Emplacement",
        egypt: "Bureau d'Égypte",
        dubai: "Bureau de Dubaï",
        uk: "Bureau du Royaume-Uni"
      }
    },
    es: {
      title: "Contáctenos",
      subtitle: "Póngase en Contacto",
      description: "Nos encantaría saber de usted. Por favor complete este formulario o envíenos un correo electrónico.",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar Mensaje"
      },
      address: {
        title: "Nuestra Ubicación",
        egypt: "Oficina de Egipto",
        dubai: "Oficina de Dubái",
        uk: "Oficina del Reino Unido"
      }
    }
  }
} satisfies Dictionary;

export default contactContent; 