import React from "react";
import DynamicHero from "../components/dynamicHero";

const PricingCard = ({ title, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl text-center font-bold mb-2">
          {title}
        </h3>
        <div className="text-2xl sm:text-3xl text-center font-bold mb-4 text-teal-500">
          ${price}
        </div>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="flex justify-center mt-4">
          <a
            href="./terms-condition"
            className="hover:bg-teal-500 hover:text-white hover:border-none text-teal-600 border border-teal-600 font-medium py-2 px-8 sm:px-12 rounded-lg text-sm sm:text-base"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
};

const pricingData = [
  {
    title: "BASIC PLAN",
    price: "49K",
    description:
      "Get started with the fundamentals of coding and problem-solving. Perfect for beginners looking to build a strong foundation.",
  },
  {
    title: "BEGINNER PLAN",
    price: "79K",
    description:
      "Explore foundational concepts in programming and data structures, designed for students taking their first steps in tech.",
  },
  {
    title: "PREMIUM PLAN",
    price: "109K",
    description:
      "Dive deeper into advanced topics like algorithms and software development to enhance your technical skill set.",
  },
  {
    title: "ULTIMATE PLAN",
    price: "149K",
    description:
      "Master full-stack development with comprehensive training in both front-end and back-end technologies.",
  },
  {
    title: "PRO PLAN",
    price: "199K",
    description:
      "Elevate your career with expert-level training in machine learning, data science, and cutting-edge technologies.",
  },
  {
    title: "ADVANCED PLAN",
    price: "249K",
    description:
      "Gain industry-ready skills through hands-on projects in AI, blockchain, and cloud computing, preparing you for top roles.",
  },
  {
    title: "ENTERPRISE PLAN",
    price: "299K",
    description:
      "Tailored for professionals, this plan offers in-depth courses in leadership, product management, and enterprise solutions.",
  },
  {
    title: "EXCLUSIVE PLAN",
    price: "399K",
    description:
      "Experience personalized mentorship and access premium resources for mastering high-demand skills in the tech industry.",
  },
  
];

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <DynamicHero
        title="Transparent Pricing Plans"
        description="Choose the plan that fits your needs. No hidden charges, just simple and affordable pricing designed to help you succeed."
        image="https://images.unsplash.com/photo-1554412663-7b99cf315535?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Pricing Section */}
      <div className="bg-gray-50 py-10 sm:py-12 md:py-16">
        <div className="mx-auto px-6 sm:px-8 md:px-10 lg:px-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
            Pricing & Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-teal-50 py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-teal-600">
            Why Choose Our Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-2 text-teal-600">
                Flexible Options
              </h3>
              <p className="text-gray-600">
                Our pricing plans are designed to suit businesses of all sizes,
                ensuring flexibility and value.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-2 text-teal-600">
                No Hidden Charges
              </h3>
              <p className="text-gray-600">
                We believe in transparency. What you see is what you pay—no
                surprise fees.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-2 text-teal-600">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to
                assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
