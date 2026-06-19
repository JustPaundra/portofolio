"use client";

import React, { useState } from "react";
import { Copy, ExternalLink, Sparkles, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HalamanSection() {
  const [copied, setCopied] = useState(false);
  const pageUrl = "https://tako.id/@NamaKamu";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin link: ", err);
    }
  };

  return (
    <div className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl/10 hover:border-gray-700">
      {/* Row 1: Link section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Link Halaman Kamu
          </p>
          <p className="text-base font-bold text-white tracking-wide">
            {pageUrl}
          </p>
        </div>
        
        <div className="flex items-center gap-2.5">
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="sm"
            className="bg-[#252836] hover:bg-[#2d3148] text-white border border-[#2d3148] transition-colors gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500">Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Link</span>
              </>
            )}
          </Button>

          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-[#2d3148] hover:bg-[#252836] text-gray-300 hover:text-white transition-colors gap-2"
            )}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka di Tab Baru</span>
          </a>
        </div>
      </div>

      <Separator className="bg-[#2d3148] my-6" />

      {/* Row 2: XP section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">
            XP Yang Kamu Miliki
          </p>
          <p className="text-xs text-[#9ca3af]">
            Selesaikan misi harian dan kumpulkan XP untuk ditukarkan dengan hadiah menarik.
          </p>
        </div>

        <Badge
          className="w-fit bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 self-start sm:self-center transition-colors"
        >
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="font-bold text-sm">0 XP</span>
        </Badge>
      </div>
    </div>
  );
}
