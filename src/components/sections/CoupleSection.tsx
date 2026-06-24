"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import ScrollReveal from "@/components/ui/ScrollReveal";

const { couple, coupleSection } = weddingData;

function IgIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#C9A84C" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
    );
}

function MirrorFrame({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative mx-auto" style={{ width: 230, height: 270 }}>
            <div className="absolute" style={{ top: "10%", left: "10%", width: "80%", height: "78%", borderRadius: "50%", overflow: "hidden", transform: "scaleY(1.12)" }}>
                <img src={src} alt={alt} className="w-full h-full object-cover object-top" style={{ transform: "scaleY(0.893)" }} />
            </div>
            <img src="/ornaments/frame.png" alt="" className="absolute inset-0 w-full h-full pointer-events-none select-none" style={{ objectFit: "fill" }} />
        </div>
    );
}

function PersonProfile({
    label,
    person,
    delay = 0,
    side = "left",
}: {
    label: string;
    person: typeof couple.groom;
    delay?: number;
    side?: "left" | "right";
}) {
    const isLeft = side === "left";

    return (
        <ScrollReveal delay={delay} className="relative flex flex-col items-center text-center px-8">
            <img src="/ornaments/birds.png" alt="" className="absolute pointer-events-none select-none opacity-80" style={{ width: 200, ...(isLeft ? { top: "-10%", left: "-22%", transform: "scaleX(1)" } : { top: "-10%", right: "-22%", transform: "scaleX(-1)" }) }} />
            <img src="/ornaments/stars.png" alt="" className="absolute pointer-events-none select-none opacity-60" style={{ width: 80, ...(isLeft ? { top: "38%", right: "-8%", transform: "rotate(10deg)" } : { top: "38%", left: "-8%", transform: "scaleX(-1) rotate(-10deg)" }) }} />
            <p className="font-display text-[11px] tracking-[0.45em] uppercase text-gold mb-4">
                {label}
            </p>
            <MirrorFrame src={person.photo} alt={person.fullName} />
            <a href={`https://instagram.com/${person.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 mb-4 px-4 py-1.5 rounded-full border border-gold/40 hover:border-gold/80 hover:bg-gold/5 transition-all">
                <IgIcon />
                <span className="font-display tracking-widest text-gold" style={{ fontSize: "11px", lineHeight: 1, paddingTop: "1px" }}>
                    {person.instagram.replace("@", "")}
                </span>
            </a>
            <h3 className="font-script text-gold-soft leading-tight" style={{ fontSize: "clamp(2rem, 9vw, 2.8rem)" }}>
                {person.fullName}
            </h3>
            <img src="/ornaments/divider.png" alt="" className="w-32 mx-auto opacity-70 my-0" />
            <div className="flex flex-col items-center gap-0.5">
                <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold/70">
                    {person.order} dari
                </p>
                <p className="font-body text-on-dark/50 text-[11px] mt-1.5">{person.father}</p>
                <p className="font-body text-on-dark/50 text-[11px]">&amp; {person.mother}</p>
            </div>
        </ScrollReveal>
    );
}

const ambientStars = [
    { top: "3%", left: "7%", size: 18, dur: 3.2 },
    { top: "6%", left: "86%", size: 14, dur: 3.8 },
    { top: "30%", left: "4%", size: 12, dur: 4.1 },
    { top: "32%", left: "90%", size: 16, dur: 3.5 },
    { top: "62%", left: "6%", size: 14, dur: 3.9 },
    { top: "65%", left: "88%", size: 12, dur: 3.3 },
    { top: "94%", left: "9%", size: 16, dur: 4.0 },
    { top: "96%", left: "84%", size: 18, dur: 3.6 },
];

export default function CoupleSection() {
    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.15, 0.85, 0.15] }} transition={{ duration: s.dur, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-10">
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2.2rem, 10vw, 3rem)" }}>
                    {coupleSection.title}
                </h2>
                <p className="font-body text-on-dark/50 text-[11px] tracking-wide">
                    {coupleSection.subtitle}
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-10">
                <PersonProfile label={coupleSection.groomLabel} person={couple.groom} delay={0} side="left" />
                <ScrollReveal className="flex items-center gap-4 px-10">
                    <span className="flex-1 h-px bg-gold/20" />
                    <span className="font-script text-gold/40 text-2xl">&amp;</span>
                    <span className="flex-1 h-px bg-gold/20" />
                </ScrollReveal>
                <PersonProfile label={coupleSection.brideLabel} person={couple.bride} delay={0.1} side="right" />
            </div>
        </section>
    );
}