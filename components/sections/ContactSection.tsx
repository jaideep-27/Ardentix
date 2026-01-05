'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id="contact"
            ref={containerRef}
            className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
            <div className="flex flex-col items-center">
                {/* JOIN US Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-8"
                >
                    <h2
                        className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
                        style={{ color: '#5227FF' }}
                    >
                        Contact Us
                    </h2>
                </motion.div>

                <motion.div
                    style={{ y }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mb-16 w-full max-w-4xl"
                >
                    <Image
                        src="/join-us-illustration.png"
                        alt="Join us at Ardentix"
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center max-w-4xl"
                >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Let&apos;s build something meaningful.
                    </h3>
                    <motion.a
                        href="mailto:contact@ardentix.tech"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                        viewport={{ once: true }}
                        className="inline-block text-xl md:text-2xl font-medium border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300"
                        style={{ color: '#5227FF' }}
                    >
                        contact@ardentix.tech
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
