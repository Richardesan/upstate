import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
const faqData = [
  {
    question: "What residential electrical services do you offer in Chesnee, SC?",
    answer:
      "We provide a full range of residential electrical services including wiring, panel upgrades, lighting installations, outlet repairs, circuit troubleshooting, and more — all performed by licensed electricians to ensure safety and reliability.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Upstate Electrical Systems LLC is fully licensed and insured. We strictly adhere to all safety and building regulations to give our clients peace of mind and top-tier service.",
  },
  {
    question: "Do you offer emergency electrical services?",
    answer:
      "Absolutely. We understand that electrical issues can happen anytime. We provide prompt emergency services to ensure your home remains safe and powered when you need it most.",
  },
  {
    question: "What areas besides Chesnee, SC do you serve?",
    answer:
      "In addition to Chesnee, we serve surrounding areas throughout the Upstate South Carolina region. If you’re unsure whether we cover your area, feel free to contact us.",
  },
  {
    question: "How can I schedule an appointment or request a quote?",
    answer:
      "You can easily schedule a service or request a free quote by calling us directly or filling out the contact form on our website. We’ll get back to you promptly with the next steps.",
  },
];



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="text-black py-20 relative w-7/12 max-md:w-full mx-auto">
  
      <div>
        <p className="uppercase text-4xl mb-5 text-center font-semibold max-sm:text-3xl">
          faq
        </p>
        
      </div>

      <div className=" space-y-3 text-black rounded-md bg-[#556A7D4D] p-4">
        {faqData.map((item, index) => (
          <section
              onClick={() => toggleFaq(index)}

            key={index}
            className=" rounded-2xl overflow-hidden transition-all duration-300 relative"
          >
         
            <div
              className="flex justify-between items-start gap-x-2 py-3 px-6 max-sm:px-4 max-sm:py-3 cursor-pointer"
            >
              <h1
                className={`text-lg syne-regular   max-sm:text-base rotate-0`}
              >
                {item.question}
              </h1>
              <FaAngleUp   className={`${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-all duration-100 text-xl`}/>
             
            </div>

            <div
              className={`transition-all duration-150  px-12  ${
                openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              } overflow-hidden max-sm:px-7`}
            >
              <p className="text-base rotate-0 max-sm:text-sm">{item.answer}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Faq;
