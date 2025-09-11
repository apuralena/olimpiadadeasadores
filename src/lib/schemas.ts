import { z } from "zod";
import type { CompetitionId } from "./competitions";

export const phoneRegex = /^\+?\d{7,15}$/;

const base = {
  competitionId: z.custom<CompetitionId>(),
  hp: z.string().max(0).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Requerido" }) }),
};

export const IndividualSchema = z.object({
  ...base,
  competitionId: z.enum([
    "degustacion",
    "choripan",
    "fotografia",
    "trivia",
    "fuego_rapido",
    "sapucay",
  ]),
  fullName: z.string().min(3, "Nombre completo demasiado corto"),
  phone: z.string().regex(phoneRegex, "Teléfono inválido"),
});

export const TrucoSchema = z.object({
  ...base,
  competitionId: z.literal("truco"),
  team: z.string().max(80).optional(),
  p1Full: z.string().min(3, "Nombre jugador 1 inválido"),
  p2Full: z.string().min(3, "Nombre jugador 2 inválido"),
  phone: z.string().regex(phoneRegex, "Teléfono inválido"),
});

export const SignupSchema = z.discriminatedUnion("competitionId", [
  IndividualSchema,
  TrucoSchema,
]);

export type SignupInput = z.infer<typeof SignupSchema>;
