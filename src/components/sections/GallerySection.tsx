"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Lightbox from "@/components/ui/Lightbox";

const { gallerySection } = weddingData;

type WashiColor = "gold" | "rose" | "sage" | "blue";

const WASHI_STYLES: Record<WashiColor, string> = {
    gold: "rgba(201,168,76,0.68)",
    rose: "rgba(180,110,100,0.62)",
    sage: "rgba(110,148,108,0.58)",
    blue: "rgba(130,150,180,0.60)",
};

function WashiTape({ color }: { color: WashiColor }) {
    return (
        <div className="absolute pointer-events-none" style={{ top: -9, left: "50%", transform: "translateX(-50%)", width: 52, height: 18, background: WASHI_STYLES[color], borderRadius: 2, zIndex: 1, }} />
    );
}

function getCardTransform(offset: number, total: number) {
    const half = Math.floor(total / 2);
    let o = offset;
    if (o > half) o -= total;
    if (o < -half) o += total;

    if (o === 0) return { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 20, opacity: 1 };
    if (Math.abs(o) === 1) return { x: o * 95, y: 16, rotate: o * 9, scale: 0.86, zIndex: 10, opacity: 0.72 };
    return { x: o * 148, y: 30, rotate: o * 15, scale: 0.74, zIndex: 1, opacity: 0.28 };
}

const ambientStars = [
    { top: "4%", left: "6%", size: 14, dur: 3.2 },
    { top: "7%", left: "88%", size: 10, dur: 3.8 },
    { top: "35%", left: "3%", size: 12, dur: 4.0 },
    { top: "38%", left: "92%", size: 14, dur: 3.5 },
    { top: "70%", left: "5%", size: 10, dur: 3.9 },
    { top: "73%", left: "90%", size: 12, dur: 3.3 },
    { top: "92%", left: "8%", size: 14, dur: 4.1 },
    { top: "94%", left: "85%", size: 10, dur: 3.6 },
];

export default function GallerySection() {
    const [current, setCurrent] = useState(0);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const touchStartX = useRef<number>(0);
    const { photos, video, stickyNotes, eyebrow, title, subtitle } = gallerySection;
    const total = photos.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (dx < -40) next();
        else if (dx > 40) prev();
    };

    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {lightboxSrc && (
                <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
            )}

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.7, 0.1] }} transition={{ duration: s.dur, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-10">
                <p className="font-display text-[11px] tracking-[0.45em] uppercase text-gold/60 mb-3">
                    {eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2.2rem, 10vw, 3rem)" }}>
                    {title}
                </h2>
                <p className="font-body text-on-dark/50 text-[11px] tracking-wide">
                    {subtitle}
                </p>
                <img src="/ornaments/divider.png" alt="" className="w-32 mx-auto opacity-70 mt-0" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <div className="relative flex items-center justify-center" style={{ height: 280 }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {photos.map((photo, i) => {
                        const offset = i - current;
                        const t = getCardTransform(offset, total);
                        return (
                            <motion.div
                                key={i}
                                className="absolute"
                                animate={{
                                    x: t.x,
                                    y: t.y,
                                    rotate: t.rotate,
                                    scale: t.scale,
                                    opacity: t.opacity,
                                    zIndex: t.zIndex,
                                }}
                                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                                style={{
                                    width: 190,
                                    background: "#f5efe2",
                                    padding: "9px 9px 34px",
                                    boxShadow: t.zIndex === 20
                                        ? "0 18px 50px rgba(0,0,0,0.72)"
                                        : "0 6px 20px rgba(0,0,0,0.45)",
                                    cursor: t.zIndex !== 20 ? "pointer" : "zoom-in",
                                }}
                                onClick={() => {
                                    if (i === current) {
                                        setLightboxSrc(photo.src);
                                    } else {
                                        setCurrent(i);
                                    }
                                }}
                            >
                                <WashiTape color={photo.washi} />

                                <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
                                    <img src={photo.src} alt="" className="w-full h-full object-cover object-center" draggable={false} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex items-center justify-center gap-6 mt-4 mb-8">
                    <button onClick={prev} aria-label="Foto sebelumnya" className="w-7 h-7 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors active:scale-95">
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="flex gap-1.5 items-center">
                        {photos.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} aria-label={`Foto ${i + 1}`} className="transition-all duration-300" style={{ width: i === current ? 18 : 6, height: 6, borderRadius: 9999, background: i === current ? "#c9a86a" : "rgba(201,168,106,0.25)", }} />))}
                    </div>

                    <button onClick={next} aria-label="Foto berikutnya" className="w-7 h-7 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors active:scale-95">
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="mx-6">
                <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold/50 text-center mb-3">
                    {video.label}
                </p>

                <div className="relative overflow-hidden" style={{ border: "1px solid rgba(201,168,106,0.28)", borderRadius: "12px" }}>
                    <iframe src={video.src} title={video.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full" style={{ aspectRatio: "16/9", display: "block", border: "none", borderRadius: "12px" }} />
                </div>

                <div className="flex gap-2 mt-3">
                    {stickyNotes.map((note, i) => (
                        <div key={i} className="flex-1 p-3" style={{ background: note.bg, transform: `rotate(${note.rotate})`, boxShadow: "0 4px 14px rgba(0,0,0,0.4)", }}>
                            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: "#3d2b1a", lineHeight: 1.55, }}>
                                {note.text}
                            </p>
                            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: note.sigColor, textAlign: "right", marginTop: 4, }}>
                                {note.sig}
                            </p>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
