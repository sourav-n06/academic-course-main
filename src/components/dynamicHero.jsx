import React from "react";

const DynamicHero = ({title, description, image}) => {
  return (
    <div className="relative bg-blue-50 min-h-screen z-0"> 
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: "right top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  
      <div className="flex items-center justify-center relative z-10 w-full">
        <div className="max-w-xl text-center space-y-6 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white mt-2 md:mt-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};

export default DynamicHero;
