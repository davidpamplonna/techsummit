import {z} from 'zod';

export const schemas = z.object({
    name: z.string().min(1,  "Nome é obrigatório"),
    email: z.string().email("Insira um e-mail válido"),
    ticket: z.string().min(1, "Cargo ou área de atuação é obrigatório"),
    terms: z.literal(true, {
       errorMap: () => ({ message: 'Você deve aceitar os termos' }),
    })
})

export type FormData = z.infer<typeof schemas>;

