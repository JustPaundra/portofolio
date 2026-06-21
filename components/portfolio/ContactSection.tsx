"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export default function ContactSection() {
  const email = profile.email || "madepaundra@gmail.com";
  const phone = profile.phone || "+62 812-4674-0380";
  const location = profile.location || "Bali, Indonesia";

  const contactDetails = [
    { icon: <Mail className="w-5 h-5 text-blue-500" />, label: "Email Saya", value: email, href: `mailto:${email}` },
    { icon: <Phone className="w-5 h-5 text-blue-500" />, label: "Telepon / WhatsApp", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: <MapPin className="w-5 h-5 text-blue-500" />, label: "Lokasi", value: location, href: `https://maps.google.com/?q=${encodeURIComponent(location)}` },
  ];

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

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Mari Diskusikan Ide Anda!
              </h3>
              <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base">
                Saya selalu terbuka untuk berkolaborasi dalam proyek web, konsultasi arsitektur frontend/backend, atau sekadar bertukar pikiran seputar perkembangan teknologi terkini. Kirimkan pesan Anda melalui kontak berikut.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="w-full space-y-4 pt-4 text-left">
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
        </div>

      </div>
    </section>
  );
}
