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