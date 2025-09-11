export type CompetitionId =
  | "degustacion"
  | "choripan"
  | "fotografia"
  | "trivia"
  | "fuego_rapido"
  | "truco"
  | "sapucay";

export type CompetitionKind = "individual" | "truco";

export const COMPETITIONS: Array<{
  id: CompetitionId;
  label: string;
  kind: CompetitionKind;
}> = [
  { id: "degustacion", label: "Degustación a ciegas", kind: "individual" },
  { id: "choripan", label: "Cagao’ de hambre (choripán)", kind: "individual" },
  { id: "fotografia", label: "Mejor fotografía", kind: "individual" },
  { id: "trivia", label: "Trivia argenta", kind: "individual" },
  {
    id: "fuego_rapido",
    label: "Encender el fuego más rápido",
    kind: "individual",
  },
  {
    id: "sapucay",
    label: "El mejor Sapucay",
    kind: "individual",
  },
  { id: "truco", label: "Campeonato de Truco (parejas)", kind: "truco" },
];
