"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const LINKS = [
  { href: "#conoce_mas", label: "Conocer más" },
  { href: "#central", label: "Compentencia Central" },
  { href: "#shows", label: "Shows" },
  { href: "#competencias", label: "Competencias" },
  { href: "#primeraEdicion", label: "Primera Edición" },
  { href: "#entradas", label: "Entradas" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
];

const TICKET_URL = "#entradas";

function scrollWithOffset(selector: string) {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return;
  const NAV_HEIGHT = 56 + 8; // h-14 + margen
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
}

interface NavProps {
  textColor?: string;
}

export default function Nav({ textColor = "text-white" }: NavProps) {
  const [open, setOpen] = React.useState(false);

  // Subrayar link activo al hacer scroll
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const navLinks = Array.from(
      document.querySelectorAll('nav a[href^="#"]')
    ) as HTMLAnchorElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!v) return;
        const id = "#" + (v.target as HTMLElement).id;
        navLinks.forEach((l) =>
          l.classList.toggle("underline", l.getAttribute("href") === id)
        );
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.2, 0.5, 0.8] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Scroll suave global
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Handler genérico para links de ancla en móvil (cierra y luego scroll)
  const handleMobileAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return; // links externos siguen normal
    e.preventDefault();
    setOpen(false); // cierra el sheet

    // Si estamos en una página de artista, navegar a la página principal
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      // Si estamos en la página principal, hacer scroll normal
      setTimeout(() => scrollWithOffset(href), 300);
    }
  };

  return (
    <nav className='fixed inset-x-0 top-0 z-50 bg-[--color-parchment]/90 backdrop-blur-2xl border-b border-black/5'>
      <div className='mx-auto max-w-7xl px-4 h-14 flex items-center justify-between'>
        {/* Logo */}
        <a href='/' className='flex items-center gap-2'>
          <img
            src='/logo.webp'
            alt='Olimpiada de Asadores'
            className='h-8 w-8'
          />
          <span className={`font-ui text-sm tracking-wide ${textColor}`}>
            Olimpiada de Asadores
          </span>
        </a>

        {/* Desktop */}
        <ul
          className={`hidden md:flex items-center gap-6 font-ui text-sm ${textColor}`}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith("#")) {
                    e.preventDefault();
                    // Si estamos en una página de artista, navegar a la página principal
                    if (window.location.pathname !== "/") {
                      window.location.href = "/" + l.href;
                    } else {
                      // Si estamos en la página principal, hacer scroll normal
                      scrollWithOffset(l.href);
                    }
                  }
                }}
                className='hover:underline underline-offset-4'
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={TICKET_URL} className='btn-primary text-sm'>
              Comprar
            </a>
          </li>
        </ul>

        {/* Mobile: Sheet controlado */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label='Abrir menú'
              className='md:hidden inline-flex items-center justify-center size-10 rounded-xl border border-black/10'
            >
              <svg
                viewBox='0 0 24 24'
                className='size-6'
                fill='none'
                stroke='#fff'
                strokeWidth='2'
              >
                <path d='M3 6h18M3 12h18M3 18h18' />
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent
            side='right'
            hideClose={true}
            className='w-[85%] max-w-xs bg-[--color-parchment] p-6 border-none'
          >
            <nav className='mt-4'>
              <ul className='flex flex-col gap-4 font-ui text-lg'>
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={handleMobileAnchor(l.href)}
                      className={`block py-2 text-white`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className='pt-2'>
                  <a
                    href={TICKET_URL}
                    onClick={() => setOpen(false)} // cerrar también al ir a comprar
                    className='btn-primary block w-full text-center'
                  >
                    Comprar entradas
                  </a>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
