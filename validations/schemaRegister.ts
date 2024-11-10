import { z } from 'zod';

export const schemaRegister = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type FormDataRegister = z.infer<typeof schemaRegister>;
