"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";

export function Navbar() {
  const pathname = usePathname().replace(/\/+$/, "") || "/";

  const [open, setOpen] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [...document.querySelectorAll<HTMLElement>("main, .site-footer")].map(element => ({ element, inert: element.inert }));
    background.forEach(({ element }) => { element.inert = true; });
    const desktop = window.matchMedia("(min-width: 641px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach(({ element, inert }) => { element.inert = inert; });
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="block w-full" id="top">
      <div className="site-nav-backdrop" data-open={open} aria-hidden="true" />
      <nav
        className="site-navigation"
        ref={navRef}
        onKeyDown={(event) => {
          if (event.key === "Tab" && open) {
            const items = navRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
            const first = items?.[0];
            const last = items?.[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault(); last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault(); first?.focus();
            }
          }
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
        aria-label="Main navigation"
      >
        <Link
          className="site-mark site-nav-brand"
          onClick={() => setOpen(false)}
          href="/"
          aria-label="Oluwafisayo Ibrahim home"
        >
          OI<span>.</span>
        </Link>
        <button
          className="site-nav-toggle"
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <div id={menuId} className="site-nav-links" data-open={open}>
          {navigation.map((item) => {
            if (item.href.startsWith("https://")) {
              return (
                <a
                  className="nav-link"
                  onClick={() => setOpen(false)}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            }
            const href = item.href.replace(/\/+$/, "") || "/";
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className="nav-link"
                  onClick={() => setOpen(false)}
                href={item.href === "/" ? "/#top" : item.href}
                key={item.href}
                onNavigate={(event) => {
                  if (item.href === "/" && pathname === "/") {
                    event.preventDefault();
                    if (window.location.hash) {
                      window.history.pushState(null, "", "/");
                    }
                    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
                    return;
                  }
                  const [targetPath, targetId] = item.href.split("#");
                  if (!targetId || (targetPath.replace(/\/+$/, "") || "/") !== pathname) {
                    return;
                  }
                  const section = document.getElementById(targetId);
                  if (!section) return;

                  event.preventDefault();
                  if (window.location.hash !== `#${targetId}`) {
                    window.history.pushState(null, "", item.href);
                  }
                  requestAnimationFrame(() => section.scrollIntoView({ block: "start" }));
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
