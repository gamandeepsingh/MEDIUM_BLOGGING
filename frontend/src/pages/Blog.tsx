import { BACKEND_URL } from "../config";
import moment from "moment-timezone";
import AppBar from "../components/AppBar";
import {useBlogs} from "../hooks";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import BlogSkeleton from "../components/BlogSkeleton";

type BlogProps = {
  author: {
    name: string;
  };
  title: string;
  content: string;
  createdAt: Date;
  category: string;
  id: string;
};

const Blog = () => {
  const id = window.location.pathname.split("/")[2];
  const { blogs, loading, error }: { blogs: BlogProps[], loading: boolean, error: string | null } = useBlogs(`${BACKEND_URL}/api/v1/blog/${id}`);

  if (error) {
    return <div>
      {toast.error("Error while Fetching Blogs")}
    </div>;
  }

  return (
    <div className="w-screen overflow-x-hidden flex justify-center">
      <AppBar />
      {loading ? <BlogSkeleton/> :null}
      {blogs && blogs.length > 0 && (
        
          <div className="mt-[150px] flex flex-col items-start justify-center w-[60%]">
          <div className="text-6xl font-extrabold font-sans py-2 w-fit">
            {blogs[0].title}
          </div>
          <div className="font-light text-md text-slate-500 text-nowrap font-thin float-left">
            {moment.utc(blogs[0].createdAt).tz("Asia/Kolkata").format("DD-MM-YYYY")}
          </div>
          <div className="flex  items-center w-full justify-between ">
            <div className="flex items-center mt-4">
              <span className="relative inline-flex items-center justify-center w-[30px] h-[30px] bg-gray-600 rounded-full">
                {blogs[0].author && (
                  <span className="font-medium text-gray-300 overflow-hidden w-[40px] h-[40px] flex justify-center items-center">
                    {blogs[0].author.name.charAt(0)}
                  </span>
                )}
              </span>
              {blogs[0].author.name && (
                <div className="text-md font-bold font-sans underline ml-2">
                  {blogs[0].author.name}
                </div>
              )}
            </div>
            <div className="bg-slate-200 flex w-fit px-2 py-1 rounded-md text-sm font-thin mt-2 mr-[10%]">{blogs[0].category}</div>
          </div>

          <div className="text-xl font-extralight font-thin">{blogs[0].content}</div>
        </div>
        )
      }
    </div>
  );
};

export default Blog;
