import { useState } from "react"
import AppBar from "./AppBar"
import toast from "react-hot-toast"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

type PostProps = {
  title?: string
  content?: string
  category?: string
}

const Publish = () => {
  const [postData, setPostData] = useState<PostProps>({
    title: "",
    content: "",
    category: ""
  })
  const [loading, setloading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  function handlePost(e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    if (name === "title" && value.length > 200) return toast.error("Title should be less than 200 characters")
    if (name === "content" && value.length > 2500) return toast.error("Content should be less than 2500 characters")
    setPostData({
      ...postData,
      [name]: value
    })
  }

  async function postBlog() {
    if (!postData.title || !postData.content || !postData.category) return toast.error("Please fill all the fields")
    const loadingToastId = toast.loading("Posting Blog");
    setloading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title: postData.title,
        content: postData.content,
        category: postData.category,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      toast.dismiss(loadingToastId);
      setloading(false);
      setError("");
      navigate(`/blog/${res.data.blog}`)
    } catch (err) {
      setloading(false);
      setError("error while posting blog");
    }
  }
  if (error) return toast.error(error)
  // if (loading) return toast.loading("Posting Blog")

  return (
    <div className="w-screen flex flex-col items-center mb-[100px]">
      <AppBar />
      <div className="mb-6 mt-[120px] w-[70%] max-w-[1080px] max-md:w-[95%] flex flex-col gap-4">
        <div className="flex items-center w-full justify-between">
          <p className="font-semibold text-2xl">Enter the title of your Blog : </p>
          <p className="font-thin text-sm">Max len: 200</p>
        </div>
        <textarea name="title" onChange={handlePost} className="block w-full p-4 text-gray-900 rounded-lg bg-gray-50 text-base focus:none focus:border-blue-500 " value={postData.title} placeholder="Enter Title......" />
        <div className="flex items-center w-full justify-between">
          <p className="font-semibold text-2xl">Enter the content of your Blog : </p>
          <p className="font-thin text-sm">Max len: 200</p>
        </div>
        <textarea name="content" onChange={handlePost} className="block w-full p-4 text-gray-900 rounded-lg bg-gray-50 text-base focus:none focus:border-blue-500 " rows={8} value={postData.content} placeholder="Enter Content......" />
        <label htmlFor="category">
          Select category
        </label>
        <select name="category" onChange={handlePost} value={postData.category} id="">
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
          <option value="Social Studies">Social Studies</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
        </select>
        <button onClick={postBlog} className="border-2 border-slate-800 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in w-fit">Post</button>
      </div>

    </div>
  )
}

export default Publish