import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
const faqData = [
  {
    question: "What is The Chills Room about?",
    answer:
      "The Chills Room is a member-driven community with a strong focus on education and personal growth. Our members come from various sectors within the Web3 space, with an emphasis on NFTs, Web3 gaming, and other niche. Our mission is to expand the awareness of these emerging fields within our geographical region while enhancing the financial success of our members by helping them turn their skills into profitable ventures.",
  },
  {
    question: "⁠How to become a member of the community?",
    answer: `Joining our community is by invite only. Look out for the application link on the Admin account on X; apply, and if you are accepted, you will get 
      an invite link from Abefe or Sanmi only.`,
  },
  {
    question: "What benefits do I get from being part of this community?",
    answer: `Being a member of The Chills Room gives you access to a spectrum of benefits 
    designed to help you grow, create, and connect. You'll have the opportunity to network with
     like-minded creators, gamers, and Web3 enthusiasts, collaborate on innovative projects. Also, members enjoy exclusive access to resources, educational content, and events such as workshops, NFT whitelists, and other exclusive partner communities. Being part of our community also means you're contributing to and shaping the future of web3 in a supportive, inclusive environment.`,
  },
  {
    question: "How to Partner/Collaborate with Us?",
    answer: `
    We welcome partnerships and collaborations with project founders, community leaders, and collaboration managers who are interested in working with The Chills Room. To initiate a discussion, please reach out via mail, or directly message our community page or the Founder’s X account.`,
  },
  {
    question: "⁠How to join our Gamers & Content Creator Clique?",
    answer: `Currently, the only way to become a part of our Gamers Clique is by applying “here(link)”. Upon submission, candidates will undergo a one-on-one interview with both the Gamers Captain and 
    Content Head before receiving the role.`,
  },

];
const radialStyle = {
  borderRadius: "344.642px",
  filter: "blur(92.249px)",
};

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
