"use client";

import React, { useState } from "react";
import { User, LogOut, Settings, CreditCard, ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [activeTab, setActiveTab] = useState<"personal" | "username">("personal");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="h-16 border-b border-[#2d3148] bg-[#1a1d27] px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left branding logo */}
      <div className="flex items-center gap-3">
        {/* Toggle Button for mobile */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252836] transition-colors focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <span className="text-lg font-bold text-white tracking-wide block lg:hidden">
          Takø<span className="text-blue-500">.</span>
        </span>
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-400">Dasbor</span>
          <span className="text-gray-600">/</span>
          <span className="text-sm font-medium text-white">Profil</span>
        </div>
      </div>

      {/* Center Tabs */}
      <div className="flex items-center h-full space-x-6">
        <button
          onClick={() => setActiveTab("personal")}
          className={cn(
            "relative h-full flex items-center text-sm font-semibold tracking-wide transition-colors duration-200",
            activeTab === "personal" ? "text-blue-500" : "text-gray-400 hover:text-white"
          )}
        >
          <span>Personal</span>
          {activeTab === "personal" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full shadow-[0_-2px_10px_rgba(37,99,235,0.4)]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("username")}
          className={cn(
            "relative h-full flex items-center text-sm font-semibold tracking-wide transition-colors duration-200",
            activeTab === "username" ? "text-blue-500" : "text-gray-400 hover:text-white"
          )}
        >
          <span>@NamaKamu</span>
          {activeTab === "username" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full shadow-[0_-2px_10px_rgba(37,99,235,0.4)]" />
          )}
        </button>
      </div>

      {/* Right User Avatar Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#252836] transition-colors focus:outline-none"
        >
          <Avatar className="w-8 h-8 rounded-lg ring-2 ring-blue-500/20">
            <AvatarImage src="" />
            <AvatarFallback className="bg-blue-600 text-white font-bold text-xs rounded-lg">
              MP
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {dropdownOpen && (
          <>
            {/* Backdrop click dismiss */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setDropdownOpen(false)}
            />
            
            {/* Dropdown Card */}
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#1a1d27] border border-[#2d3148] py-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2 border-b border-[#2d3148] mb-1">
                <p className="text-sm font-semibold text-white">M. Pratama</p>
                <p className="text-xs text-gray-400 truncate">pratama@tako.id</p>
              </div>

              <button
                onClick={() => setDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-[#252836] hover:text-white transition-colors"
              >
                <User className="w-4 h-4 text-gray-400" />
                <span>Profil Saya</span>
              </button>

              <button
                onClick={() => setDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-[#252836] hover:text-white transition-colors"
              >
                <Settings className="w-4 h-4 text-gray-400" />
                <span>Pengaturan</span>
              </button>

              <button
                onClick={() => setDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-[#252836] hover:text-white transition-colors"
              >
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span>Billing</span>
              </button>

              <div className="border-t border-[#2d3148] my-1" />

              <button
                onClick={() => setDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-[#252836] hover:text-red-300 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar</span>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
