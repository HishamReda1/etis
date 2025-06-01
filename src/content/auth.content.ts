import { type Dictionary } from "intlayer";

const authContent = {
  key: "auth",
  content: {
    en: {
      login: {
        title: "Welcome Back",
        subtitle: "Sign in to your account",
        email: "Email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        signIn: "Sign In",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        validation: {
          email: {
            required: "Email is required",
            invalid: "Please enter a valid email address"
          },
          password: {
            required: "Password is required",
            minLength: "Password must be at least 8 characters",
            pattern: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
          }
        },
        errors: {
          invalidCredentials: "Invalid email or password",
          serverError: "An error occurred. Please try again later",
          networkError: "Network error. Please check your connection"
        }
      }
    },
    ar: {
      login: {
        title: "مرحباً بعودتك",
        subtitle: "سجل دخولك إلى حسابك",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        rememberMe: "تذكرني",
        forgotPassword: "نسيت كلمة المرور؟",
        signIn: "تسجيل الدخول",
        noAccount: "ليس لديك حساب؟",
        signUp: "إنشاء حساب",
        validation: {
          email: {
            required: "البريد الإلكتروني مطلوب",
            invalid: "يرجى إدخال بريد إلكتروني صحيح"
          },
          password: {
            required: "كلمة المرور مطلوبة",
            minLength: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
            pattern: "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم ورمز خاص واحد على الأقل"
          }
        },
        errors: {
          invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
          serverError: "حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً",
          networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك"
        }
      }
    },
    fr: {
      login: {
        title: "Bon retour",
        subtitle: "Connectez-vous à votre compte",
        email: "E-mail",
        password: "Mot de passe",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oublié ?",
        signIn: "Se connecter",
        noAccount: "Pas de compte ?",
        signUp: "S'inscrire",
        validation: {
          email: {
            required: "L'e-mail est requis",
            invalid: "Veuillez entrer une adresse e-mail valide"
          },
          password: {
            required: "Le mot de passe est requis",
            minLength: "Le mot de passe doit contenir au moins 8 caractères",
            pattern: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial"
          }
        },
        errors: {
          invalidCredentials: "E-mail ou mot de passe invalide",
          serverError: "Une erreur s'est produite. Veuillez réessayer plus tard",
          networkError: "Erreur réseau. Veuillez vérifier votre connexion"
        }
      }
    },
    es: {
      login: {
        title: "Bienvenido de nuevo",
        subtitle: "Inicia sesión en tu cuenta",
        email: "Correo electrónico",
        password: "Contraseña",
        rememberMe: "Recordarme",
        forgotPassword: "¿Olvidaste tu contraseña?",
        signIn: "Iniciar sesión",
        noAccount: "¿No tienes cuenta?",
        signUp: "Registrarse",
        validation: {
          email: {
            required: "El correo electrónico es obligatorio",
            invalid: "Por favor, introduce un correo electrónico válido"
          },
          password: {
            required: "La contraseña es obligatoria",
            minLength: "La contraseña debe tener al menos 8 caracteres",
            pattern: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
          }
        },
        errors: {
          invalidCredentials: "Correo electrónico o contraseña inválidos",
          serverError: "Ocurrió un error. Por favor, inténtalo de nuevo más tarde",
          networkError: "Error de red. Por favor, verifica tu conexión"
        }
      }
    },
    de: {
      login: {
        title: "Willkommen zurück",
        subtitle: "Melden Sie sich bei Ihrem Konto an",
        email: "E-Mail",
        password: "Passwort",
        rememberMe: "Angemeldet bleiben",
        forgotPassword: "Passwort vergessen?",
        signIn: "Anmelden",
        noAccount: "Kein Konto?",
        signUp: "Registrieren",
        validation: {
          email: {
            required: "E-Mail ist erforderlich",
            invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein"
          },
          password: {
            required: "Passwort ist erforderlich",
            minLength: "Das Passwort muss mindestens 8 Zeichen lang sein",
            pattern: "Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten"
          }
        },
        errors: {
          invalidCredentials: "Ungültige E-Mail oder Passwort",
          serverError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut",
          networkError: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung"
        }
      }
    },
    zh: {
      login: {
        title: "欢迎回来",
        subtitle: "登录您的账户",
        email: "电子邮箱",
        password: "密码",
        rememberMe: "记住我",
        forgotPassword: "忘记密码？",
        signIn: "登录",
        noAccount: "没有账户？",
        signUp: "注册",
        validation: {
          email: {
            required: "电子邮箱是必填项",
            invalid: "请输入有效的电子邮箱地址"
          },
          password: {
            required: "密码是必填项",
            minLength: "密码必须至少包含8个字符",
            pattern: "密码必须包含至少一个大写字母、一个小写字母、一个数字和一个特殊字符"
          }
        },
        errors: {
          invalidCredentials: "电子邮箱或密码无效",
          serverError: "发生错误。请稍后重试",
          networkError: "网络错误。请检查您的连接"
        }
      }
    }
  }
} satisfies Dictionary;

export default authContent; 