import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [button, setButton] = useState(false);
  const faqs = [
    {
      question: "Are the web and internet the same ?",
      answer:
        "No, they are not. The internet is the global network of connected computers or the internet is Network of Networks, while the web is a system of websites and pages you access through the internet.",
    },
    {
      question: "What is a website vs a webpage?",
      answer:
        "A website is a collection of web pages under one address, while a web page is a single page you see in your browser.",
    },
    {
      question: "What does debugging mean?",
      answer:
        "Debugging is the process of finding mistakes in code and fixing them so the program works correctly.",
    },
    {
      question: "Domain vs URL - what's the difference?",
      answer:
        "A domain is the main address of a website like example.com, while a URL is the full address of a specific page or file on that website, like example.com/about.",
    },
    {
      question: "What is GitHub for? ",
      answer:
        " Github is a platform where developers store, share, and track changes in their code. It's also great for collaborating on projects with others.",
    },
  ];

  return (
    <div className=" p-5 max-w-[400px] md:max-w-[600px] md:w-[600px] sm:w-[550px] sm:max-w-[550px] h-auto mx-auto sm:px-6 sm:py-3 rounded-3xl 
    shadow-[0_0_15px_#00bfff,0_0_25px_#00bfff,0_0_25px_#00bfff] border-2 border-[#00cfff] bg-transparent
    hover:shadow-[0_0_20px_#00bfff,0_0_30px_#00bfff,0_0_40px_#00bfff] ">
      <h1 className="text-xl sm:text-2xl text-cyan-500 font-bold mb-4 text-center">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-blue-500 
          shadow-[0_0_5px_#00bfff] border rounded-lg mb-3 overflow-hidden w-full max-w-full "
       >
          <div 
           onClick={() => setOpenIndex(openIndex === index ? null : index) }
           className="flex justify-between gap-2 p-2 sm:p-3 md:p-4 w-full cursor-pointer 
           shadow-[inset_0_0_10px_#00bfff,0_0_30px_#00bfff]  hover:bg-[#0ba9de]">
            <span className="text-[#e0f7ff] sm:text-base md:text-lg font-medium" >
              {faq.question}
            </span>
            <button
             
            className="text-[#6adaff] text-xl ">
              {openIndex === index ? <FiMinusCircle /> :  <FiPlusCircle />}
            </button>
          </div>

          {/* Animated Answer */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-96 opacity-100 p-2"
                : "max-h-0 opacity-0 p-0"
            }`}
          >
            <p className="text-gray-700 sm:text-base md:text-lg break-words" style={{color: "#7ab8d4"}}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;