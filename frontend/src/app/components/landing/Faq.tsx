"use client"

import { useState } from "react";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const faqData = [
    {
      question: "What is a TikTok wallet?",
      answer:
        "A TikTok wallet is a digital wallet designed for use on the TikTok platform. It allows users to store, manage, and transfer digital assets such as TikTok Coins and Diamonds within the app.",
    },
    {
      question: "How can I create a TikTok wallet?",
      answer:
        "Creating a TikTok wallet is easy. Simply go to your TikTok account settings, locate the 'Wallet' section, and follow the on-screen instructions to set up your wallet.",
    },
    {
      question: "What can I do with my TikTok wallet?",
      answer:
        "With your TikTok wallet, you can purchase virtual gifts, tip content creators, and make in-app purchases on the TikTok platform. It's a convenient way to support your favorite creators and enhance your TikTok experience.",
    },
    {
      question: "Is my TikTok wallet secure?",
      answer:
        "Yes, TikTok takes the security of your wallet seriously. They use encryption and other security measures to protect your wallet and transactions. Additionally, you can set up additional security features like PIN codes or biometric authentication.",
    },
    {
      question: "How can I add funds to my TikTok wallet?",
      answer:
        "You can add funds to your TikTok wallet using various payment methods, such as credit/debit cards, PayPal, or mobile payment options. Simply go to your wallet settings and select 'Add Funds' to choose your preferred payment method.",
    },
    {
      question: "Can I withdraw money from my TikTok wallet?",
      answer:
        "As of now, TikTok wallets are primarily designed for in-app purchases and transactions within the TikTok platform. Withdrawal options may vary depending on your region and TikTok's policies.",
    },
    {
      question: "Are there any fees associated with using a TikTok wallet?",
      answer:
        "TikTok may apply transaction fees or currency conversion fees for certain wallet activities. It's advisable to review TikTok's terms and conditions or wallet policies to understand any applicable fees.",
    },
    {
      question: "What should I do if I encounter issues with my TikTok wallet?",
      answer:
        "If you encounter any issues or have questions about your TikTok wallet, you can reach out to TikTok's customer support for assistance. They can help you with troubleshooting and resolving wallet-related problems.",
    },
    // Add more FAQ data as needed
  ];

  return (
    <section className="bg-white py-16" id={"faq"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ content */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 overflow-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4">
              <button
                className="flex justify-between w-full focus:outline-none"
                onClick={() => toggleTab(index)}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <svg
                  className={`transition-transform transform${
                    activeTab === index ? "rotate-180" : ""
                  } w-6 h-6`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.293 8.707a1 1 0 0 0-1.414 0L12 12.586 7.707 8.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {activeTab === index && (
                <div className="mt-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;