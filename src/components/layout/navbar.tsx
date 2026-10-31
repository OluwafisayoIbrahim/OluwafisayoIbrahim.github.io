"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export function Navbar() {
  const pathname = usePathname().replace(/\/+$/, "") || "/";

  return (
    <header className="block w-full" id="top">
      <nav
        className="mx-auto flex min-h-22 w-[calc(100%-3rem)] max-w-295 items-center justify-between gap-8 border-b border-divider max-[640px]:w-[calc(100%-2.5rem)] max-[640px]:min-h-[4.5rem] max-[640px]:flex-col max-[640px]:items-start max-[640px]:justify-center max-[640px]:gap-4 max-[640px]:py-4"
        aria-label="Main navigation"
      >
        <Link
          className="font-display text-[2rem] font-normal tracking-[-0.07em] text-[#000000] no-underline"
          href="/"
          aria-label="Oluwafisayo Ibrahim home"
        >
          OI<span>.</span>
        </Link>
        <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-3 max-[640px]:w-full max-[640px]:justify-start max-[640px]:gap-x-5">
          {navigation.map((item) => {
            if (item.href.startsWith("https://")) {
              return (
                <a
                  className="nav-link min-w-0 whitespace-nowrap text-[14px] max-[640px]:text-[0.72rem]"
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
                className="nav-link min-w-0 whitespace-nowrap text-[14px] max-[640px]:text-[0.72rem]"
                href={item.href === "/" ? "/#top" : item.href}
                key={item.href}
                onNavigate={(event) => {
                  if (item.href === "/" && pathname === "/") {
                    event.preventDefault();
                    if (window.location.hash) {
                      window.history.pushState(null, "", "/");
                    }
                    window.scrollTo({ top: 0, left: 0 });
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
                  section.scrollIntoView({ block: "start" });
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
