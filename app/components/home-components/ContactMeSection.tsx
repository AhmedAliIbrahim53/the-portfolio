"use client";
import { useState } from "react";
import Image from "next/image";

const ContactMeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error message when user starts typing again
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add validation logic here
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Add code here to handle form submission (e.g., sending an email)
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact-me"
      className="md:container mx-auto py-16 flex flex-col md:flex-row items-center justify-around"
    >
      <div className="px-4">
        <div className="pb-10 md:pb-0">
          <Image
            className="bg-blend-multiply"
            src={"/contact-me.jpg"}
            alt={"home design image"}
            width={500}
            height={500}
          />
        </div>
        <p className="text-lg mb-6">
          Interested in working with me? Feel free to get in touch.
        </p>
      </div>
      <div className="w-full md:mx-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="text-black  mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMeSection;
