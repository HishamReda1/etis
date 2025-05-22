"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { useParams } from "next/navigation";
import contactContent from "../../src/content/contact.content";

const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function ContactPage({ theme }: { theme: "light" | "dark" }) {
  const params = useParams();
  const locale = params?.locale as string || "en";
  const isRTL = locale === "ar";
  const t = contactContent.content[locale as keyof typeof contactContent.content] || contactContent.content.en;

  const formRef = useRef<HTMLFormElement>(null);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });
  const [formStatus, setFormStatus] = useState<
    "success" | "error" | "sending" | null
  >(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));

  // Sanitize input by escaping dangerous characters to avoid injection attacks
  const sanitizeInput = (input: string) => {
    return input.replace(/<[^>]*>/g, ""); // This removes HTML tags
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) }); // sanitize input
    if (formStatus === "error") {
      setFormStatus(null);
      setErrorMessage("");
    }
  };

  const handleOtpInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, ""); // Allow only alphanumeric characters
    if (value.length > 1) return; // Prevent entering more than one character

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setFormData({ ...formData, captcha: newOtpValues.join("") });

    // Automatically move to the next input box
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otpValues[index] === "") {
      // Move to the previous input box
      if (index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage(t.form.errors.name);
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage(t.form.errors.email);
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage(t.form.errors.emailInvalid);
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage(t.form.errors.message);
      return false;
    }
    if (!showCaptcha || !/^[a-zA-Z0-9]{4,6}$/.test(formData.captcha)) {
      setErrorMessage(t.form.errors.captcha);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");
    setErrorMessage("");

    try {
      if (!formRef.current) {
        throw new Error("Form configuration error");
      }

      const emailRes = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (emailRes.status !== 200) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "", captcha: "" });
      setOtpValues(Array(6).fill(""));
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again."
      );
    }
  };

  return (
    <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
      <h1
        className={cn(
          "text-4xl font-bold",
          theme === "light" ? "text-gray-800" : "text-white"
        )}
      >
        {t.title} <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.subtitle}</span>
      </h1>

      <p
        className={cn(
          "text-lg",
          theme === "light" ? "text-gray-700" : "text-gray-100"
        )}
      >
        {t.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Contact Info */}
        <div
          className={cn(
            "p-6 rounded-lg backdrop-blur-md border",
            theme === "dark"
              ? "bg-[#005b94]/20 border-[#005b94]/30"
              : "bg-[#56ab2f]/20 border-[#56ab2f]/30"
          )}
        >
          <h3
            className={cn(
              "text-xl font-semibold mb-4",
              theme === "light" ? "text-gray-800" : "text-white"
            )}
          >
            {t.contactInfo.title}
          </h3>
          <div className="space-y-3">
            <p
              className={cn(
                theme === "light" ? "text-gray-700" : "text-gray-200"
              )}
            >
              <strong>{t.contactInfo.address}:</strong> {t.contactInfo.addressValue}
            </p>
            <p
              className={cn(
                theme === "light" ? "text-gray-700" : "text-gray-200"
              )}
            >
              <strong>{t.contactInfo.phone}:</strong> {t.contactInfo.phoneValue}
            </p>
            <p
              className={cn(
                theme === "light" ? "text-gray-700" : "text-gray-200"
              )}
            >
              <strong>{t.contactInfo.email}:</strong> {t.contactInfo.emailValue}
            </p>
            <p
              className={cn(
                theme === "light" ? "text-gray-700" : "text-gray-200"
              )}
            >
              <strong>{t.contactInfo.hours}:</strong> {t.contactInfo.hoursValue}
            </p>
          </div>

          <div className="mt-6">
            <h3
              className={cn(
                "text-xl font-semibold mb-4",
                theme === "light" ? "text-gray-800" : "text-white"
              )}
            >
              {t.location.title}
            </h3>
            <div className="h-64 rounded-md overflow-hidden">
              <Map />
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className={cn(
            "p-6 rounded-lg backdrop-blur-md border",
            theme === "dark"
              ? "bg-[#005b94]/20 border-[#005b94]/30"
              : "bg-[#56ab2f]/20 border-[#56ab2f]/30"
          )}
        >
          <h3
            className={cn(
              "text-xl font-semibold mb-4",
              theme === "light" ? "text-gray-800" : "text-white"
            )}
          >
            {t.form.title}
          </h3>

          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className={cn(
                  "block mb-1",
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                )}
              >
                {t.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 rounded-md border",
                  theme === "dark"
                    ? "bg-[#001e30] border-[#005b94] text-white"
                    : "bg-white border-gray-300 text-gray-900"
                )}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={cn(
                  "block mb-1",
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                )}
              >
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 rounded-md border",
                  theme === "dark"
                    ? "bg-[#001e30] border-[#005b94] text-white"
                    : "bg-white border-gray-300 text-gray-900"
                )}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={cn(
                  "block mb-1",
                  theme === "light" ? "text-gray-700" : "text-gray-200"
                )}
              >
                {t.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={cn(
                  "w-full px-4 py-2 rounded-md border",
                  theme === "dark"
                    ? "bg-[#001e30] border-[#005b94] text-white"
                    : "bg-white border-gray-300 text-gray-900"
                )}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            {showCaptcha && (
              <div>
                <label
                  className={cn(
                    "block mb-1",
                    theme === "light" ? "text-gray-700" : "text-gray-200"
                  )}
                >
                  {t.form.captcha}
                </label>
                <div className="flex gap-2">
                  {Array.from({ length: 6 }, (_, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      type="text"
                      maxLength={1}
                      value={otpValues[i]}
                      onChange={(e) => handleOtpInputChange(e, i)}
                      onKeyDown={(e) => handleOtpKeyDown(e, i)}
                      className={cn(
                        "w-10 h-10 text-center rounded-md border",
                        theme === "dark"
                          ? "bg-[#001e30] border-[#005b94] text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {formStatus === "error" && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className={cn(
                "w-full py-2 px-4 rounded-md font-medium transition-colors",
                theme === "dark"
                  ? "bg-[#005b94] text-white hover:bg-[#004b7a] disabled:bg-[#005b94]/50"
                  : "bg-[#56ab2f] text-white hover:bg-[#4a9a2a] disabled:bg-[#56ab2f]/50"
              )}
            >
              {formStatus === "sending"
                ? t.form.status.sending
                : formStatus === "success"
                ? t.form.status.success
                : t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
