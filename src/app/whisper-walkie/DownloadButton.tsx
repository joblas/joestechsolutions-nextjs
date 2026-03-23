"use client";

import { useEffect, useState } from "react";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/MagneticButton";

const DOWNLOAD_BASE = "https://github.com/joestechsolutions/whisper-walkie/releases/download/v1.1.0";
const GITHUB_RELEASES = "https://github.com/joestechsolutions/whisper-walkie/releases/latest";

type Platform = "windows" | "macos" | "linux" | "unknown";

interface PlatformInfo {
  label: string;
  url: string;
  size: string;
  file: string;
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  windows: {
    label: "Windows",
    url: `${DOWNLOAD_BASE}/WhisperWalkie-Setup.exe`,
    size: "224 MB",
    file: "WhisperWalkie-Setup.exe",
  },
  macos: {
    label: "macOS",
    url: `${DOWNLOAD_BASE}/WhisperWalkie-macos.zip`,
    size: "251 MB",
    file: "WhisperWalkie-macos.zip",
  },
  linux: {
    label: "Linux",
    url: `${DOWNLOAD_BASE}/WhisperWalkie-linux.tar.gz`,
    size: "313 MB",
    file: "WhisperWalkie-linux.tar.gz",
  },
  unknown: {
    label: "your platform",
    url: GITHUB_RELEASES,
    size: "",
    file: "",
  },
};

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

/** Hero download button — auto-detects OS */
export function HeroDownloadButton() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [showOthers, setShowOthers] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const info = PLATFORMS[platform];
  const otherPlatforms = (Object.entries(PLATFORMS) as [Platform, PlatformInfo][]).filter(
    ([key]) => key !== platform && key !== "unknown"
  );

  return (
    <div className="flex flex-col items-center gap-3">
      <a href={info.url} rel="noopener noreferrer">
        <MagneticButton strength={0.2}>
          <Button
            size="lg"
            className="bg-[#0d9488] hover:bg-[#0f766e] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0d9488]/20 transition-all"
          >
            <Download className="mr-2 h-5 w-5" aria-hidden="true" />
            Download for {info.label}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </MagneticButton>
      </a>

      {info.size && (
        <span className="text-white/40 text-xs">{info.file} &middot; {info.size}</span>
      )}

      {/* Other platforms toggle */}
      <button
        onClick={() => setShowOthers(!showOthers)}
        className="text-white/50 hover:text-white/70 text-sm flex items-center gap-1 transition-colors mt-1"
      >
        Other platforms
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${showOthers ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {showOthers && (
        <div className="flex flex-wrap justify-center gap-3 animate-in fade-in duration-200">
          {otherPlatforms.map(([key, plat]) => (
            <a
              key={key}
              href={plat.url}
              rel="noopener noreferrer"
              className="text-sm text-[#2dd4bf] hover:text-[#2dd4bf]/80 border border-white/10 hover:border-[#2dd4bf]/30 rounded-full px-4 py-2 transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              {plat.label}
              <span className="text-white/30 text-xs">{plat.size}</span>
            </a>
          ))}
          <a
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white/60 border border-white/10 hover:border-white/20 rounded-full px-4 py-2 transition-all"
          >
            All releases
          </a>
        </div>
      )}
    </div>
  );
}

/** Download section cards — direct links per platform */
export function PlatformDownloadCards() {
  const cards: { name: string; platform: Platform; formats: string[]; note: string; accent: string }[] = [
    {
      name: "Windows",
      platform: "windows",
      formats: [".exe installer (recommended)", "Portable .zip"],
      note: "CUDA GPU acceleration supported",
      accent: "#0d9488",
    },
    {
      name: "macOS",
      platform: "macos",
      formats: [".zip download"],
      note: "Requires Accessibility permissions",
      accent: "#2dd4bf",
    },
    {
      name: "Linux",
      platform: "linux",
      formats: [".tar.gz download"],
      note: "X11 fully supported; Wayland experimental",
      accent: "#0d9488",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {cards.map((card) => {
        const info = PLATFORMS[card.platform];
        return (
          <a
            key={card.name}
            href={info.url}
            rel="noopener noreferrer"
            className="block h-full group"
            aria-label={`Download Whisper Walkie for ${card.name}`}
          >
            <div
              className="bg-[#1c1c26] border border-white/10 hover:border-[#0d9488]/50 transition-all duration-500 h-full rounded-xl cursor-pointer p-8 text-center space-y-5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${card.accent}15` }}
              >
                <Download
                  className="w-7 h-7"
                  style={{ color: card.accent }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-white font-space-grotesk">{card.name}</h3>
              <ul className="space-y-1" role="list">
                {card.formats.map((format) => (
                  <li key={format} className="text-white/60 text-sm">{format}</li>
                ))}
              </ul>
              <p className="text-xs text-white/40 leading-relaxed">{card.note}</p>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: card.accent }}
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download {info.size && <span className="text-white/30">({info.size})</span>}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

/** Final CTA download button — same OS detection */
export function CtaDownloadButton() {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const info = PLATFORMS[platform];

  return (
    <a href={info.url} rel="noopener noreferrer">
      <MagneticButton strength={0.15}>
        <Button
          size="lg"
          className="bg-[#0d9488] hover:bg-[#0f766e] text-white text-lg px-10 py-7 rounded-full group shadow-lg shadow-[#0d9488]/20 transition-all"
        >
          <Download className="mr-2 h-5 w-5" aria-hidden="true" />
          Download for {info.label}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </MagneticButton>
    </a>
  );
}
