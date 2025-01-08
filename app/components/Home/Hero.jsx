"use client";
import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

const Hero = () => {

  return (
    <ReactLenis root>
      <section className="hero">
        <div className="img">
          <img src="/Logo.png" alt="" />
        </div>
      </section>

      <section className="main">
        <div className="main-content">
          <div className="logo"><img src="/Logo2.png" alt=""/></div>

          <div className="copy">
            <div className="line">
              <p>soru soru soru soru</p>
            </div>
            <div className="line">
              <p>soru soru soru soru</p>
            </div>
            <div className="line">
              <p>soru soru soru soru</p>
            </div>
          </div>

          <div className="btn">
            <button>Let's Dive</button>
          </div>
        </div>
      </section>

      
    </ReactLenis>
  );
};

export default Hero;
