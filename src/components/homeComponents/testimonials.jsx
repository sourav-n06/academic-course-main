import React from "react";

const testimonials = [
  {
    name: "ROGER SCOTT",
    title: "MARKETING MANAGER",
    text: "Driving innovative marketing strategies to elevate brand visibility and connect with target audiences effectively.",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ROGER SCOTT",
    title: "MARKETING MANAGER",
    text: "Crafting compelling campaigns that resonate with audiences and drive business growth in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ROGER SCOTT",
    title: "MARKETING MANAGER",
    text: "Leveraging data-driven insights to optimize marketing strategies and achieve outstanding campaign performance.",
    image:
      "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-6 sm;py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-teal-500 text-sm sm:text-base lg:text-lg uppercase font-bold">
          Testimonial
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
          Our Successful Students
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center group hover:bg-teal-500 cursor-pointer transition duration-300 ease-in-out"
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover mb-4"
            />
            {/* Name and Title */}
            <h3 className="font-bold text-lg sm:text-xl group-hover:text-white">
              {testimonial.name}
            </h3>
            <p className="text-teal-500 text-sm sm:text-base font-medium group-hover:text-white">
              {testimonial.title}
            </p>
            {/* Text */}
            <p className="text-gray-500 mt-4 text-sm sm:text-base group-hover:text-white">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
