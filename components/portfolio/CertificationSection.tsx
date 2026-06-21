"use client";

import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";

const DEFAULT_CERTIFICATIONS = [
  {
    title: "Mobile Developer Intern",
    issuer: "PT Thunder Labs Indonesia",
    year: "2025",
    link: "/Serti Magang.jpeg",
  },
  {
    title: "Bangkit Academy Mobile Development Graduate",
    issuer: "Bangkit Academy by Google, GoTo, Traveloka",
    year: "2025",
    link: "/Serti Bangkit.pdf",
  }
];

export default function CertificationSection() {
  const isEmpty = 
    !certifications || 
    certifications.length === 0 || 
    (certifications.length === 1 && !certifications[0].title && !certifications[0].issuer);

  const displayCertifications = isEmpty ? DEFAULT_CERTIFICATIONS : certifications.map(cert => ({
    title: cert.title || "Nama Sertifikasi",
    issuer: cert.issuer || "Lembaga Penerbit",
    year: cert.year || "Tahun",
    link: cert.link || "https://example.com",
  }));

  return (
    <section id="certifications" className="py-20 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Sertifikasi & <span className="text-blue-500">Lisensi</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Certifications List */}
        <div className="space-y-4">
          {displayCertifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-5 shadow-xl hover:border-blue-500/30 hover:bg-[#1f2330] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                {/* Award Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#252836] border border-[#2d3148] flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-[#2563eb]/10 group-hover:text-blue-400 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9ca3af] mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Action and Year */}
              <div className="flex items-center justify-between sm:justify-end gap-4 border-t border-[#2d3148]/30 sm:border-0 pt-3 sm:pt-0">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-[#252836] border border-[#2d3148] px-2.5 py-1 rounded-full shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{cert.year}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                >
                  <span>Lihat Kredensial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
