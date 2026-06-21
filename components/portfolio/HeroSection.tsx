"use client";

import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { profile, social } from "@/lib/data";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const getInitials = (name: string) => {
  if (!name) return "P";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export default function HeroSection() {
  const name = profile.name || "Made Paundra";
  const title = profile.title || "Mobile Developer & Web Developer";
  const bio = profile.bio || "Saya adalah lulusan Teknik Komputer yang bersemangat dalam menciptakan solusi digital yang inovatif. Dengan keahlian spesifik di bidang Mobile Development dan Web Development, saya berdedikasi untuk membangun aplikasi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa.";
  const resume = profile.resume || "#";
  const avatar = profile.avatar;

  const initials = getInitials(name);

  const socialLinks = [
    { icon: <GithubIcon className="w-5 h-5" />, href: social.github || "https://github.com", show: !!social.github || true },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: social.linkedin || "https://linkedin.com", show: !!social.linkedin || true },
  ];

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-[#0f1117]"
    >
      {/* Decorative gradient glowing backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-wider uppercase w-fit">
            <span>👋 Selamat Datang</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hai, Saya <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">{name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-300">
              {title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed max-w-xl">
            {bio}
          </p>

          {/* Social Links Icons Row */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1d27] border border-[#2d3148] flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-blue-500 hover:bg-[#2563eb]/10 hover:-translate-y-1 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all group"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={resume}
              download={resume !== "#"}
              target={resume !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#1a1d27] hover:bg-[#252836] text-white border border-[#2d3148] rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:border-[#9ca3af]/30"
            >
              <Download className="w-4 h-4 text-[#9ca3af]" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Avatar Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Outer spinning element/glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-spin [animation-duration:60s]" />
            <div className="absolute inset-6 rounded-full border border-blue-500/10" />
            
            {/* Core Avatar Container */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-[#1a1d27] border border-[#2d3148] overflow-hidden flex items-center justify-center shadow-2xl relative group">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-800 flex items-center justify-center text-white text-6xl sm:text-7xl font-black tracking-wider select-none">
                  {initials}
                </div>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
