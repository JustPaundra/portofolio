"use client";

import React from "react";
import { profile } from "@/lib/data";

export default function Footer() {
  const name = profile.name || "Nama Lengkap";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0f1117] border-t border-[#2d3148]/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-[#9ca3af]">
          &copy; {currentYear} <span className="text-white font-medium">{name}</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Dibuat dengan Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
