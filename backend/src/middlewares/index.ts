import { verify } from "hono/jwt"

export async function middleWare(c: any, next: any) {
    try {
        const headers = c.req.header("Authorization") || "";
    const token = headers.split(" ")[1];
    const verifyToken = await verify(token, c.env.JWT_SECRET)
    if (verifyToken.id) {
        c.set("userId",verifyToken.id)
        await next();
    }
    c.status(403);
    return c.json({
        msg: "Token Verified Failed! Please Login again"
    })
    } catch (error) {
        c.status(403)
        console.log(error);
        
        return c.json({
            msg: "You are not logged in"
        })
        
    }
}
