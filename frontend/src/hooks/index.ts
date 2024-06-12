import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

type PostProps = {
    title?: string
    content?: string
    category?: string
}

export const useBlogs = (url: string) => {
    const [loading, setloading] = useState(true)
    const [blogs, setBlog] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then((res) => {
                setBlog(res?.data?.blog)
                setloading(false)
            })
            .catch((e) => {
                setError(e);
                console.log(e);

            })
    }, [])

    return {
        loading,
        blogs,
        error
    }
}

export const usePost = (postData: PostProps) => {
    const [loading, setloading] = useState(true)
    const [error, setError] = useState("")
    if (!postData.title || !postData.content || !postData.category) return setError("Please fill all the fields")

    useEffect(() => {
        axios.post(`${BACKEND_URL}/api/v1/blog`,
            {
                data: {
                    title: postData.title,
                    content: postData.content,
                    category: postData.category
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then(() => {
                setloading(false)
            })
            .catch(() => {
                setloading(false)
                setError("error while posting blog");
            })
    }, [])

    return {
        loading,
        error
    }
}
