import { type Dictionary } from "intlayer";

const contactContent = {
  key: "contact",
  content: {
    en: {
      title: "Contact",
      subtitle: "Us",
      description: "Get in touch with our team for inquiries and support.",
      contactInfo: {
        title: "Contact Information",
        address: "Address",
        addressValue: "72 Street, 1st industrial district, Obour city, Egypt",
        phone: "Phone",
        phoneValue: "+20 109 002 0981, 02 44 891 304, +20 111 511 4445",
        email: "Email",
        emailValue: "info@eits-egypt.com",
        hours: "Hours",
        hoursValue: "Sunday-Thursday, 9:00 AM - 5:00 PM"
      },
      location: {
        title: "Our Location"
      },
      form: {
        title: "Send a Message",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        captcha: "Security Check",
        errors: {
          name: "Please enter your name",
          email: "Please enter your email",
          emailInvalid: "Please enter a valid email address",
          message: "Please enter your message",
          captcha: "Security check failed. Please complete the captcha."
        },
        status: {
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again."
        }
      }
    },
    ar: {
      title: "اتصل",
      subtitle: "بنا",
      description: "تواصل مع فريقنا للاستفسارات والدعم.",
      contactInfo: {
        title: "معلومات الاتصال",
        address: "العنوان",
        addressValue: "72 شارع، المنطقة الصناعية الأولى، مدينة العبور، مصر",
        phone: "الهاتف",
        phoneValue: "+20 109 002 0981، 02 44 891 304، +20 111 511 4445",
        email: "البريد الإلكتروني",
        emailValue: "info@eits-egypt.com",
        hours: "ساعات العمل",
        hoursValue: "الأحد-الخميس، 9:00 صباحاً - 5:00 مساءً"
      },
      location: {
        title: "موقعنا"
      },
      form: {
        title: "أرسل رسالة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        captcha: "التحقق من الأمان",
        errors: {
          name: "الرجاء إدخال اسمك",
          email: "الرجاء إدخال بريدك الإلكتروني",
          emailInvalid: "الرجاء إدخال عنوان بريد إلكتروني صحيح",
          message: "الرجاء إدخال رسالتك",
          captcha: "فشل التحقق من الأمان. الرجاء إكمال التحقق."
        },
        status: {
          sending: "جاري الإرسال...",
          success: "تم إرسال الرسالة بنجاح!",
          error: "فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى."
        }
      }
    },
    fr: {
      title: "Contactez",
      subtitle: "Nous",
      description: "Contactez notre équipe pour toute question ou assistance.",
      contactInfo: {
        title: "Informations de Contact",
        address: "Adresse",
        addressValue: "72 Rue, 1er district industriel, ville d'Obour, Égypte",
        phone: "Téléphone",
        phoneValue: "+20 109 002 0981, 02 44 891 304, +20 111 511 4445",
        email: "Email",
        emailValue: "info@eits-egypt.com",
        hours: "Heures d'ouverture",
        hoursValue: "Dimanche-Jeudi, 9h00 - 17h00"
      },
      location: {
        title: "Notre Emplacement"
      },
      form: {
        title: "Envoyer un Message",
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer le Message",
        captcha: "Vérification de Sécurité",
        errors: {
          name: "Veuillez entrer votre nom",
          email: "Veuillez entrer votre email",
          emailInvalid: "Veuillez entrer une adresse email valide",
          message: "Veuillez entrer votre message",
          captcha: "Échec de la vérification de sécurité. Veuillez compléter le captcha."
        },
        status: {
          sending: "Envoi en cours...",
          success: "Message envoyé avec succès !",
          error: "Échec de l'envoi du message. Veuillez réessayer."
        }
      }
    },
    es: {
      title: "Contáctenos",
      subtitle: "Nosotros",
      description: "Póngase en contacto con nuestro equipo para consultas y soporte.",
      contactInfo: {
        title: "Información de Contacto",
        address: "Dirección",
        addressValue: "72 Calle, 1er distrito industrial, ciudad de Obour, Egipto",
        phone: "Teléfono",
        phoneValue: "+20 109 002 0981, 02 44 891 304, +20 111 511 4445",
        email: "Correo Electrónico",
        emailValue: "info@eits-egypt.com",
        hours: "Horario",
        hoursValue: "Domingo-Jueves, 9:00 AM - 5:00 PM"
      },
      location: {
        title: "Nuestra Ubicación"
      },
      form: {
        title: "Enviar un Mensaje",
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        captcha: "Verificación de Seguridad",
        errors: {
          name: "Por favor ingrese su nombre",
          email: "Por favor ingrese su correo electrónico",
          emailInvalid: "Por favor ingrese una dirección de correo electrónico válida",
          message: "Por favor ingrese su mensaje",
          captcha: "Error en la verificación de seguridad. Por favor complete el captcha."
        },
        status: {
          sending: "Enviando...",
          success: "¡Mensaje enviado con éxito!",
          error: "Error al enviar el mensaje. Por favor intente nuevamente."
        }
      }
    },
    de: {
      title: "Kontakt",
      subtitle: "Uns",
      description: "Kontaktieren Sie unser Team für Anfragen und Unterstützung.",
      contactInfo: {
        title: "Kontaktinformationen",
        address: "Adresse",
        addressValue: "72 Straße, 1. Industriegebiet, Obour Stadt, Ägypten",
        phone: "Telefon",
        phoneValue: "+20 109 002 0981, 02 44 891 304, +20 111 511 4445",
        email: "E-Mail",
        emailValue: "info@eits-egypt.com",
        hours: "Öffnungszeiten",
        hoursValue: "Sonntag-Donnerstag, 9:00 - 17:00 Uhr"
      },
      location: {
        title: "Unser Standort"
      },
      form: {
        title: "Nachricht senden",
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Nachricht senden",
        captcha: "Sicherheitsüberprüfung",
        errors: {
          name: "Bitte geben Sie Ihren Namen ein",
          email: "Bitte geben Sie Ihre E-Mail-Adresse ein",
          emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
          message: "Bitte geben Sie Ihre Nachricht ein",
          captcha: "Sicherheitsüberprüfung fehlgeschlagen. Bitte vervollständigen Sie die Überprüfung."
        },
        status: {
          sending: "Wird gesendet...",
          success: "Nachricht erfolgreich gesendet!",
          error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
        }
      }
    },
    zh: {
      title: "联系",
      subtitle: "我们",
      description: "联系我们的团队获取咨询和支持。",
      contactInfo: {
        title: "联系信息",
        address: "地址",
        addressValue: "埃及奥布尔市第一工业区72街",
        phone: "电话",
        phoneValue: "+20 109 002 0981, 02 44 891 304, +20 111 511 4445",
        email: "电子邮件",
        emailValue: "info@eits-egypt.com",
        hours: "营业时间",
        hoursValue: "周日-周四，上午9:00 - 下午5:00"
      },
      location: {
        title: "我们的位置"
      },
      form: {
        title: "发送消息",
        name: "姓名",
        email: "电子邮件",
        message: "消息",
        submit: "发送消息",
        captcha: "安全验证",
        errors: {
          name: "请输入您的姓名",
          email: "请输入您的电子邮件",
          emailInvalid: "请输入有效的电子邮件地址",
          message: "请输入您的消息",
          captcha: "安全验证失败。请完成验证。"
        },
        status: {
          sending: "发送中...",
          success: "消息发送成功！",
          error: "消息发送失败。请重试。"
        }
      }
    }
  }
} satisfies Dictionary;

export default contactContent; 