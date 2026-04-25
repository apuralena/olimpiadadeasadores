import { c as createComponent } from './astro-component_BgSGCmWG.mjs';
import 'piccolore';
import { l as renderHead, n as renderComponent, r as renderTemplate } from './entrypoint_BgqOtCCY.mjs';
import { defineConfig, Studio } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

const event = {
  name: "event",
  title: "Evento",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" }
    },
    {
      name: "edition",
      title: "Edición",
      type: "number",
      validation: (Rule) => Rule.required()
    },
    {
      name: "description",
      title: "Descripción",
      type: "text"
    },
    {
      name: "date",
      title: "Fecha del evento",
      type: "datetime"
    },
    {
      name: "location",
      title: "Ubicación",
      type: "object",
      fields: [
        { name: "city", title: "Ciudad", type: "string" },
        { name: "province", title: "Provincia", type: "string" },
        { name: "venue", title: "Lugar", type: "string" },
        { name: "address", title: "Dirección", type: "string" }
      ]
    },
    {
      name: "startTime",
      title: "Hora de inicio",
      type: "string"
    },
    {
      name: "ticketPrice",
      title: "Precio de entrada",
      type: "number"
    },
    {
      name: "ticketUrl",
      title: "Link de venta",
      type: "url"
    },
    {
      name: "whatsapp",
      title: "WhatsApp",
      type: "string"
    },
    {
      name: "status",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "Borrador", value: "draft" },
          { title: "Próximamente", value: "upcoming" },
          { title: "Venta abierta", value: "onsale" },
          { title: "En vivo", value: "live" },
          { title: "Finalizado", value: "finished" }
        ]
      },
      initialValue: "draft"
    },
    {
      name: "heroImage",
      title: "Imagen hero",
      type: "image",
      options: { hotspot: true }
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "edition"
    }
  }
};

const competition = {
  name: "competition",
  title: "Competencia",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "description",
      title: "Descripción",
      type: "text"
    },
    {
      name: "rules",
      title: "Reglas",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Individual", value: "individual" },
          { title: "En parejas", value: "pairs" },
          { title: "Equipo", value: "team" },
          { title: "Público", value: "audience" }
        ]
      }
    },
    {
      name: "prize",
      title: "Premio",
      type: "string"
    },
    {
      name: "icon",
      title: "Icono (emoji)",
      type: "string"
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "isActive",
      title: "Activa",
      type: "boolean",
      initialValue: true
    },
    {
      name: "order",
      title: "Orden",
      type: "number"
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type"
    }
  }
};

const show = {
  name: "show",
  title: "Show",
  type: "document",
  fields: [
    {
      name: "artist",
      title: "Artista/Agrupación",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "artist" }
    },
    {
      name: "genre",
      title: "Género",
      type: "string"
    },
    {
      name: "description",
      title: "Descripción",
      type: "text"
    },
    {
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "youtubeVideo",
      title: "Video YouTube (ID)",
      type: "string"
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string"
    },
    {
      name: "spotify",
      title: "Spotify",
      type: "string"
    },
    {
      name: "order",
      title: "Orden",
      type: "number"
    }
  ],
  preview: {
    select: {
      title: "artist",
      subtitle: "genre"
    }
  }
};
const sponsor = {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "website",
      title: "Website",
      type: "url"
    },
    {
      name: "tier",
      title: "Nivel",
      type: "string",
      options: {
        list: [
          { title: "Oro", value: "gold" },
          { title: "Plata", value: "silver" },
          { title: "Bronce", value: "bronze" },
          { title: "Colaborador", value: "partner" }
        ]
      }
    },
    {
      name: "order",
      title: "Orden",
      type: "number"
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tier"
    }
  }
};

const competitor = {
  name: "competitor",
  title: "Competidor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "bio",
      title: "Biografía",
      type: "text"
    },
    {
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string"
    },
    {
      name: "youtube",
      title: "YouTube",
      type: "string"
    },
    {
      name: "website",
      title: "Website",
      type: "url"
    },
    {
      name: "region",
      title: "Región/Origen",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "region"
    }
  }
};

const gallery = {
  name: "gallery",
  title: "Galería",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Galería Principal"
    },
    {
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Descripción",
              type: "string"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0"
    }
  }
};

const schemaTypes = [
  event,
  competition,
  show,
  sponsor,
  competitor,
  gallery
];

const config = defineConfig({
  name: "olimpiada-de-asadores",
  title: "Olimpiada de Asadores",
  basePath: "/admin",
  // Hardcodeado para el Studio
  projectId: "tmbwm07z",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) => S.list().title("Contenido").items([
        S.listItem().title("Evento").child(S.document().schemaType("event").documentId("event")),
        S.divider(),
        S.documentTypeListItem("competition").title("Competencias"),
        S.documentTypeListItem("show").title("Shows"),
        S.documentTypeListItem("sponsor").title("Sponsors"),
        S.divider(),
        S.documentTypeListItem("competitor").title("Competidores"),
        S.documentTypeListItem("gallery").title("Galería")
      ])
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
});

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const studioConfig = {
    ...config,
    token: undefined                                       
  };
  return renderTemplate`<html lang="es" data-astro-cid-2zp6q64z> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Admin — Olimpiada de Asadores</title>${renderHead()}</head> <body data-astro-cid-2zp6q64z> ${renderComponent($$result, "Studio", Studio, { "config": studioConfig, "data-astro-cid-2zp6q64z": true })} </body></html>`;
}, "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/admin.astro", void 0);
const $$file = "C:/Users/Lucas/Documents/olimpiadadeasadores/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
