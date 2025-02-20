"use client";
import { AnimatedHeading } from "./ui/animated-heading";
import { InlineWidget } from "react-calendly"; // Import Calendly component

const ContactUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-2">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Book a Demo Call
        </AnimatedHeading>

        {/* Embed the Calendly widget */}
        <div className="flex justify-center mt-9">
          <InlineWidget 
            url="https://calendly.com/fawksaivoicecalls/30min" 
            styles={{ height: "600px", width: "100%", maxWidth: "400px" }} 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
