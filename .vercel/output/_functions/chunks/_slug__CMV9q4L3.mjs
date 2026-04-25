import { c as createComponent } from './astro-component_BgSGCmWG.mjs';
import 'piccolore';
import { r as renderTemplate } from './entrypoint_BgqOtCCY.mjs';
import 'clsx';

const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (slug) {
    return Astro2.redirect("/");
  }
  return renderTemplate``;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
