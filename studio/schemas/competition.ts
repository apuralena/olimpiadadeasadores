export const competition = {
  name: "competition",
  title: "Competencia",
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
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "rules",
      title: "Reglas",
      type: "array",
      of: [{ type: "block" }],
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
          { title: "Público", value: "audience" },
        ],
      },
    },
    {
      name: "prize",
      title: "Premio",
      type: "string",
    },
    {
      name: "icon",
      title: "Icono (emoji)",
      type: "string",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "isActive",
      title: "Activa",
      type: "boolean",
      initialValue: true,
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
      subtitle: "type",
    },
  },
};