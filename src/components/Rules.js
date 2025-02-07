import React, { useState } from "react";
import "./rules.css"; // Make sure to create this CSS file

const rulesData = {
  "Registration Questions": [
    {
      question: "What is the competition registration deadline, and how do I register?",
      answer: "The registration deadline is [date]. You can register on our website by following the registration link."
    },
    {
      question: "Is there assistance with team formation or finding team members?",
      answer: "Yes, we provide a team formation platform where you can find and join teams."
    },
    {
      question: "What are the eligibility criteria for registration?",
      answer: "Participants must be over 18 years old and currently enrolled in a university or a recent graduate."
    },
    {
      question: "What steps do I need to follow to complete the registration?",
      answer: "Complete the registration form, verify your email, and join the event Discord server."
    }
  ],
  "Technical Questions": [
    {
      question: "What are the competition development topics and challenges?",
      answer: "The competition focuses on AI, blockchain, and IoT development challenges."
    },
    {
      question: "What kind of projects can I develop for this hackathon?",
      answer: "You can develop any project that fits within the competition's themes and guidelines."
    },
    {
      question: "Will a development server and database environment be provided?",
      answer: "Yes, we will provide a development server and database environment for all participants."
    },
    {
      question: "What is the required development environment for the competition?",
      answer: "You can use any development environment you are comfortable with, but we recommend using VS Code."
    },
    {
      question: "What code editor is recommended for this hackathon?",
      answer: "We recommend using Visual Studio Code for its versatility and extensive plugin support."
    }
  ]
};

const Rules = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rules-container">
      <h1 className="faq-title">
        <span className="letter">F</span>
        <span className="letter">A</span>
        <span className="letter">Q</span>
      </h1>
      <div className="faq-grid">
        {Object.entries(rulesData).map(([category, questions], sectionIndex) => (
          <div key={category} className="faq-section">
            <h2 className="faq-category">{category}</h2>
            {questions.map((item, index) => {
              const uniqueIndex = `${sectionIndex}-${index}`;
              return (
                <div key={uniqueIndex} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFAQ(uniqueIndex)}>
                    {item.question} <span>{openIndex === uniqueIndex ? "−" : "+"}</span>
                  </button>
                  <div className={`faq-answer ${openIndex === uniqueIndex ? 'open' : ''}`}>
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;