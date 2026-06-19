"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

const getInitials = (name: string) => {
  if (!name) return "P";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export default function AboutSection() {
  const name = profile.name || "Made Paundra";
  const title = profile.title || "Fullstack Web Developer";
  const bio = profile.bio || "Melalui program Bangkit Academy (oleh Google, Gojek, Tokopedia, & Traveloka), saya telah mendalami pengembangan Android untuk membangun aplikasi yang kokoh dan berorientasi pada pengguna. Pengalaman ini diperkuat dengan peran terbaru saya sebagai Student Intern di PT Thunder Labs Indonesia, di mana saya mengasah kemampuan teknis dalam aplikasi mobile dan pemrograman game.Selain pengembangan mobile, saya memiliki pengalaman dalam merancang dan mengimplementasikan Sistem Informasi Manajemen SDM menggunakan Laravel. Hal ini membuktikan kemampuan saya dalam menangani kebutuhan bisnis yang kompleks melalui eksekusi teknis yang efisien. Saya adalah seorang pembelajar cepat yang siap memberikan kontribusi nyata dan inovatif dalam tim teknologi ";
  const avatar = profile.avatar;
  const initials = getInitials(name);

  // Field Fallbacks
  const email = profile.email || "madepaundra@gmail.com";
  const phone = profile.phone || "+62 812-4674-0380";
  const location = profile.location || "Bali, Indonesia";
  const website = profile.website || "www.example.com";

  const infoItems = [
    { icon: <Mail className="w-5 h-5 text-blue-500" />, label: "Email", value: email, href: `mailto:${email}` },
    { icon: <Phone className="w-5 h-5 text-blue-500" />, label: "Telepon", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: <MapPin className="w-5 h-5 text-blue-500" />, label: "Lokasi", value: location, href: `https://maps.google.com/?q=${encodeURIComponent(location)}` },
    { icon: <Globe className="w-5 h-5 text-blue-500" />, label: "Website", value: website, href: website.startsWith("http") ? website : `https://${website}` },
  ];

  return (
    <section id="about" className="py-20 bg-[#0f1117] border-t border-[#2d3148]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Tentang <span className="text-blue-500">Saya</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="w-full aspect-square rounded-xl bg-[#252836] border border-[#2d3148]/50 overflow-hidden flex items-center justify-center mb-6">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-800 flex items-center justify-center text-white text-5xl font-black">
                    {initials}
                  </div>
                )}
              </div>

              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-sm font-semibold text-blue-400">{title}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Details & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-[#2d3148]/50 pb-2">
                Biografi
              </h4>
              <p className="text-[#9ca3af] leading-relaxed text-base">
                {bio}
              </p>
            </div>

            {/* Quick Profile Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1d27] border border-[#2d3148] hover:border-blue-500/50 hover:bg-[#252836] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#252836] group-hover:bg-[#2563eb]/10 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-white block truncate">
                      {item.value}
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
