"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const industries = [
  { value: "real-estate", label: "Real Estate" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "retail", label: "Retail" },
  { value: "restaurant", label: "Restaurant" },
  { value: "automotive", label: "Automotive" },
  { value: "financial-services", label: "Financial Services" },
  { value: "insurance", label: "Insurance" },
  { value: "travel", label: "Travel & Hospitality" },
  { value: "telecom", label: "Telecommunications" },
  { value: "logistics", label: "Logistics & Transportation" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional-services", label: "Professional Services" },
  { value: "construction", label: "Construction" },
  { value: "entertainment", label: "Entertainment & Events" },
  { value: "fitness", label: "Fitness & Wellness" },
  { value: "legal", label: "Legal Services" },
  { value: "non-profit", label: "Non-Profit" },
  { value: "government", label: "Government" },
  { value: "other", label: "Other" },
]

const Hero = () => {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    phone: string
    industry: string
  }>({
    name: "",
    email: "",
    phone: "",
    industry: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Format the phone number with country code for submission
      const formattedData = {
        ...formData,
        phone: formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`,
      }
      const response = await fetch("https://n8n.fawks.ai/webhook/15ec4ba0-becd-4665-8af3-a02aa0d22c92", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      })

      if (!response.ok) {
        throw new Error("Failed to initiate call")
      }

      // const data = await response.json() //data not in use
      alert("We will call you in 10 seconds!")
      setFormData({ name: "", email: "", phone: "", industry: "" })
    } catch (error) {
      console.error("Error initiating call:", error)
      setError("Failed to initiate call. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300" id="hero">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 pr-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#0B162C] dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Turning conversations into growth with personalised AI voice agents
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trained on your data to engage smarter and close faster.
          </motion.p>
          <motion.div
            className="space-y-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F05A28]" />
              <p className="text-gray-700 dark:text-gray-300">Remembers Past Conversations</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F05A28]" />
              <p className="text-gray-700 dark:text-gray-300">Can be run locally</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button onClick={handleScrollToContact} className="bg-[#F05A28] text-white hover:bg-[#D04A18] text-lg px-8 py-3">Book a demo</Button>
          </motion.div>
        </div>
        <div className="md:w-5/12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#0B162C] dark:text-white transition-colors duration-300">
              Get Started
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                className="w-full bg-gray-100 dark:bg-gray-700 transition-colors duration-300 border-gray-200 dark:border-gray-600"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 dark:bg-gray-700 transition-colors duration-300 border-gray-200 dark:border-gray-600"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
              <div className="phone-input-container">
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={(phone) => setFormData((prev) => ({ ...prev, phone: phone }))}
                  inputProps={{
                    required: true,
                    className: 'w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md',
                    placeholder: "Mobile Number",
                  }}
                  enableSearch={true}
                  disableSearchIcon={true}
                  searchStyle={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    borderRadius: "6px",
                  }}
                  dropdownStyle={{
                    width: "300px",
                  }}
                  preferredCountries={["us", "gb", "in"]}
                  inputStyle={{
                    paddingLeft: '35px !important',
                    paddingRight: '10px !important',
                    paddingTop: '10px !important',
                    paddingBottom: '10px !important',
                    fontSize: '16px',
                    width: '100%',
                    height: '45px',
                  }}
                  countryCodeEditable={false}
                />
              </div>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                required
              >
                <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-700 transition-colors duration-300 border-gray-200 dark:border-gray-600">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto py-2">
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button
                type="submit"
                className="w-full bg-[#F05A28] text-white hover:bg-[#D04A18]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Initiating call..." : "Call me in 1 minute"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

