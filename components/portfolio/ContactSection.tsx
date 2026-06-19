"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const email = profile.email || "madepaundra@gmail.com";
  const phone = profile.phone || "+62 812-4674-0380";
  const location = profile.location || "Bali, Indonesia";

  const contactDetails = [
    { icon: <Mail className="w-5 h-5 text-blue-500" />, label: "Email Saya", value: email, href: `mailto:${email}` },
    { icon: <Phone className="w-5 h-5 text-blue-500" />, label: "Telepon / WhatsApp", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: <MapPin className="w-5 h-5 text-blue-500" />, label: "Lokasi Kantor", value: location, href: `https://maps.google.com/?q=${encodeURIComponent(location)}` },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !emailInput || !message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmailInput("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f1117] border-t border-[#2d3148]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Hubungi <span className="text-blue-500">Saya</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Mari Diskusikan Ide Anda!
              </h3>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">
                Saya selalu terbuka untuk berkolaborasi dalam proyek web, konsultasi arsitektur frontend/backend, atau sekadar bertukar pikiran seputar perkembangan teknologi terkini. Kirimkan pesan Anda melalui formulir atau kontak sosial berikut.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-4 pt-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1d27] border border-[#2d3148] hover:border-blue-500/50 hover:bg-[#252836] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#252836] group-hover:bg-[#2563eb]/10 flex items-center justify-center transition-colors">
                    {detail.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider block">
                      {detail.label}
                    </span>
                    <span className="text-sm font-medium text-white block truncate">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-[#252836] border border-[#2d3148] text-white rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-500"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full bg-[#252836] border border-[#2d3148] text-white rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-500"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan detail pesan atau pertanyaan Anda di sini..."
                    className="w-full bg-[#252836] border border-[#2d3148] text-white rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all disabled:opacity-80 disabled:cursor-not-allowed group"
                >
                  {status === "idle" && (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Check className="w-4 h-4 text-green-300 animate-bounce" />
                      <span>Pesan Terkirim!</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
