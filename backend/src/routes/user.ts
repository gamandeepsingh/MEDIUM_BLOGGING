import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinBody, signupBody } from "@gamandeep/zod-medium";


type Environment = {
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
        id: string
    }
}

export const userRouter = new Hono<Environment>();



userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const { success } = signupBody.safeParse(body)
        if (!success) {
            c.status(411)
            return c.json({
                msg: "input not correct"
            })
        }
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
            }
        })
        if (!user) {
            return c.json({
                error: "Fatal Error: No User Created"
            })
        }

        const token = await sign({ id: (user).id }, c.env.JWT_SECRET)

        return c.json({
            user,
            jwt: token
        })

    } catch (error) {
        console.log(error);
        c.status(400)
        return c.json({
            msg: "Error while creating User in DB",
            error
        })

    }
})


userRouter.post('/signin', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const body = await c.req.json();
        const { success } = signinBody.safeParse(body)
        if (!success) {
            c.status(411)
            return c.json({
                msg: "input not correct"
            })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if (!user) {
            c.status(403)
            return c.json({
                error: "Invalid Email or Password"
            })
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({
            user,
            jwt: token
        })
    } catch (error) {
        console.log(error);
        c.status(411)
        return c.json({
            msg: "Error while Logging User",
            error
        })
    }
})


