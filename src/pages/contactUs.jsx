import React from "react";
import ContactUsForm from "../components/contactUsComponent/contactUsForm";
import DynamicHero from "../components/dynamicHero";

const ContactUs = () => {
  return (
    <div>
      <DynamicHero
        title="Get in Touch with Us"
        description="Have questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible. We're here to help!"
        image="https://images.unsplash.com/19/desktop.JPG?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
