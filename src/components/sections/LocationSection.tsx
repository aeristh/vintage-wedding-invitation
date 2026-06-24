"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const { locationSection } = weddingData;

const ambientStars = [
    { top: "3%", left: "6%", size: 14, dur: 3.4 },
    { top: "6%", left: "87%", size: 10, dur: 3.9 },
    { top: "32%", left: "4%", size: 12, dur: 4.1 },
    { top: "34%", left: "92%", size: 14, dur: 3.5 },
    { top: "62%", left: "5%", size: 10, dur: 3.7 },
    { top: "65%", left: "90%", size: 12, dur: 3.3 },
    { top: "90%", left: "7%", size: 14, dur: 4.0 },
    { top: "92%", left: "85%", size: 10, dur: 3.6 },
];

function IconRing() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" />
            <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" />
        </svg>
    );
}

function IconCrown() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18h18M3 18l3-10 5 6 3-8 5 8-3 4H3z" />
        </svg>
    );
}

function IconClock() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
        </svg>
    );
}

function IconPin() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}

function IconArrow() {
    return (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

function StaticMap() {
    const { akad, resepsi } = locationSection.events;

    const markers = [
        `markers=color:0xc9a86a|label:A|${encodeURIComponent(akad.mapQuery)}`,
        `markers=color:0xc94060|label:B|${encodeURIComponent(resepsi.mapQuery)}`,
    ].join("&");

    const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(akad.mapQuery)}&output=embed&z=13`;

    return (
        <div className="relative mx-6 overflow-hidden" style={{ borderRadius: 12, border: "0.5px solid rgba(201,168,106,0.2)", aspectRatio: "16/9", background: "#1a1208", }} >
            <iframe title="Wedding Location Map" src={iframeSrc} width="100%" height="100%" style={{ border: 0, display: "block", filter: "grayscale(30%) brightness(0.85) sepia(20%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 32px rgba(14,10,4,0.55)", borderRadius: 12, }} />
        </div>
    );
}

function EventCard({
    event,
    icon,
    delay,
}: {
    event: typeof weddingData.locationSection.events.akad;
    icon: React.ReactNode;
    delay: number;
}) {
    const handleDirections = () => {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`,
            "_blank"
        );
    };

    return (
        <ScrollReveal delay={delay}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "16px 16px 14px", }} >
                <div className="flex items-start gap-3 mb-3">
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(201,168,106,0.1)", border: "0.5px solid rgba(201,168,106,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a86a", flexShrink: 0, }} >
                        {icon}
                    </div>
                    <div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(240,234,216,0.4)", marginBottom: 2, }} >
                            {event.eyebrow}
                        </p>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 400, color: "#f0ead8", lineHeight: 1.2, margin: 0, }} >
                            {event.name}
                        </h3>
                    </div>
                </div>

                <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 0 12px" }} />

                <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: "rgba(201,168,106,0.6)" }}>
                        <IconClock />
                    </span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(240,234,216,0.65)", }} >
                        {event.day}, {event.date} &nbsp;·&nbsp; {event.time}
                    </span>
                </div>

                <div className="flex items-start gap-2 mb-4">
                    <span style={{ color: "rgba(201,168,106,0.6)", marginTop: 1 }}>
                        <IconPin />
                    </span>
                    <div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(240,234,216,0.65)", lineHeight: 1.5, margin: 0, }} >
                            {event.venue}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(240,234,216,0.3)", margin: "2px 0 0", }} >
                            {event.address}
                        </p>
                    </div>
                </div>

                <motion.button whileTap={{ scale: 0.97 }} onClick={handleDirections} className="w-full flex items-center justify-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500, padding: "8px 0", background: "transparent", border: "0.5px solid rgba(201,168,106,0.35)", borderRadius: 6, color: "#c9a86a", cursor: "pointer", }} >
                    <IconArrow />
                    {locationSection.viewMapButton}
                </motion.button>
            </div>
        </ScrollReveal>
    );
}

export default function LocationSection() {
    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.65, 0.1] }} transition={{ duration: s.dur, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <ScrollReveal className="text-center px-8 mb-8">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(226,201,126,0.5)", marginBottom: "0.6rem", }} >
                    {locationSection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-2" style={{ fontSize: "clamp(2rem, 9vw, 2.75rem)" }} >
                    {locationSection.title}
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(240,234,216,0.4)", fontSize: "12px", lineHeight: 1.75, }} >
                    {locationSection.subtitle}
                </p>
                <img src="/ornaments/divider.png" alt="" className="mx-auto opacity-60" style={{ width: "120px", marginTop: "1rem" }} />
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="mb-16">
                <StaticMap />
            </ScrollReveal>

            <div className="flex flex-col gap-3 px-6">
                <ScrollReveal>
                    <p className="text-center mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(226,201,126,0.5)", }}>
                        {locationSection.eventsLabel}
                    </p>
                </ScrollReveal>
                <EventCard event={locationSection.events.akad} icon={<IconRing />} delay={0.1} />
                <EventCard event={locationSection.events.resepsi} icon={<IconCrown />} delay={0.18} />
            </div>
        </section>
    );
}
