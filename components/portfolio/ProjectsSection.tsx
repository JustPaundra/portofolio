"use client";

import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { GithubIcon } from "./BrandIcons";

const DEFAULT_PROJECTS = [
  {
    title: "E-Commerce Next.js",
    description: "Aplikasi toko online lengkap dengan manajemen keranjang belanja, proses pembayaran Stripe, dan dashboard admin untuk pengelolaan produk.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "Task Management Board",
    description: "Papan kolaborasi tugas tim real-time terinspirasi dari Trello, mendukung drag and drop, otentikasi multi-user, dan notifikasi instan.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "AI Image Generator",
    description: "Platform kreasi gambar bertenaga AI dengan integrasi API DALL-E OpenAI. Memungkinkan pengguna mendesain gambar lewat prompt teks sederhana.",
    tech: ["React", "OpenAI API", "Node.js", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    featured: false,
  }
];

export default function ProjectsSection() {
  const isEmpty = 
    !projects || 
    projects.length === 0 || 
    (projects.length === 1 && !projects[0].title && !projects[0].description);

  const displayProjects = isEmpty ? DEFAULT_PROJECTS : projects.map(proj => ({
    title: proj.title || "Judul Proyek",
    description: proj.description || "Deskripsi lengkap mengenai cara kerja proyek ini, tantangan yang diselesaikan, dan arsitektur yang digunakan.",
    tech: proj.tech && proj.tech.length > 0 ? proj.tech : ["React", "Tailwind"],
    github: proj.github || "https://github.com",
    demo: proj.demo || "https://example.com",
    image: proj.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: proj.featured !== undefined ? proj.featured : true,
  }));

  return (
    <section id="projects" className="py-20 bg-[#0f1117] border-t border-[#2d3148]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Proyek <span className="text-blue-500">Pilihan</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1a1d27] border border-[#2d3148] rounded-xl overflow-hidden shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#252836] border-b border-[#2d3148]/50">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {proj.featured && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech and Buttons Wrapper */}
                <div className="space-y-4 pt-2">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#252836] text-gray-300 border border-[#2d3148]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#252836] hover:bg-[#2d3148] text-white border border-[#2d3148] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#9ca3af]" />
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/10 hover:shadow-blue-600/25 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
