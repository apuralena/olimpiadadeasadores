export const show = {
  name: "show",
  title: "Show",
  type: "document",
  fields: [
    {
      name: "artist",
      title: "Artista/Agrupación",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "artist" },
    },
    {
      name: "genre",
      title: "Género",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "youtubeVideo",
      title: "Video YouTube (ID)",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
    {
      name: "spotify",
      title: "Spotify",
      type: "string",
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "artist",
      subtitle: "genre",
    },
  },
};

export const sponsor = {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "website",
      title: "Website",
      type: "url",
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
          { title: "Colaborador", value: "partner" },
        ],
      },
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tier",
    },
  },
};

export const competitor = {
  name: "competitor",
  title: "Competidor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "bio",
      title: "Biografía",
      type: "text",
    },
    {
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
    {
      name: "youtube",
      title: "YouTube",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "region",
      title: "Región/Origen",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "region",
    },
  },
};

export const galleryImage = {
  name: "galleryImage",
  title: "Imagen de Galería",
  type: "image",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Competencia", value: "competition" },
          { title: "Shows", value: "shows" },
          { title: "Gastronomía", value: "food" },
          { title: "Público", value: "audience" },
          { title: "Sponsors", value: "sponsors" },
          { title: "General", value: "general" },
        ],
      },
    },
    {
      name: "edition",
      title: "Edición",
      type: "number",
    },
    {
      name: "alt",
      title: "Texto alternativo",
      type: "string",
    },
  ],
};