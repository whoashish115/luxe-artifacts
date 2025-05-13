"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const inner = cursorInnerRef.current;
    const outer = cursorOuterRef.current;
    if (!inner || !outer) return;

    gsap.set([inner, outer], { xPercent: -50, yPercent: -50, opacity: 1 });

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const ease = 0.15; // outer cursor lag easing

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediate move inner cursor
      gsap.to(inner, {
        x: mouseX,
        y: mouseY,
        duration: 0.0001,
        ease: "power3.out",
      });
    };

    const animateOuter = () => {
      posX += (mouseX - posX) * ease;
      posY += (mouseY - posY) * ease;

      gsap.set(outer, {
        x: posX,
        y: posY,
      });

      requestAnimationFrame(animateOuter);
    };

    const onMouseDown = () => {
      gsap.to([inner, outer], {
        scale: 0.75,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const onMouseUp = () => {
      gsap.to([inner, outer], {
        scale: 1,
        duration: 0.1,
        ease: "elastic.out(1, 0.4)",
      });
    };

    const onMouseLeave = () => {
      gsap.to([inner, outer], { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to([inner, outer], { opacity: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animateOuter();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorOuterRef}
        className="fixed pointer-events-none z-[9999] top-0 left-0 w-14 h-14 rounded-full border-2 border-secondary backdrop-blur-sm bg-secondary/10 shadow-[0_0_15px_3px_rgba(255,0,255,0.2)] transition-transform"
      />
      {/* Inner dot */}
      <div
        ref={cursorInnerRef}
        className="fixed pointer-events-none z-[10000] top-0 left-0 w-4 h-4 rounded-full bg-secondary shadow-[0_0_8px_2px_rgba(255,0,255,0.8)]"
      />
    </>
  );
};

export default Cursor;
