import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nav = navRef.current;
    let lastScroll = 0;
    let isHidden = false;

    // --- Page load animation ---
    gsap.fromTo(
      nav,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // --- Scroll-based hide/show ---
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll down (hide) — only after Page 1
      if (currentScroll > lastScroll && currentScroll > window.innerHeight && !isHidden) {
        gsap.to(nav, {
          y: -100,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
        });
        isHidden = true;
      }

      // Scroll up (show) — anywhere
      if (currentScroll < lastScroll && isHidden) {
        gsap.to(nav, {
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
        isHidden = false;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} id="navbar">
      <div id="nav-left">
        <i className="ri-menu-2-line"></i>
        <p><a href="#pg-2">NEW IN</a></p>
        <p>SHOP</p>
      </div>

      <div id="nav-logo">
        <h1>KANNO</h1>
      </div>

      <div id="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="ri-search-line"></i>
        </div>
        <p className="hide">
          <i className="ri-user-6-line"></i>
        </p>
        <p>
          <i className="ri-shopping-cart-line"></i>
        </p>
      </div>
    </nav>
  );
};

export default Nav;
