"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Triggers the animation when the user scrolls down more than 40px
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Run immediately on page mount to catch state if reloaded while already scrolled
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="pt-40 pb-20 px-4 overflow-hidden">
            <div className="container mx-auto text-center">

                {/* Self-contained Title Gradient */}
                <h1
                    className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold tracking-tighter pr-2"
                    style={{
                        backgroundImage: "linear-gradient(to right, #2563eb, #9333ea, #ec4899)", // from-blue-600 via-purple-600 to-pink-600
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent"
                    }}
                >
                    Manage Your Finances <br /> with Intelligence
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    An AI-powered financial management platform that helps you track,
                    analyze, and optimize your spending with real-time insights.
                </p>

                <div className="flex justify-center space-x-4 mb-20">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://www.youtube.com">
                        <Button size="lg" variant="outline" className="px-8">
                            Watch Demo
                        </Button>
                    </Link>
                </div>

                {/* 3D Perspective Wrapper Container */}
                <div style={{ perspective: "1000px" }} className="w-full block">

                    {/* Hardware-accelerated 3D Scroll Animation */}
                    <div
                        style={{
                            transform: isScrolled
                                ? "rotateX(0deg) scale(1.02) translateY(20px)"
                                : "rotateX(15deg) scale(1)",
                            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                            willChange: "transform",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <Image
                            src="/banner.jpeg"
                            width={1280}
                            height={720}
                            alt="Dashboard Preview"
                            className="rounded-lg shadow-2xl border mx-auto"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;