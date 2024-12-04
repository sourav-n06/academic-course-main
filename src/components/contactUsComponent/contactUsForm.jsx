import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [name, setName] = useState(""); // Initialize as empty string
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_t8r1hjx";
    const publicKey = "hDEpcUY50Fhpy3ZqW";
    const templateId = "template_qf6nduj";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Academic-Course",
      message: message,
      subject: subject,
      contact: contact,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent successfully!"); // Show success toast
        // Reset state to avoid undefined values
        setName("");
        setEmail("");
        setContact("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error sending email. Please try again."); // Show error toast
        console.error("Error sending email", error);
      });
  };

  return (
    <div>
      <div className="bg-gray-50 flex flex-col lg:flex-row p-8 lg:p-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-4 lg:p-6 flex flex-col items-stretch">
          <h2 className="text-xl lg:text-2xl font-bold mb-3">Contact us</h2>
          <p className="text-sm lg:text-base">
            We're open for any suggestion or just to have a chat
          </p>
          <div className="my-6 text-sm lg:text-base flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">ADDRESS:</p>
              <p className="text-sm">
                Kolkata, WestBengal, India 🇮🇳
              </p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">EMAIL:</p>
              <p className="text-sm">sweta@gamil.com</p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">PHONE:</p>
              <p className="text-sm">+91 86453 73526</p>
            </div>
          </div>
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name || ""} // Ensure value is never undefined
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email || ""} // Ensure value is never undefined
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Contact
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={contact || ""} // Ensure value is never undefined
                onChange={(e) => setContact(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter your Contact Number"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject || ""} // Ensure value is never undefined
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message || ""} // Ensure value is never undefined
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mt-4 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="flex-1 bg-gray-100 flex items-stretch">
          <div className="w-full h-[450px] lg:h-auto">
            <iframe
              className="w-full h-full rounded-md"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=India,%20kolkata+(Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
