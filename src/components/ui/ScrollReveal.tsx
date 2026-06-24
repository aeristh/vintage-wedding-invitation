"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} viewport={{ once: false, margin: "-25% 0px -25% 0px" }} transition={{ opacity: { duration: 2.2, delay: delay + 0.05, ease: "easeOut" }, y: { duration: 1.8, delay: delay + 0.05, ease: [0.25, 1, 0.5, 1] }, }} className={className} >
            {children}
        </motion.div>
    );
}
