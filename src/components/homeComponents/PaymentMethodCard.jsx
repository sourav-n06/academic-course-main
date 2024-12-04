import React from "react";

const PaymentMethodCard = ({ title, description, paymentLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h4 className="font-semibold text-2xl text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={paymentLink}
          className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:from-orange-500 hover:to-red-500 transition duration-300 ease-in-out"
        >
          PAY NOW
        </a>
      </div>
    </div>
  );
};

const PaymentLandingPage = () => {
  const paymentMethods = [
    {
      title: "Credit Card",
      description: "Securely pay using your credit or debit card.",
      paymentLink: "/pay-later", // Link to a new page after payment (for example, a thank-you page)
    },
    {
      title: "PayPal",
      description: "Quick and secure payment using PayPal.",
      paymentLink: "/pay-later", // Link to a new page after payment (for example, a thank-you page)
    },
    {
      title: "Stripe",
      description: "Pay via Stripe using your preferred method.",
      paymentLink: "/pay-later", // Link to a new page after payment (for example, a thank-you page)
    },
    {
      title: "UPI",
      description: "Pay easily via UPI for quick transactions (India only).",
      paymentLink: "/pay-later", // Link to a new page after payment (for example, a thank-you page)
    },
  ];

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Choose Your Payment Method
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {paymentMethods.map((method, index) => (
            <PaymentMethodCard
              key={index}
              title={method.title}
              description={method.description}
              paymentLink={method.paymentLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentLandingPage;
