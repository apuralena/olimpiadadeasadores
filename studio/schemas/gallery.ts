export const gallery = {
  name: "gallery",
  title: "Galería",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Galería Principal",
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
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
};