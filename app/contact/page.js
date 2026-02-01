"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully! 🚀");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-purple-600 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-8">
        Have questions or feedback? Feel free to reach out!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-purple-100 p-6 rounded-lg shadow-md flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

