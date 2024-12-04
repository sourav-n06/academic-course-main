import React from "react";

const benefitsData = [
  {
    icon: "📘",
    title: "Online Courses",
    description:
      "Access a wide variety of online courses designed to enhance your skills and knowledge across different domains.",
    isActive: false,
  },
  {
    icon: "🎓",
    title: "Earn A Certificate",
    description:
      "Complete courses and earn recognized certificates to showcase your achievements and boost your career prospects.",
    isActive: false,
  },
  {
    icon: "👩‍🏫",
    title: "Learn with Experts",
    description:
      "Gain insights from industry experts and experienced educators who provide valuable guidance throughout your learning journey.",
    isActive: false,
  },
  
];

const statsData = [
  {
    icon: "🎓",
    value: "3,000",
    label: "SUCCESS STORIES",
  },
  {
    icon: "🏅",
    value: "320",
    label: "TRUSTED TUTORS",
  },
  {
    icon: "📅",
    value: "1,000",
    label: "SCHEDULES",
  },
  {
    icon: "📘",
    value: "587",
    label: "COURSES",
  },
];

function Benefits() {
  return (
    <section className="bg-white">
      {/* Benefits Section */}
      <div className="py-12 px-6 lg:px-12 container mx-auto lg:flex lg:items-center lg:space-x-16">
        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661475861393-7b2561865338?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Girl with laptop"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

        {/* Benefits Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <p className="text-teal-500 uppercase tracking-wide font-bold text-xl sm:text-2xl text-center lg:text-left">
            Learn Anything
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mt-4 text-center lg:text-left">
            Benefits About Online Learning Expertise
          </h2>
          <div className="mt-8 space-y-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-lg hover:bg-teal-500 cursor-pointer hover:text-white transition duration-300"
              >
                <div className="text-4xl sm:text-5xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="relative w-full h-64 sm:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-wrap gap-8 sm:gap-12 justify-center items-center w-full max-w-6xl px-6 lg:px-12 text-white">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs sm:text-sm uppercase font-semibold mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
