// components/Footer.jsx
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="md:container md:mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-4">
        <div className="text-white text-xl font-bold mb-6 md:mb-0">
          <Link href="/">{"</>"}AHMED ALI</Link>
        </div>

        <div>
          <h3 className="text-white mb-2 font-bold">Quick Links</h3>
          <ul>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-2">Email: info@ahmedali.com</p>
          <p>Phone: when requested!</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ahmedali53/"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AhmedAliIbrahim53"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ahmed.aly53/"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/ahmed.aly53"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2023 AHMED ALI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
