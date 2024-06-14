import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { middleWare } from "../middlewares/index";
import {createBlogInput, updateBlogInput} from "@gamandeep/zod-medium"

type Environment = {
    Bindings: {
        DATABASE_URL: string
    },
    Variables:{
        userId : string
    }
}

export const blogRouter = new Hono<Environment>();

blogRouter.use("/*",middleWare)

blogRouter.get('/bulk',async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const blog = await prisma.post.findMany({
            select:{
                id:true,
                title:true,
                content:true,
                createdAt:true,
                category:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        console.log(error);
        c.status(411)
        return c.json({
            msg: "Error while Fetching Blogs",
            error
        })
    }
  })

blogRouter.post('/', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const body = await c.req.json();
        const {success} = createBlogInput.safeParse(body)
        if(!success) {
            c.status(403)
            return c.json({
                msg:"Invalid Text Input"
            })
        }
    
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get("userId"),
                createdAt: new Date(),
                updatedAt: new Date(),
                category: body.category
            }
        })
    
        return c.json({
            blog: post.id
        })
    } catch (error) {
        console.log(error);
        c.status(411)
        return c.json({
            msg: "Error while Uploading Post",
            error
        })
    }
})


blogRouter.put('/',async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const body = await c.req.json();
        const {success} = updateBlogInput.safeParse(body)
        if(!success) {
            c.status(403)
            return c.json({
                msg:"Invalid Text Input"
            })
        }
        const post = await prisma.post.update({
            where:{
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
                updatedAt: new Date(),
                category: body.category
            }
        })
    
        return c.json({
            blog: post.id,
            post
        })
    } catch (error) {
        console.log(error);
        c.status(411)
        return c.json({
            msg: "Error while Updating Blog Post",
            error
        })
    }
  })

blogRouter.get('/:id',async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const id = c.req.param('id')
    
        const post = await prisma.post.findMany({
            where : {
                id : id
            },
            select:{
                id:true,
                title:true,
                content:true,
                createdAt:true,
                category:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
    
        return c.json({
            blog:  post
        })
    } catch (error) {
        console.log(error);
        c.status(411)
        return c.json({
            msg: "Error while Fetching Bolg Post",
            error
        })
    }
  })

