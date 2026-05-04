"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [messages, setMessages] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toLocaleString(),
      };

    
      setMessages((prev) => [newMessage, ...prev]);

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 2000);
    }, 1000);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/5 rounded-2xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
        />

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 text-white h-28"
        />

        <button className="bg-purple-600 px-6 py-3 rounded-full text-white">
          Send Message
        </button>

        {submitted && <p className="text-yellow-400">Sending...</p>}
      </motion.form>

      
      <div className="mt-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white/10 p-4 rounded-xl text-white">
            <p className="text-green-400 font-semibold">Message received</p>

            <p>
              <span className="font-bold">Name:</span> {msg.name}
            </p>

            <p>
              <span className="font-bold">Email:</span> {msg.email}
            </p>

            <p>
              <span className="font-bold">Message:</span> {msg.message}
            </p>

            <p className="text-xs text-gray-400 mt-2">{msg.timestamp}</p>
          </div>
        ))}
      </div>
    </>
  );
}
