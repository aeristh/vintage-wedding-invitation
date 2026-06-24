"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { weddingData } from "@/data/weddingData";

const { dateSection, hero, couple } = weddingData;

const ambientStars = [
    { top: "3%", left: "6%", size: 14, dur: 3.2 },
    { top: "6%", left: "87%", size: 10, dur: 3.8 },
    { top: "25%", left: "4%", size: 12, dur: 4.1 },
    { top: "27%", left: "92%", size: 14, dur: 3.5 },
    { top: "55%", left: "5%", size: 10, dur: 3.9 },
    { top: "57%", left: "90%", size: 12, dur: 3.3 },
    { top: "88%", left: "7%", size: 14, dur: 4.0 },
    { top: "90%", left: "85%", size: 10, dur: 3.6 },
];

function WeddingCalendar() {
    const weddingDate = new Date(hero.date.iso);
    const weddingDay = weddingDate.getDate();
    const weddingMon = weddingDate.getMonth();
    const weddingYear = weddingDate.getFullYear();
    const weddingDow = weddingDate.getDay();

    const dayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const startOfWeek = weddingDay - weddingDow;
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const d = startOfWeek + i;
        const daysInMonth = new Date(weddingYear, weddingMon + 1, 0).getDate();
        if (d < 1 || d > daysInMonth) return null;
        return d;
    });

    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    return (
        <div className="relative mx-auto" style={{ background: "#faf6ee", padding: "16px 16px 14px", maxWidth: 290, boxShadow: "0 14px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.25)", borderRadius: 14, }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 48, height: 16, background: "rgba(201,168,76,0.7)", borderRadius: 2 }} />

            <div className="text-center mb-3">
                <p className="font-script leading-none" style={{ fontSize: "1.8rem", color: "#2b1a0e" }}>
                    {MONTH_NAMES[weddingMon]}
                </p>
                <p className="font-display tracking-[0.35em] text-[10px] mt-0.5" style={{ color: "#8a6020" }}>
                    {weddingYear}
                </p>
            </div>

            <div className="h-px mb-3" style={{ background: "rgba(138,96,32,0.2)" }} />

            <div className="grid grid-cols-7 mb-1">
                {dayLabels.map((d) => (
                    <div key={d} className="text-center font-display text-[9px] tracking-wider" style={{ color: "#b8966e", paddingBottom: 4 }}>
                        {d}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {weekDates.map((day, idx) => {
                    const isWedding = day === weddingDay;
                    return (
                        <div key={idx} className="relative flex items-center justify-center" style={{ height: 32 }}>
                            {day !== null && (
                                <>
                                    <span className="font-display text-[12px] relative z-10" style={{ color: isWedding ? "#8a2030" : "#3d2b1a", fontWeight: isWedding ? 700 : 400, }}>
                                        {day}
                                    </span>
                                    {isWedding && (
                                        <svg className="absolute pointer-events-none" style={{ width: 34, height: 34, top: "50%", left: "50%", transform: "translate(-50%,-50%)", }} viewBox="0 0 44 44" fill="none">
                                            <path d="M22 34 C9 25, 4 12, 15 9 C19 8, 22 13, 22 13 C22 13, 25 8, 29 9 C40 12, 35 25, 22 34Z" stroke="#c94060" strokeWidth="1.3" fill="rgba(201,64,96,0.08)" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 34 C25 37, 31 38, 34 35 C36 33, 35 30, 33 30" stroke="#c94060" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.75" />
                                        </svg>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent 0px, transparent 31px, rgba(180,140,90,0.06) 32px)", borderRadius: 14, }} />
        </div>
    );
}

function useCountdown(isoDate: string) {
    const target = new Date(isoDate).getTime();
    const calc = () => {
        const diff = target - Date.now();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor((diff % 86400000) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000),
        };
    };
    const [time, setTime] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function CountdownBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative flex items-center justify-center" style={{ width: 62, height: 62, background: "#f5efe0", boxShadow: "0 6px 20px rgba(0,0,0,0.5)", transform: "rotate(-1deg)", borderRadius: 2, }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 26, height: 11, background: "rgba(201,168,76,0.6)", borderRadius: 2 }} />
                <span className="font-display text-[1.55rem] font-bold" style={{ color: "#2b1a0e", lineHeight: 1 }}>
                    {String(value).padStart(2, "0")}
                </span>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(transparent 0px, transparent 15px, rgba(180,140,90,0.1) 16px)", }} />
            </div>
            <p className="font-display text-[9px] tracking-[0.3em] uppercase text-gold/70">{label}</p>
        </div>
    );
}

function buildGoogleCalendarUrl() {
    const { groom, bride } = couple;
    const title = encodeURIComponent(`Pernikahan ${groom.nickname} & ${bride.nickname}`);
    const details = encodeURIComponent(dateSection.calendarDescription);
    const location = encodeURIComponent(dateSection.calendarLocation);
    const start = hero.date.iso.replace(/[-:]/g, "").replace(".000", "");
    const endDate = new Date(new Date(hero.date.iso).getTime() + 3 * 3600000);
    const endStr = endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${endStr}&details=${details}&location=${location}`;
}

function buildICSBlob() {
    const { groom, bride } = couple;
    const start = hero.date.iso.replace(/[-:]/g, "").replace(".000", "") + "Z";
    const endDate = new Date(new Date(hero.date.iso).getTime() + 3 * 3600000);
    const end = endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const title = `Pernikahan ${groom.nickname} & ${bride.nickname}`;
    const ics = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT",
        `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${title}`,
        `DESCRIPTION:${dateSection.calendarDescription}`,
        `LOCATION:${dateSection.calendarLocation}`,
        "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    return new Blob([ics], { type: "text/calendar;charset=utf-8" });
}

function handleSaveToCalendar() {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod|android/.test(ua)) {
        const blob = buildICSBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "wedding.ics"; a.click();
        URL.revokeObjectURL(url);
    } else {
        window.open(buildGoogleCalendarUrl(), "_blank");
    }
}

function handleSetReminder() {
    if (!("Notification" in window)) {
        alert("Browser kamu tidak mendukung notifikasi."); return;
    }
    Notification.requestPermission().then((perm) => {
        if (perm !== "granted") {
            alert("Izin notifikasi ditolak. Silakan aktifkan dari pengaturan browser."); return;
        }
        const delayMs = new Date(hero.date.iso).getTime() - 24 * 3600000 - Date.now();
        if (delayMs <= 0) {
            new Notification("🎊 Hari H sudah tiba!", {
                body: `Selamat menyaksikan pernikahan ${couple.groom.nickname} & ${couple.bride.nickname}!`,
            }); return;
        }
        setTimeout(() => {
            new Notification("💍 Pengingat Pernikahan", {
                body: `Besok adalah hari pernikahan ${couple.groom.nickname} & ${couple.bride.nickname}! 🎉`,
            });
        }, delayMs);
        alert("✓ Pengingat sudah diset! Notifikasi akan muncul 1 hari sebelum hari H.");
    });
}

export default function DateSection() {
    const countdown = useCountdown(hero.date.iso);

    return (
        <section className="relative bg-ink py-14 overflow-hidden">

            {ambientStars.map((s, i) => (
                <motion.img key={i} src="/ornaments/star.png" alt="" className="absolute pointer-events-none select-none" style={{ top: s.top, left: s.left, width: s.size, height: s.size }} animate={{ opacity: [0.1, 0.75, 0.1] }} transition={{ duration: s.dur, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            <img src="/ornaments/birds.png" alt="" className="absolute pointer-events-none select-none opacity-35" style={{ width: 130, top: "5%", left: "-8%", zIndex: 1 }} />

            <ScrollReveal className="text-center px-8 mb-6">
                <p className="font-display text-[11px] tracking-[0.45em] uppercase text-gold/60 mb-3">
                    {dateSection.eyebrow}
                </p>
                <h2 className="font-script text-gold-soft leading-tight mb-3" style={{ fontSize: "clamp(2.2rem, 10vw, 3rem)" }}>
                    {dateSection.title}
                </h2>
                <img src="/ornaments/divider.png" alt="" className="w-32 mx-auto opacity-70" />
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="relative mb-10">
                <div className="relative mx-auto" style={{ maxWidth: 340 }}>
                    <div className="relative z-10" style={{ marginTop: 130, transform: "rotate(-3deg)", transformOrigin: "center center", }}>
                        <WeddingCalendar />
                    </div>

                    <div className="absolute z-20" style={{ top: -135, left: "65%", transform: "translateX(-50%) rotate(10deg)", width: "55%", }}>
                        <div className="relative">
                            <img src="/ornaments/note.png" alt="" className="w-full select-none pointer-events-none" draggable={false} />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ paddingBottom: "12%" }}>
                                <p style={{ fontFamily: "'Caveat', cursive", fontSize: "15px", color: "#111", letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1, marginBottom: 2, }}>
                                    {hero.date.day}
                                </p>

                                <p style={{ fontFamily: "'Caveat', cursive", fontSize: "30px", color: "#000", lineHeight: 1.1, fontWeight: 700, margin: "2px 0", }}>
                                    {hero.date.dateNumber}
                                </p>

                                <p style={{ fontFamily: "'Caveat', cursive", fontSize: "15px", color: "#222", letterSpacing: "0.08em", lineHeight: 1, marginTop: 2, }}>
                                    {hero.date.month} {hero.date.year}
                                </p>
                            </div>
                        </div>
                    </div>

                    <img src="/ornaments/stars.png" alt="" className="absolute pointer-events-none select-none" style={{ width: 80, bottom: "60%", left: "0%", transform: "rotate(15deg)", opacity: 0.7, zIndex: 30, }} />
                    <img src="/ornaments/key.png" alt="" className="absolute pointer-events-none select-none" style={{ width: 120, top: "-35%", right: "-5%", transform: "rotate(-0deg)", opacity: 0.85, zIndex: 25, }} />

                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="px-6 mb-10">
                <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold/60 text-center mb-6">
                    {dateSection.countdownLabel}
                </p>
                <div className="flex items-start justify-center gap-3">
                    <CountdownBox value={countdown.days} label={dateSection.countdown.days} />
                    <span className="font-script text-gold/50 text-3xl mt-2">:</span>
                    <CountdownBox value={countdown.hours} label={dateSection.countdown.hours} />
                    <span className="font-script text-gold/50 text-3xl mt-2">:</span>
                    <CountdownBox value={countdown.minutes} label={dateSection.countdown.minutes} />
                    <span className="font-script text-gold/50 text-3xl mt-2">:</span>
                    <CountdownBox value={countdown.seconds} label={dateSection.countdown.seconds} />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="px-12 flex flex-col gap-2.5">

                <motion.button whileHover={{ scale: 1.015, boxShadow: "0 6px 22px rgba(201,168,106,0.4)" }} whileTap={{ scale: 0.97 }} onClick={handleSaveToCalendar} className="w-full flex items-center justify-center gap-2 py-3 font-display text-[9.5px] tracking-[0.28em] uppercase text-ink" style={{ background: "linear-gradient(135deg, #b8924a 0%, #e2c97e 50%, #b8924a 100%)", boxShadow: "0 3px 14px rgba(201,168,106,0.25)", borderRadius: 6, }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {dateSection.saveButton}
                </motion.button>

                <motion.button whileHover={{ scale: 1.015, backgroundColor: "rgba(201,168,106,0.05)" }} whileTap={{ scale: 0.97 }} onClick={handleSetReminder} className="w-full flex items-center justify-center gap-2 py-3 font-display text-[9.5px] tracking-[0.28em] uppercase text-gold/75 transition-colors" style={{ background: "transparent", border: "1px solid rgba(201,168,106,0.3)", borderRadius: 6, }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    {dateSection.reminderButton}
                </motion.button>

            </ScrollReveal>

        </section>
    );
}
