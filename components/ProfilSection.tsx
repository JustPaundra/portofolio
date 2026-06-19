"use client";

import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Save, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilSection() {
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [bannerImg, setBannerImg] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfileImg(url);
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setBannerImg(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 1200);
  };

  return (
    <div className="bg-[#1a1d27] border border-[#2d3148] rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl/10">
      <h2 className="text-lg font-bold text-white mb-6">Informasi Profil</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Photo */}
          <div className="flex-1 space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
              Foto Profil
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={profileInputRef}
                onChange={handleProfileUpload}
                accept="image/*"
                className="hidden"
              />
              <div className="w-16 h-16 rounded-xl bg-[#16a34a] flex items-center justify-center font-bold text-white text-xl overflow-hidden shrink-0 border border-[#2d3148]/30 shadow-inner">
                {profileImg ? (
                  <img src={profileImg} alt="Profil" className="w-full h-full object-cover" />
                ) : (
                  <span>MP</span>
                )}
              </div>
              <Button
                type="button"
                onClick={() => profileInputRef.current?.click()}
                variant="secondary"
                size="sm"
                className="bg-[#252836] hover:bg-[#2d3148] text-white border border-[#2d3148] transition-colors gap-2"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Unggah</span>
              </Button>
            </div>
          </div>

          {/* Banner Photo */}
          <div className="flex-[2] space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
              Foto Banner
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={bannerInputRef}
                onChange={handleBannerUpload}
                accept="image/*"
                className="hidden"
              />
              <div
                onClick={() => bannerInputRef.current?.click()}
                className="w-full max-w-[280px] h-16 rounded-xl border-2 border-dashed border-[#2d3148] hover:border-blue-500 bg-[#252836]/30 flex items-center justify-center overflow-hidden cursor-pointer transition-colors group shrink-0"
              >
                {bannerImg ? (
                  <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1 text-[#9ca3af] group-hover:text-blue-400 transition-colors">
                    <ImageIcon className="w-5 h-5 opacity-70" />
                    <span className="text-[10px] font-medium">1600 x 400 recommended</span>
                  </div>
                )}
              </div>
              <Button
                type="button"
                onClick={() => bannerInputRef.current?.click()}
                variant="secondary"
                size="sm"
                className="bg-[#252836] hover:bg-[#2d3148] text-white border border-[#2d3148] transition-colors gap-2"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Unggah</span>
              </Button>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Nama and Username */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Nama
            </label>
            <Input
              id="name-input"
              type="text"
              placeholder="Masukkan nama Anda"
              defaultValue="M. Pratama"
              required
              className="w-full bg-[#252836] border-[#2d3148] text-white rounded-lg focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 transition-all placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="username-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Username
            </label>
            <Input
              id="username-input"
              type="text"
              placeholder="Username"
              defaultValue="NamaKamu"
              required
              className="w-full bg-[#252836] border-[#2d3148] text-white rounded-lg focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 transition-all placeholder:text-gray-500"
            />
            <p className="text-[10px] text-gray-500">
              Username ini akan menjadi alamat profil unik Anda di Tako.
            </p>
          </div>
        </div>

        {/* 3-Column Grid: Kategori, Zona Waktu, Mata Uang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Kategori
            </label>
            <Select defaultValue="creator">
              <SelectTrigger className="w-full bg-[#252836] border-[#2d3148] text-white rounded-lg focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 transition-all">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d27] border-[#2d3148] text-white">
                <SelectItem value="creator" className="hover:bg-[#252836] focus:bg-[#252836]">Creator</SelectItem>
                <SelectItem value="developer" className="hover:bg-[#252836] focus:bg-[#252836]">Developer</SelectItem>
                <SelectItem value="designer" className="hover:bg-[#252836] focus:bg-[#252836]">Designer</SelectItem>
                <SelectItem value="artist" className="hover:bg-[#252836] focus:bg-[#252836]">Artist</SelectItem>
                <SelectItem value="business" className="hover:bg-[#252836] focus:bg-[#252836]">Bisnis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Zona Waktu
            </label>
            <Select defaultValue="gmt7">
              <SelectTrigger className="w-full bg-[#252836] border-[#2d3148] text-white rounded-lg focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 transition-all">
                <SelectValue placeholder="Pilih Zona Waktu" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d27] border-[#2d3148] text-white">
                <SelectItem value="gmt7" className="hover:bg-[#252836] focus:bg-[#252836]">(GMT+07:00) Asia/Jakarta</SelectItem>
                <SelectItem value="gmt8" className="hover:bg-[#252836] focus:bg-[#252836]">(GMT+08:00) Asia/Singapore</SelectItem>
                <SelectItem value="gmt9" className="hover:bg-[#252836] focus:bg-[#252836]">(GMT+09:00) Asia/Tokyo</SelectItem>
                <SelectItem value="gmt0" className="hover:bg-[#252836] focus:bg-[#252836]">(GMT+00:00) UTC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Mata Uang
            </label>
            <Select defaultValue="idr">
              <SelectTrigger className="w-full bg-[#252836] border-[#2d3148] text-white rounded-lg focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-500 h-10 transition-all">
                <SelectValue placeholder="Pilih Mata Uang" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d27] border-[#2d3148] text-white">
                <SelectItem value="idr" className="hover:bg-[#252836] focus:bg-[#252836]">IDR (Rp)</SelectItem>
                <SelectItem value="usd" className="hover:bg-[#252836] focus:bg-[#252836]">USD ($)</SelectItem>
                <SelectItem value="eur" className="hover:bg-[#252836] focus:bg-[#252836]">EUR (€)</SelectItem>
                <SelectItem value="sgd" className="hover:bg-[#252836] focus:bg-[#252836]">SGD ($)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all px-6 py-2 rounded-lg flex items-center gap-2"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 text-green-300" />
                <span>Tersimpan!</span>
              </>
            ) : isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Menyimpan...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
