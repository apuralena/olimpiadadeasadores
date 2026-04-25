import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "olimpiada-de-asadores",
  title: "Olimpiada de Asadores",
  basePath: "/admin",

  // Hardcodeado para el Studio
  projectId: "tmbwm07z",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Evento")
              .child(S.document().schemaType("event").documentId("event")),
            S.divider(),
            S.documentTypeListItem("competition").title("Competencias"),
            S.documentTypeListItem("show").title("Shows"),
            S.documentTypeListItem("sponsor").title("Sponsors"),
            S.divider(),
            S.documentTypeListItem("competitor").title("Competidores"),
            S.documentTypeListItem("gallery").title("Galería"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});