import z from "zod"

export const signupBody = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(3)
})

export const signinBody = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const createBlogInput = z.object({
    title: z.string().max(50),
    content: z.string().max(500),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.string()
})

export const updateBlogInput = z.object({
    title: z.string().max(50),
    content: z.string().max(500),
    id: z.string(),
    updatedAt: z.string(),
    category: z.string().optional()
})

export type SignupInput = z.infer<typeof signupBody>
export type SigninInput = z.infer<typeof signinBody>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>