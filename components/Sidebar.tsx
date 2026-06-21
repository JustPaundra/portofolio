"use client";

import React from "react";
import {
  Home,
  Inbox,
  ArrowDownToLine,
  Link as LinkIcon,
  Users,
  Shield,
  Puzzle,
  BarChart2,
  Sticker,
  Gift,
  Gavel,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
  href?: string;
}

const menuItems: MenuItem[] = [
  { name: "Halaman", icon: Home, active: true },
  { name: "Kotak Pesan", icon: Inbox },
  { name: "Penarikan", icon: ArrowDownToLine },
  { name: "Bio Link", icon: LinkIcon, badge: "Baru" },
  { name: "Anggota Tim", icon: Users, badge: "Baru" },
  { name: "Club", icon: Shield, badge: "Baru" },
  { name: "Integrasi", icon: Puzzle },
  { name: "Statistik", icon: BarChart2, badge: "Baru" },
  { name: "Stiker Kustom", icon: Sticker, badge: "Baru" },
  { name: "Unit Hadiah", icon: Gift, badge: "Baru" },
  { name: "Lelang", icon: Gavel },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "w-[240px] h-screen bg-[#1a1d27] border-r border-[#2d3148] flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-[#2d3148]">
          <span className="text-xl font-bold text-white tracking-wide">
            Takø<span className="text-blue-500">.</span>
          </span>
          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252836] border border-transparent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5 custom-scrollbar">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href || "#"}
              className={cn(
                "flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium transition-all duration-200 group rounded-lg",
                item.active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/15"
                  : "text-gray-400 hover:text-white hover:bg-[#252836]"
              )}
            >
              <Icon
                className={cn(
                  "w-[18px] h-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110",
                  item.active ? "text-white" : "text-gray-400 group-hover:text-white"
                )}
              />
              <span className="truncate">{item.name}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-auto shrink-0 leading-none tracking-wide animate-pulse">
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Footer Area inside Sidebar */}
      <div className="p-4 border-t border-[#2d3148] bg-[#1a1d27]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
            TK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Tako Admin</p>
            <p className="text-[10px] text-gray-500 truncate">admin@tako.id</p>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
