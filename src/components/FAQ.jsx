import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first FAQ

  const handleFAQClick = (index) => {
    setActiveIndex(index);
  };

  const faqData = [
    {
      question:
        "What makes NE Structures’ pre-engineered buildings different from traditional construction methods?",
      answer:
        "NE Structures’ pre-engineered buildings offer faster construction, cost savings, and customization options, making them efficient and flexible alternatives to traditional methods. Our designs also ensure optimal material usage, reducing waste and enhancing structural integrity.",
    },
    {
      question:
        "How does NE Structures ensure the quality and durability of their pre-engineered products?",
      answer:
        "We adhere to strict international standards and conduct thorough quality checks at every stage, ensuring durable and reliable structures. Our rigorous testing protocols and use of high-grade steel enhance the lifespan and safety of our buildings.",
    },
    {
      question:
        "What is the process for designing and manufacturing a custom pre-engineered building with NE Structures?",
      answer:
        "We start with your requirements, design using advanced software, manufacture in our facility, and then assemble on-site, ensuring clear communication throughout. Our process includes detailed structural analysis and precise fabrication, ensuring seamless project execution.",
    },
    {
      question:
        "Can NE Structures handle large-scale projects, including high-rise steel structures and industrial facilities?",
      answer:
        "Yes, we have the expertise to manage large-scale projects, delivering high-quality results on time and within scope. Our team is equipped with the latest technology and tools to handle complex engineering challenges efficiently.",
    },
    {
      question:
        "How does NE Structures incorporate sustainability into their pre-engineered building designs?",
      answer:
        "We use energy-efficient materials and optimize designs to reduce waste, making our buildings environmentally friendly. Additionally, our structures are designed for long-term energy savings, with options for incorporating renewable energy solutions.",
    },
    {
      question:
        "What types of buildings and facilities can NE Structures design and manufacture?",
      answer:
        "We design and manufacture warehouses, cold storage facilities, industrial sheds, factory buildings, and high-rise steel structures. Each project is engineered for specific load requirements and environmental conditions, ensuring optimal performance.",
    },
    {
      question:
        "Why should I choose NE Structures as my partner for pre-engineered building projects?",
      answer:
        "We offer efficient, high-quality, and cost-effective solutions tailored to your business needs. Our proven track record and advanced engineering capabilities ensure that every project is executed with precision and reliability.",
    },
  ];

  return (
    <div className="homeInfoContainer FAQ">
      <div className="heading">
        <p>
          Frequently Asked <br />
          Questions
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque eget
          adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam arcu.
        </span>
      </div>
      <div className="FAQdiv">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`FAQset ${index === activeIndex ? "activeFAQ" : ""}`}
            onClick={() => handleFAQClick(index)}
          >
            <div className="FAQheading">
              <p>{faq.question}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1472_198"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect
                    y="16"
                    width="16"
                    height="16"
                    transform="rotate(-90 0 16)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_1472_198)">
                  <path
                    d="M14.1829 5.71029L7.51628 12.377L0.849609 5.71029L2.03294 4.52695L7.51628 10.0103L12.9996 4.52695L14.1829 5.71029Z"
                    fill="#606060"
                  />
                </g>
              </svg>
            </div>
            <div className="FAQans">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
