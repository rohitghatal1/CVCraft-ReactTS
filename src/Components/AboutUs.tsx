import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import developerPhoto from "../assets/personPhotos/profilePic.jpg";

const AboutUs: React.FC = () => {
  const [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uSubject: "",
    uMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // reset
    setFormData({ uName: "", uEmail: "", uSubject: "", uMessage: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={developerPhoto}
                alt="Developer"
                className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Rohit Ghatal
                </h3>
                <p className="text-gray-600">Full Stack Web Developer</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              A passionate developer with a knack for designing modern,
              user-friendly interfaces. My journey began with curiosity for web
              design and has evolved into a fulfilling career in full stack web
              development.
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">
              Follow me:
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/rohit.rohit.ghatal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_rohit.ghatal_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/rohitghatal1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-black transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="uName"
              placeholder="Your Name"
              value={formData.uName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="email"
              name="uEmail"
              placeholder="Your Email"
              value={formData.uEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="text"
              name="uSubject"
              placeholder="Subject"
              value={formData.uSubject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              name="uMessage"
              placeholder="Message"
              rows={4}
              value={formData.uMessage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2.94 7.94a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06Zm16.72-1.88a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06-1.06l10-10a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
