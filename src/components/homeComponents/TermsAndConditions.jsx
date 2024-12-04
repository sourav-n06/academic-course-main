import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleDisagree = () => {
    setAgreed(false);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 animate-slide-in-top">Terms and Conditions</h1>
        <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
          Please read our{' '}
          <a href="/terms-condition" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Terms and Conditions
          </a>{' '}
          before proceeding.
        </p>

        <div className="mb-4">
          <h2 className="font-semibold text-lg text-gray-800 mb-2">Subscription Terms</h2>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm">
            By subscribing to our service, you agree to the following terms:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2 text-xs sm:text-sm">
            <li><strong>Subscription Duration:</strong> Your subscription will continue on a monthly/annual basis depending on the plan you choose.</li>
            <li><strong>Billing Cycle:</strong> Billing will be charged on a recurring monthly/annual basis. The first charge will occur immediately upon subscription.</li>
            <li><strong>Auto-Renewal:</strong> Your subscription will automatically renew unless you cancel it at least 24 hours before the next renewal date.</li>
            <li><strong>Cancellation:</strong> You can cancel your subscription at any time before the renewal date to avoid the next charge.</li>
          </ul>
        </div>

        <div className="flex justify-center mb-4">
          <button
            className="bg-green-500 text-white px-4 py-1.5 text-sm rounded-lg shadow-md transition-transform duration-300 hover:scale-105 disabled:opacity-50"
            onClick={handleAgree}
            disabled={agreed}
          >
            Agree
          </button>
          <button
            className="bg-red-500 text-white px-4 py-1.5 text-sm rounded-lg shadow-md ml-4 transition-transform duration-300 hover:scale-105 disabled:opacity-50"
            onClick={handleDisagree}
            disabled={!agreed}
          >
            Disagree
          </button>
        </div>

        {agreed && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Choose Payment Method</h2>
            <button
              className="bg-blue-500 text-white px-4 py-1.5 text-sm rounded-lg shadow-md mr-4 transition-transform duration-300 hover:scale-105 disabled:opacity-50"
              onClick={() => handlePaymentMethodChange('autoDebit')}
              disabled={paymentMethod === 'autoDebit'}
            >
              Auto Debit
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-1.5 text-sm rounded-lg shadow-md transition-transform duration-300 hover:scale-105 disabled:opacity-50"
              onClick={() => handlePaymentMethodChange('normalDebit')}
              disabled={paymentMethod === 'normalDebit'}
            >
              Normal Debit
            </button>

            {paymentMethod && (
              <div className="mt-4 text-gray-800">
                <p className="text-sm">You selected: {paymentMethod === 'autoDebit' ? 'Auto Debit' : 'Normal Debit'}</p>

                {/* Dynamically styled "Continue to Pay" button */}
                <a 
                  href="/pay-now" 
                  className={`inline-block text-white px-6 py-2 text-sm rounded-lg shadow-md font-semibold transition-all duration-300 mt-4 
                    ${paymentMethod === 'autoDebit' 
                      ? 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700' 
                      : 'bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700'}
                  `}
                >
                  Continue to Pay
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;
