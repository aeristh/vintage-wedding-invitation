"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData, StoryItem } from "@/data/weddingData";

const { storySection } = weddingData;

const ambientStars = [
    { top: "5%", left: "8%", size: 14, dur: 3.2 },
    { top: "8%", left: "88%", size: 10, dur: 3.8 },
    { top: "28%", left: "5%", size: 12, dur: 4.1 },
    { top: "30%", left: "91%", size: 14, dur: 3.5 },
    { top: "55%", left: "7%", size: 10, dur: 3.9 },
    { top: "58%", left: "89%", size: 12, dur: 3.3 },
    { top: "80%", left: "6%", size: 14, dur: 4.0 },
    { top: "82%", left: "87%", size: 10, dur: 3.6 },
];

function WashiTape({ side }: { side: "left" | "right" }) {
    return (
        <div className="absolute top-0 pointer-events-none" style={{ [side]: "18px", transform: "translateY(-50%)", width: 48, height: 22, background: "rgba(201,168,76,0.6)", borderRadius: 2, boxShadow: "0 1px 4px rgba(0,0,0,0.2)", }} />
    );
}

function StoryCard({ story, index }: { story: StoryItem; index: number }) {
    const isPhotoLeft = story.photoSide === "left";

    return (
        <ScrollReveal delay={index * 0.1} className="relative mx-4">
            <div className="relative rounded-sm p-5 pt-7" style={{ transform: `rotate(${story.rotate})`, background: "#f5efe0", boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)", zIndex: 1, position: "relative", }}>
                <WashiTape side={isPhotoLeft ? "right" : "left"} />

                <div className="flex items-baseline gap-2 mb-3">
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "10px", letterSpacing: "0.3em", color: "#7a4f1e", opacity: 1 }}>
                        {story.number}
                    </span>
                    <h3 className="font-script leading-none" style={{ fontSize: "clamp(1.6rem, 7vw, 2rem)", color: "#2b1a0e" }}>
                        {story.title}
                    </h3>
                </div>

                <div className="flex gap-4 items-start" style={{ flexDirection: isPhotoLeft ? "row" : "row-reverse" }}>

                    <div className="shrink-0 overflow-hidden" style={{ width: "42%", aspectRatio: "3/4", border: "3px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", transform: `rotate(${isPhotoLeft ? "1.5deg" : "-1.5deg"})`, }}>
                        <img src={story.photo} alt={story.title} className="w-full h-full object-cover" />
                    </div>

                    <p className="leading-relaxed" style={{ fontSize: "15px", color: "#3d2b1a", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", lineHeight: 1.9, }}>
                        {story.text}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
}

export default function StorySection() {
    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size, zIndex: 10 }} animate={{ opacity: [0.1, 0.7, 0.1] }} transition={{ duration: s.dur, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <img src="/ornaments/birds.png" alt="" className="absolute pointer-events-none select-none opacity-50" style={{ width: 140, top: "2%", right: "-2%", transform: "scaleX(-1)", zIndex: 10 }} />

            <ScrollReveal className="text-center px-8 mb-12">
                <p className="font-display text-[11px] tracking-[0.45em] uppercase text-gold/60 mb-3">
                    {storySection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2.2rem, 10vw, 3rem)" }}>
                    {storySection.title}
                </h2>
                <p className="font-body text-on-dark/50 text-[11px] tracking-wide">
                    {storySection.subtitle}
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-8 px-2">
                {storySection.items.map((story, i) => (
                    <StoryCard key={story.number} story={story} index={i} />
                ))}
            </div>

        </section>
    );
}