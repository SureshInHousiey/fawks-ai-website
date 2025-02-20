"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function Promise() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#F05A28]/20 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 md:p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B162C] dark:text-white mb-6">
              Our Bold Commitment:
            </h2>
            <p className="text-xl md:text-2xl text-[#0B162C] dark:text-white mb-8">
             Your AI Employees will triple your appointment bookings within 90 days—if not, we’ll personally fine-tune them until they do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 space-y-4"
          >
            <h3 className="text-2xl md:text-3xl text-[#0B162C] dark:text-white mb-6">Ready to get started?</h3>
            {/* <ScrollLink to="contact" smooth={true} duration={500}> */}
              <div className="inline-flex flex-col items-center">
                <Button onClick={handleScrollToContact} className="bg-[#F05A28] hover:bg-[#D04A18] text-white px-8 py-3 text-lg rounded-lg" size="lg">
                  Schedule A Call
                </Button>
                <span className="text-sm text-[#0B162C] dark:text-white/90 mt-2">
                  Hire Your First AI Employee Today
                </span>
              </div>
            {/* </ScrollLink> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

