"use client";

import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rows = gsap.utils.toArray<HTMLElement>(".row");
    rows.forEach((row) => {
      const cardLeft = row.querySelector<HTMLElement>(".card-left");
      const cardRight = row.querySelector<HTMLElement>(".card-right");

      if (cardLeft) {
        gsap.to(cardLeft, {
          x: -200,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      }

      if (cardRight) {
        gsap.to(cardRight, {
          x: 200,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      }
    });

    gsap.to(".main-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const generateRows = () =>
    Array.from({ length: 3 }).map((_, i) => (
      <div className="row flex justify-between gap-4 mb-16" key={i}>
        <div className="card card-left flex-1 opacity-0 transform translate-x-20">
          <Image
            src={`/img-${2 * i + 1}.png`}
            alt={`Image ${2 * i + 1}`}
            className="w-full h-auto object-cover rounded-2xl"
            width={500}
            height={500}
          />
        </div>
        <div className="card card-right flex-1 opacity-0 transform -translate-x-20">
          <Image
            src={`/img-${2 * i + 2}.png`}
            alt={`Image ${2 * i + 2}`}
            className="w-full h-auto object-cover rounded-2xl"
            width={500}
            height={500}
          />
        </div>
      </div>
    ));

  return (
    <ReactLenis
      root
      className="w-full h-full font-sans bg-black text-white overflow-x-hidden"
    >
      <section className="hero relative flex justify-center items-center h-screen">
        <div className="img">
          <Image
            src="/Logo.png"
            alt="Main Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="main pt-32">
        <div className="main-content text-center mb-16 opacity-0 translate-y-10  transition-transform duration-300">
          <div className="copy mb-8 flex flex-col justify-center align-center">
            <div className="line">
              <p className="text-2xl font-bold">Explore the Unseen</p>
            </div>
            <div className="line">
              <p className="text-2xl font-bold">Adventure Awaits</p>
            </div>
            <div className="line">
              <p className="text-2xl font-bold">Lets Get Started</p>
            </div>
          </div>
          <div className="btn">
            <button className="px-8 py-3 bg-gray-200 text-black font-bold rounded-lg hover:scale-105 transition-all">
              Let&apos;s Dive
            </button>
          </div>
        </div>

        {generateRows()}
      </section>
    </ReactLenis>
  );
};

export default Hero;