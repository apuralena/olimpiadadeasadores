export const event = {
  name: "event",
  title: "Evento",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "edition",
      title: "Edición",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "date",
      title: "Fecha del evento",
      type: "datetime",
    },
    {
      name: "location",
      title: "Ubicación",
      type: "object",
      fields: [
        { name: "city", title: "Ciudad", type: "string" },
        { name: "province", title: "Provincia", type: "string" },
        { name: "venue", title: "Lugar", type: "string" },
        { name: "address", title: "Dirección", type: "string" },
      ],
    },
    {
      name: "startTime",
      title: "Hora de inicio",
      type: "string",
    },
    {
      name: "ticketPrice",
      title: "Precio de entrada",
      type: "number",
    },
    {
      name: "ticketUrl",
      title: "Link de venta",
      type: "url",
    },
    {
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
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
          { title: "Finalizado", value: "finished" },
        ],
      },
      initialValue: "draft",
    },
    {
      name: "heroImage",
      title: "Imagen hero",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "edition",
    },
  },
};