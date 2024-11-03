import * as z from "zod";

export const schemaLogin = z.object({
  email: z.string()
    .min(1, { message: "Email é obrigatório" })
    .email(),
  password: z.string()
    .min(1, { message: "Senha é obrigatória" })
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
})

export type FormDataLogin = z.infer<typeof schemaLogin>;
