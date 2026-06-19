import React from "react";
import HalamanSection from "@/components/HalamanSection";
import ProfilSection from "@/components/ProfilSection";

export const metadata = {
  title: "Dasbor Profil | Takø",
  description: "Kelola link halaman portofolio Anda dan informasi profil pribadi.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Title Header Section inside Main content */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Pengaturan Halaman
        </h1>
        <p className="text-sm text-[#9ca3af]">
          Sesuaikan link halaman Bio Anda dan perbarui detail profil secara real-time.
        </p>
      </div>

      {/* Section 1: Page Link & XP Status */}
      <HalamanSection />

      {/* Section 2: Profile Settings & File Upload Form */}
      <ProfilSection />
    </div>
  );
}
