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