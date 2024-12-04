import React from "react";
import Hero from "../components/homeComponents/hero";
import Blogs from "../components/homeComponents/blogs";
import Benefits from "../components/homeComponents/benefits";
import OnlineCourses from "../components/homeComponents/onlineCourses";
import Testimonials from "../components/homeComponents/testimonials";
import PricingSection from "../components/homeComponents/pricingSection";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <OnlineCourses />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <Blogs />
      </section>

      <section>
        <PricingSection />
      </section>
    </div>
  );
};

export default Home;
