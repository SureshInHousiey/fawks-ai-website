"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { parsePhoneNumberFromString } from "libphonenumber-js";
// const companies = [{ name: "Zimyo", webhookUrl: "https://n8n.fawks.ai/webhook/zimyo-demo" }]
const companies = [{ name: "Zimyo", webhookUrl: "https://n8n.fawks.ai/webhook/zimyo-demo" },
                   { name: "Al-Jameel Showroom", webhookUrl: "https://n8n.fawks.ai/webhook/Al-Jameel-Showroom-demo" }]
export default function CustomizedDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phoneValid, setPhoneValid] = useState(true)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validatePhoneNumber = (value: string, country: any) => {

    let rawPhoneNumber = value.replace(new RegExp(`^${country.dialCode}`), "");

    const parsedPhoneNumber = parsePhoneNumberFromString(rawPhoneNumber, country.iso2?.toUpperCase());
    let isValid = parsedPhoneNumber ? parsedPhoneNumber.isValid(): false
    setPhoneValid(isValid)
    return isValid;
  };

  const handleCompanyChange = (value: string) => {
    setFormData((prev) => ({ ...prev, company: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const urlPattern = /\.(com|in|net|org|io|co|us|uk|au|gov|edu|info)(\/|$)/i;
    if (formData.website && !urlPattern.test(formData.website)) {
      alert("Please enter a valid website URL.");
      setIsSubmitting(false);
      return;
    }
    if (!phoneValid || !formData.phone) {
      alert("Please enter a valid phone number.")
      setIsSubmitting(false)
      return
    }
    const selectedCompany = companies.find((c) => c.name === formData.company)
    if (!selectedCompany) {
      alert("Please select a company")
      setIsSubmitting(false)
      return
    }
    try {
      const formattedData = {
        ...formData,
        phone: formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`,
      }
      const response = await fetch(selectedCompany.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      alert("We will call you in 1 minute!")
      setFormData({ name: "", email: "", phone: "", website: "", company: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#0B162C] dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-[#0B162C] dark:text-white">Customized AI Demo</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Experience our tailored AI solution for your company
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="phone-input-container">
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={(phone) => {
                setFormData((prev) => ({ ...prev, phone: phone }))
              }}
              isValid={(value, country) => validatePhoneNumber(value, country)}
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
          <Input
            name="website"
            type="text"
            placeholder="Website Address (optional)"
            value={formData.website}
            onChange={handleInputChange}
          />
          <Select value={formData.company} onValueChange={handleCompanyChange} required>
            <SelectTrigger>
              <SelectValue placeholder="Select your company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company.name} value={company.name}>
                  {company.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-[#F05A28] hover:bg-[#D04A18] text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Call me in 1 minute"}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
