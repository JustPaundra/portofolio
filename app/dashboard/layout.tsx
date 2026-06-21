"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex">
      {/* Sidebar with toggle state */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[240px]">
        {/* Top Header with toggle function */}
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dynamic page content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 max-w-5xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
