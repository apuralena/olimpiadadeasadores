import { c as createComponent } from './astro-component_BgSGCmWG.mjs';
import 'piccolore';
import { o as createRenderInstruction, h as addAttribute, r as renderTemplate, n as renderComponent, l as renderHead, p as renderSlot, m as maybeRenderHead } from './entrypoint_BgqOtCCY.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-carbon/60 backdrop-blur-sm",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  hideClose = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          !hideClose && /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}

const LINKS = [
  { href: "#conoce_mas", label: "Conocer más" },
  { href: "#central", label: "Compentencia Central" },
  // { href: "#shows", label: "Shows" },
  { href: "#competencias", label: "Competencias" },
  { href: "#galeria", label: "Galería" },
  { href: "#sponsors", label: "Sponsors" }
  // { href: "#faq", label: "FAQ" },
];
function scrollWithOffset(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const NAV_HEIGHT = 56 + 8;
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
}
function Nav({ textColor = "text-white" }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const navLinks = Array.from(
      document.querySelectorAll('nav a[href^="#"]')
    );
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!v) return;
        const id = "#" + v.target.id;
        navLinks.forEach(
          (l) => l.classList.toggle("underline", l.getAttribute("href") === id)
        );
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.2, 0.5, 0.8] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  const handleMobileAnchor = (href) => (e) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      setTimeout(() => scrollWithOffset(href), 300);
    }
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed inset-x-0 top-0 z-50 bg-carbon/95 backdrop-blur-2xl border-b border-fuego/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 h-14 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo.webp",
          alt: "Olimpiada de Asadores",
          className: "h-8 w-8"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: `font-ui text-sm tracking-wide ${textColor}`, children: "Olimpiada de Asadores" })
    ] }),
    /* @__PURE__ */ jsx(
      "ul",
      {
        className: `hidden md:flex items-center gap-6 font-ui text-sm ${textColor}`,
        children: LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            onClick: (e) => {
              if (l.href.startsWith("#")) {
                e.preventDefault();
                if (window.location.pathname !== "/") {
                  window.location.href = "/" + l.href;
                } else {
                  scrollWithOffset(l.href);
                }
              }
            },
            className: "hover:underline underline-offset-4",
            children: l.label
          }
        ) }, l.href))
      }
    ),
    /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Abrir menú",
          className: "md:hidden inline-flex items-center justify-center size-10 rounded-xl border border-fuego/20 bg-sombra/40 text-crema hover:bg-fuego/20 transition-colors",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              viewBox: "0 0 24 24",
              className: "size-6",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /* @__PURE__ */ jsx("path", { d: "M3 6h18M3 12h18M3 18h18" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs(
        SheetContent,
        {
          side: "right",
          hideClose: true,
          className: "w-[85%] max-w-xs bg-sombra/60 backdrop-blur-xl p-6 border-l border-fuego/20",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-6", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: "p-2 text-crema/70 hover:text-fuego transition-colors",
                "aria-label": "Cerrar menú",
                children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "size-6", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M6 18L18 6M6 6l12 12" }) })
              }
            ) }),
            /* @__PURE__ */ jsx("nav", { className: "mt-2", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-6 font-ui text-xl", children: LINKS.map((l) => /* @__PURE__ */ jsx("li", { className: "border-b border-fuego/10 pb-4", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                onClick: handleMobileAnchor(l.href),
                className: `block text-crema hover:text-fuego transition-colors drop-shadow-md`,
                children: l.label
              }
            ) }, l.href)) }) })
          ]
        }
      )
    ] })
  ] }) });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Lucas/Documents/olimpiadadeasadores/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    textColor,
    description = "Competencia central de asadores, shows folklóricos y danzas en vivo, competencias para el público y gastronomía."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" href="/logo.webp" type="image/webp"><!-- View Transitions -->${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-dvh font-ui text-crema bg-carbon-900 relative"> <!-- Fondo Fijo y Sticky (solución a prueba de fallos para mobile/iOS) --> <div class="fixed inset-0 z-[-1] bg-carbon-900 bg-[url('/background-mobile.png')] md:bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"></div> ${renderComponent($$result, "Nav", Nav, { "client:load": true, "textColor": "text-crema", "client:component-hydration": "load", "client:component-path": "@/components/Nav", "client:component-export": "default" })} <!-- Contenido dinámico --> ${renderSlot($$result, $$slots["default"])} <footer class="section text-sm relative mt-20 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-carbon to-transparent opacity-90"></div> <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuego/50 to-transparent"></div> <div class="container text-center relative z-10"> <div class="mb-6 flex justify-center space-x-6"> <a href="#" class="text-crema/60 hover:text-fuego transition-colors duration-300"> <span class="sr-only">Instagram</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg> </a> </div> <p class="text-crema/40 font-ui text-sm tracking-wide">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Olimpiada de Asadores.<br class="md:hidden"> Todos los derechos reservados.
</p> </div> </footer> </body></html>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/layouts/Layout.astro", void 0);

const projectId = "tmbwm07z";
const dataset = "production";
const apiVersion = "2024-01-01";
const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: ""
});
createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: "skWnR0jShbhaXDuuKezfKQ4XePwi1Z94EgJxOSe9hAAsEJp0cYJYGerpQ4e156NcG5FofnYqii2p5MSjgnAQNgL2fuFoolbGbacEPvxqkKXjxJzCMGg0s7WzIvVl7Julyql0vWzZTaSyT9VHY2Rg4ZrrRhxdmWv9KJASzxvzTDAHetz1WbDA"
});
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const queries = {
  event: `*[_type == "event"][0]{
    title,
    "slug": slug.current,
    edition,
    description,
    date,
    startTime,
    location { city, province, venue, address },
    ticketPrice,
    ticketUrl,
    whatsapp,
    status
  }`,
  competitions: `*[_type == "competition" && isActive == true]|order(order asc){
    _id,
    name,
    "slug": slug.current,
    description,
    type,
    prize,
    icon,
    "image": image.asset->url
  }`,
  shows: `*[_type == "show"]|order(order asc){
    _id,
    artist,
    "slug": slug.current,
    genre,
    description,
    "photo": photo.asset->url,
    youtubeVideo,
    instagram,
    spotify
  }`,
  sponsors: `*[_type == "sponsor"]|order(order asc){
    _id,
    name,
    "logo": logo.asset->url,
    website,
    tier
  }`,
  gallery: `*[_type == "gallery"][0]{
    title,
    "images": images[].asset->url
  }`
};

function getRemaining(targetISO) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const sec = Math.floor(diff / 1e3);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor(sec % 86400 / 3600);
  const minutes = Math.floor(sec % 3600 / 60);
  const seconds = sec % 60;
  return { diff, days, hours, minutes, seconds };
}
function Countdown({ target, label = "Falta para el evento" }) {
  const [t, setT] = React.useState(() => getRemaining(target));
  React.useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1e3);
    return () => clearInterval(id);
  }, [target]);
  const ended = t.diff <= 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-live": "polite",
      className: "mt-4 inline-flex flex-col items-center gap-2",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm opacity-80", children: ended ? "¡Arrancó la fiesta!" : label }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 text-center", children: [
          { v: t.days, k: "Días" },
          { v: t.hours, k: "Hs" },
          { v: t.minutes, k: "Min" },
          { v: t.seconds, k: "Seg" }
        ].map(({ v, k }) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "min-w-[62px] rounded-xl bg-white/70 shadow-sm px-3 py-2",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold tabular-nums", children: String(v).padStart(2, "0") }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wide opacity-70", children: k })
            ]
          },
          k
        )) })
      ]
    }
  );
}

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const eventData = await sanityClient.fetch(queries.event).catch(() => null);
  const event = eventData || {
    title: "Olimpiada de Asadores",
    edition: 3};
  const targetISO = eventData?.date ? `${eventData.date}T${eventData.startTime || "18:00"}:00-03:00` : null;
  const locationText = eventData?.location?.venue ? eventData.location.venue : eventData?.location?.city ? `${eventData.location.city}, ${eventData.location.province}` : "Próximamente en Capital Federal";
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-section class="section scroll-mt-20 mt-20"> <div class="container"> <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"> <!-- Logo a la izquierda en desktop --> <img src="/logo.webp" alt="Olimpiada de Asadores" class="h-40 md:h-64 w-auto order-1"> <!-- Texto a la derecha en desktop --> <div class="text-center order-2"> <h1 class="font-display text-3xl md:text-5xl lg:text-6xl leading-tight"> ${event.title.toUpperCase()} </h1> ${event.edition && renderTemplate`<h2 class="text-2xl md:text-3xl font-bold mt-2"> ${event.edition}.ª Edición
</h2>`} <h3 class="text-3xl md:text-4xl font-title block py-4"> ${locationText} </h3> ${targetISO && renderTemplate`${renderComponent($$result, "Countdown", Countdown, { "client:visible": true, "target": targetISO, "client:component-hydration": "visible", "client:component-path": "@/components/Countdown", "client:component-export": "default" })}`} </div> </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/Hero.astro", void 0);

const $$CompetitionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CompetitionCard;
  const { name, description, image, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative bg-sombra/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-fuego/20 hover:border-fuego/50"> <!-- Glow effect al hover --> <div class="absolute inset-0 bg-gradient-to-br from-fuego/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="w-full h-48 overflow-hidden relative"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"> <!-- Overlay oscuro --> <div class="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"></div> </div> <div class="p-5 relative"> ${icon && renderTemplate`<span class="text-3xl absolute top-3 right-4">${icon}</span>`} <h2 class="text-lg font-bold text-crema mb-2 group-hover:text-fuego transition-colors"> ${name} </h2> <p class="text-crema/70 leading-relaxed text-sm"> ${description} </p> </div> </div>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/CompetitionCard.astro", void 0);

const $$Competitions = createComponent(async ($$result, $$props, $$slots) => {
  const competitions = await sanityClient.fetch(queries.competitions).catch(() => []);
  const defaultCompetitions = [
    {
      id: "choripan",
      name: "Cagao' de hambre",
      description: "Quien se come el choripán más rápido.",
      image: "/images/competitions/choripan.webp"
    },
    {
      id: "fotografia",
      name: "Fotografía",
      description: "Saca la mejor foto del evento y subiendola con el hashtag #OlimpiadaDeAsadores.",
      image: "/images/competitions/fotografia.webp"
    },
    {
      id: "trivia",
      name: "Trivia",
      description: "Quien sabe más sobre el asado y la cultura argentina🇦🇷.",
      image: "/images/competitions/trivia.webp"
    },
    {
      id: "fuego_rapido",
      name: "¡Quien enciende el fuego más rápido?",
      description: "Demostra tus habilidades de encendido de fuego en esta competencia.",
      image: "/images/competitions/fuego_rapido.webp"
    },
    {
      id: "campeonato_de_truco",
      name: "Campeonato de Truco",
      description: "Competencia de truco por equipos en pareja de a 2.",
      image: "/images/competitions/campeonato_de_truco.webp"
    },
    {
      id: "sapucay",
      name: "Sapucay",
      description: "Demostra que tu sapucay es el mejor de todos.",
      image: "/images/competitions/sapucay.webp"
    },
    {
      id: "fondo_blanco_buller",
      name: "Fondo Blanco Buller",
      description: "Tomate una pinta Buller en el menor tiempo posible.",
      image: "/images/competitions/fondo_blanco_buller.webp"
    }
  ];
  const competitionsList = competitions.length > 0 ? competitions.map((c) => ({
    id: c.slug,
    name: c.name,
    description: c.description,
    image: c.image || "/images/competitions/default.webp",
    icon: c.icon
  })) : defaultCompetitions;
  return renderTemplate`${maybeRenderHead()}<section id="competencias" data-section class="section scroll-mt-20"> <div class="container text-center"> <h2 class="section-title mb-4">Competencias</h2> <h3 class="mb-4 text-3xl text-center max-w-2xl mx-auto">
La Olimpiada no es solo para mirar… <span class="font-bold text-fuego">¡también es para participar!</span> </h3> <p class="mb-8 text-xl text-center max-w-3xl mx-auto text-crema/70">
Competencias para todo el mundo. Elegí la tuya y animate a competir.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${competitionsList.map((competition) => renderTemplate`${renderComponent($$result, "CompetitionCard", $$CompetitionCard, { "key": competition.id, ...competition })}`)} </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/Competitions.astro", void 0);

const $$Shows = createComponent(async ($$result, $$props, $$slots) => {
  const shows = await sanityClient.fetch(queries.shows).catch(() => []);
  const defaultShows = [
    { name: "La Quijada", image: "" },
    { name: "Juanchy Osuna", image: "" },
    { name: "Lucho Ciganda", image: "" }
  ];
  const showsList = shows.length > 0 ? shows.map((s) => ({
    name: s.artist,
    image: s.photo
  })) : defaultShows;
  return renderTemplate`${maybeRenderHead()}<section id="shows" data-section class="section scroll-mt-20"> <div class="container"> <h2 class="section-title text-center text-crema">Reviví los shows de la Olimpiada</h2> <p class="text-xl text-center mb-10 text-crema/70 max-w-2xl mx-auto">
Artistas que acompañaron el fuego con la mejor música en vivo.
</p> ${showsList.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${showsList.map((show, index) => renderTemplate`<div class="group relative bg-sombra/40 rounded-xl overflow-hidden border border-fuego/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(194,65,12,0.3)] hover:border-fuego/60"> <div class="absolute inset-0 bg-gradient-to-br from-fuego/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> ${show.image ? renderTemplate`<div class="w-full aspect-square overflow-hidden relative"> <img${addAttribute(show.image, "src")}${addAttribute(show.name, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-80"></div> </div>` : renderTemplate`<div class="w-full aspect-square flex items-center justify-center bg-sombra/60 relative"> <span class="text-crema/30 font-ui italic">Sin imagen</span> <div class="absolute inset-0 bg-gradient-to-t from-carbon to-transparent opacity-80"></div> </div>`} <div class="absolute bottom-0 inset-x-0 p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"> <h3 class="font-ui text-lg font-bold text-crema group-hover:text-fuego transition-colors drop-shadow-md"> ${show.name} </h3> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-crema/50 font-ui italic text-lg">Próximamente anunciaremos la grilla de artistas...</p> </div>`} </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/Shows.astro", void 0);

const $$Sponsors = createComponent(async ($$result, $$props, $$slots) => {
  const sponsors = await sanityClient.fetch(queries.sponsors).catch(() => []);
  const defaultSponsors = [
    {
      name: "Malbicho",
      image: "/sponsors/malbicho.webp",
      href: "http://www.malbichowines.com/"
    },
    {
      name: "Buller",
      image: "/sponsors/buller.webp",
      href: "https://bullerbrewingco.com/"
    },
    {
      name: "Ñuke",
      image: "/sponsors/ñuke.webp",
      href: "https://productosnuke.com.ar/"
    },
    {
      name: "Catalinas Club",
      image: "/sponsors/catalinas-club.webp",
      href: "https://catalinasclub.com.ar/"
    }
  ];
  const sponsorsList = sponsors.length > 0 ? sponsors.map((s) => ({
    name: s.name,
    image: s.logo ? urlFor(s.logo).width(200).url() : s.logo,
    href: s.website,
    tier: s.tier
  })) : defaultSponsors;
  return renderTemplate`${maybeRenderHead()}<section id="sponsors" data-section class="section scroll-mt-20"> <div class="container text-center"> <h2 class="section-title">Sponsors & Colaboradores</h2> <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> ${sponsorsList.map((s) => renderTemplate`<div class="group rounded-2xl shadow-md p-6 flex flex-col items-center justify-center
                 border border-black/5 transition-all hover:shadow-lg hover:scale-105"> <a${addAttribute(s.href, "href")} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center"> <img${addAttribute(s.image, "src")}${addAttribute(s.name, "alt")} class="w-32 h-32 object-contain mb-3 transition-transform group-hover:scale-110"> <span class="text-sm font-semibold">${s.name}</span> </a> </div>`)} </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/Sponsors.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="conoce_mas" data-section class="section scroll-mt-20"> <div class="container"> <h2 class="section-title text-center mb-8">Qué es la Olimpiada de Asadores?</h2> <div class="flex flex-col md:flex-row gap-8 items-center"> <!-- Imagen a la izquierda --> <div class="md:w-1/2"> <img src="/hero.webp" alt="Olimpiada de Asadores" class="w-full rounded-xl shadow-lg"> </div> <!-- Texto a la derecha --> <div class="md:w-1/2 text-center md:text-left"> <h3 class="text-xl md:text-2xl leading-relaxed">
La Olimpiada de Asadores reúne a los mejores parrilleros del país en una
          competencia única que define al gran campeón. El escenario se enciende con
          artistas de trayectoria nacional y espectáculos folclóricos en vivo.
</h3> <h3 class="text-xl md:text-2xl leading-relaxed mt-4">
Además, el público puede participar en juegos y desafíos criollos mientras
          disfruta de la mejor comida: un verdadero banquete de tradición argentina.
</h3> </div> </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/About.astro", void 0);

const $$Central = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="central" data-section class="section scroll-mt-20"> <div class="container"> <h2 class="section-title text-center">Competencia Central</h2> <div class="text-center mb-8"> <h3 class="text-2xl lg:text-3xl font-semibold text-[--color-ink] leading-relaxed">
Los mejores asadores del país compitiendo por ser el campeón definitivo.
</h3> </div> <!-- Layout texto + imagen --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"> <!-- Imagen a la izquierda --> <div class="order-1 lg:order-1 flex justify-center"> <img src="/central.webp" alt="Competencia Central" class="w-full max-w-md rounded-xl shadow-lg"> </div> <!-- Texto a la derecha --> <div class="order-2 lg:order-2"> <p class="text-lg text-[--color-ink]/80 leading-relaxed mb-4">
20 de los mejores asadores del país se enfrentan en la competencia más
          esperada. Cada uno muestra su técnica, estilo y pasión por el arte de
          la parrilla.
</p> <p class="text-lg text-[--color-ink]/80 leading-relaxed mb-4">
Un jurado especializado evalúa cada asado considerando:
<span class="font-bold">cocción, sabor, presentación y creatividad</span>.
</p> <p class="text-lg text-[--color-ink]/80 leading-relaxed">
El campeón se lleva el reconhecimento como el mejor asador de la
          Olimpiada.
</p> </div> </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/Central.astro", void 0);

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  if (!images || images.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-gray-500", children: "No hay imágenes en la galería aún." });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: images.map((image, index) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setSelectedImage(image),
        className: "group relative aspect-square overflow-hidden rounded-xl cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" }),
          image.caption && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity", children: image.caption })
        ]
      },
      index
    )) }),
    selectedImage && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",
        onClick: () => setSelectedImage(null),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white text-3xl hover:text-gray-300",
              onClick: () => setSelectedImage(null),
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: selectedImage.src,
              alt: selectedImage.alt,
              className: "max-w-full max-h-full object-contain rounded-lg",
              onClick: (e) => e.stopPropagation()
            }
          ),
          selectedImage.caption && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-0 right-0 text-center text-white text-lg", children: selectedImage.caption })
        ]
      }
    )
  ] });
}

const $$EventGallery = createComponent(async ($$result, $$props, $$slots) => {
  const galleryData = await sanityClient.fetch(queries.gallery).catch(() => null);
  const images = galleryData?.images || [];
  const galleryImages = images.length > 0 ? images.map((url) => ({
    src: url,
    alt: "Imagen del evento",
    caption: ""
  })) : [
    { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=600&fit=crop", alt: "Ejemplo", caption: "Competencia Central" },
    { src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=600&fit=crop", alt: "Ejemplo", caption: "Shows" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=600&fit=crop", alt: "Ejemplo", caption: "Ambiente" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="galeria" data-section class="section scroll-mt-20"> <div class="container text-center"> <h2 class="section-title text-crema">Galería</h2> <h3 class="text-xl mb-12 text-crema/70 leading-relaxed max-w-3xl mx-auto">
Reviví los mejores momentos de la Olimpiada. Una jornada inolvidable donde el fuego y la pasión fueron los protagonistas.
</h3> <div class="p-2 md:p-6 bg-sombra/20 rounded-2xl border border-fuego/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"> ${renderComponent($$result, "GalleryGrid", GalleryGrid, { "client:load": true, "images": galleryImages, "client:component-hydration": "load", "client:component-path": "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/GalleryGrid.tsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/components/EventGallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Olimpiada de Asadores — 3.ª Edición", "textColor": "text-black" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Central", $$Central, {})} ${renderComponent($$result2, "Shows", $$Shows, {})} ${renderComponent($$result2, "Competitions", $$Competitions, {})} ${renderComponent($$result2, "EventGallery", $$EventGallery, {})} <!-- <Tickets /> --> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} <!-- <Faq client:load /> --> </main> ` })}`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
