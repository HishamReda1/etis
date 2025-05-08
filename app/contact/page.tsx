"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import emailjs from "@emailjs/browser"

const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default function ContactPage({ theme }: { theme: "light" | "dark" }) {
  const formRef = useRef<HTMLFormElement>(null)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])
  const [formData, setFormData] = useState({ name: "", email: "", message: "", captcha: "" })
  const [formStatus, setFormStatus] = useState<"success" | "error" | "sending" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""))

  // Sanitize input by escaping dangerous characters to avoid injection attacks
  const sanitizeInput = (input: string) => {
    return input.replace(/<[^>]*>/g, "")  // This removes HTML tags
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: sanitizeInput(value) }) // sanitize input
    if (formStatus === "error") {
      setFormStatus(null)
      setErrorMessage("")
    }
  }

  const handleOtpInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "") // Allow only alphanumeric characters
    if (value.length > 1) return // Prevent entering more than one character

    const newOtpValues = [...otpValues]
    newOtpValues[index] = value
    setOtpValues(newOtpValues)
    setFormData({ ...formData, captcha: newOtpValues.join("") })

    // Automatically move to the next input box
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otpValues[index] === "") {
      // Move to the previous input box
      if (index > 0) {
        otpRefs.current[index - 1]?.focus()
      }
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name")
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address")
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message")
      return false
    }
    if (!showCaptcha || !/^[a-zA-Z0-9]{4,6}$/.test(formData.captcha)) {
      setErrorMessage("Security check failed. Please complete the captcha.")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setFormStatus("error")
      return
    }

    setFormStatus("sending")
    setErrorMessage("")

    try {
      if (!formRef.current) {
        throw new Error("Form configuration error")
      }

      const emailRes = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (emailRes.status !== 200) {
        throw new Error("Failed to send message")
      }

      setFormStatus("success")
      setFormData({ name: "", email: "", message: "", captcha: "" })
      setOtpValues(Array(6).fill(""))
    } catch (error) {
      console.error("Submission error:", error)
      setFormStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Submission failed. Please try again."
      )
    }
  }

  return (
    <div className="space-y-6">
      <h1 className={cn("text-4xl font-bold", theme === "light" ? "text-gray-800" : "text-white")}>
        Contact <span className="text-[#8DC63F] dark:text-[#00AEEF]">Us</span>
      </h1>

      <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        Get in touch with our team for inquiries and support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Contact Info */}
        <div className={cn("p-6 rounded-lg backdrop-blur-md border", theme === "dark" ? "bg-[#005b94]/20 border-[#005b94]/30" : "bg-[#56ab2f]/20 border-[#56ab2f]/30")}>
          <h3 className={cn("text-xl font-semibold mb-4", theme === "light" ? "text-gray-800" : "text-white")}>
            Contact Information
          </h3>
          <div className="space-y-3">
            <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
              <strong>Address:</strong> 72 Street, 1st industrial district, Obour city, Egypt
            </p>
            <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
              <strong>Phone:</strong> +20 109 002 0981, 02 44 891 304, +20 111 511 4445
            </p>
            <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
              <strong>Email:</strong> info@eits-egypt.com
            </p>
            <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
              <strong>Hours:</strong> Sunday-Thursday, 9:00 AM - 5:00 PM
            </p>
          </div>

          <div className="mt-6">
            <h3 className={cn("text-xl font-semibold mb-4", theme === "light" ? "text-gray-800" : "text-white")}>
              Our Location
            </h3>
            <div className="h-64 rounded-md overflow-hidden">
              <Map />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={cn("p-6 rounded-lg backdrop-blur-md border", theme === "dark" ? "bg-[#005b94]/20 border-[#005b94]/30" : "bg-[#56ab2f]/20 border-[#56ab2f]/30")}>
          <h3 className={cn("text-xl font-semibold mb-4", theme === "light" ? "text-gray-800" : "text-white")}>
            Send a Message
          </h3>

          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={cn("block mb-1", theme === "light" ? "text-gray-700" : "text-gray-200")}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={cn(
                  "w-full p-2 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2",
                  theme === "dark" ? "border-gray-600 text-white focus:ring-[#005b94]" : "border-gray-300 text-gray-800 focus:ring-[#56ab2f]"
                )}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={cn("block mb-1", theme === "light" ? "text-gray-700" : "text-gray-200")}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  "w-full p-2 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2",
                  theme === "dark" ? "border-gray-600 text-white focus:ring-[#005b94]" : "border-gray-300 text-gray-800 focus:ring-[#56ab2f]"
                )}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className={cn("block mb-1", theme === "light" ? "text-gray-700" : "text-gray-200")}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={cn(
                  "w-full p-2 rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2",
                  theme === "dark" ? "border-gray-600 text-white focus:ring-[#005b94]" : "border-gray-300 text-gray-800 focus:ring-[#56ab2f]"
                )}
                required
              />
            </div>

            <div>
              {/* Checkbox for "I'm not a robot" */}
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  id="not-a-robot"
                  checked={showCaptcha}
                  onChange={() => setShowCaptcha(!showCaptcha)}
                  className="w-5 h-5 text-[#56ab2f] border-gray-300 rounded focus:ring-[#56ab2f]"
                />
                <label
                  htmlFor="not-a-robot"
                  className={cn("text-lg font-medium", theme === "light" ? "text-gray-700" : "text-gray-200")}
                >
                  I'm not a robot
                </label>
              </div>

              {/* Captcha input field styled as OTP */}
              {showCaptcha && (
                <div className="space-y-4 mt-4">
                  <label htmlFor="captcha" className={cn("block mb-1 text-lg font-medium", theme === "light" ? "text-gray-700" : "text-gray-200")}>
                    Please complete the security check:
                  </label>
                  <p className={cn("text-sm", theme === "light" ? "text-gray-600" : "text-gray-400")}>
                    Enter any 6 random numbers.
                  </p>
                  <div className="flex space-x-2 justify-center">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        ref={(el) => { otpRefs.current[index] = el }} // Store input references
                        type="text"
                        maxLength={1}
                        value={otpValues[index]}
                        className={cn(
                          "w-12 h-12 text-center text-lg rounded-md border bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2",
                          theme === "dark" ? "border-gray-600 text-white focus:ring-[#005b94]" : "border-gray-300 text-gray-800 focus:ring-[#56ab2f]"
                        )}
                        onChange={(e) => handleOtpInputChange(e, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Send button */}
            {!showCaptcha && (
              <button
                type="button"
                onClick={() => setShowCaptcha(true)}
                className={cn(
                  "mt-4 px-4 py-2 rounded-md font-medium transition-colors w-full",
                  theme === "dark" ? "bg-[#005b94] text-white hover:bg-[#004a7a]" : "bg-[#56ab2f] text-white hover:bg-[#489327]"
                )}
              >
                Send
              </button>
            )}

            {/* Final submit button (only shown after captcha is completed) */}
            {showCaptcha && (
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={cn(
                  "mt-4 px-4 py-2 rounded-md font-medium transition-colors w-full",
                  theme === "dark" ? "bg-[#005b94] text-white hover:bg-[#004a7a]" : "bg-[#56ab2f] text-white hover:bg-[#489327]",
                  formStatus === "sending" && "opacity-70 cursor-not-allowed"
                )}
              >
                {formStatus === "sending" ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : "Submit"}
              </button>
            )}
          </form>

          {formStatus === "success" && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {formStatus === "error" && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

