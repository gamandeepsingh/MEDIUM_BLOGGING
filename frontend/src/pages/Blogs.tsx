import toast from 'react-hot-toast';
import AppBar from '../components/AppBar'
import BlogCard from '../components/BlogCard'
import {useBlogs} from '../hooks'
import { BACKEND_URL } from '../config';
import BlogSkeleton from '../components/BlogSkeleton';

type BlogsProps = { author: { name: string }, content: string, title: string ,createdAt:Date, category:string,id:string}[]

const Blogs = () => {
  const { blogs, loading, error }: { blogs: BlogsProps, loading: boolean, error: string | null } = useBlogs(`${BACKEND_URL}/api/v1/blog/bulk`);

  if (error) {
    return <div>
      {toast.error("Error while Fetching Blogs")}
    </div>
  }

  return (
    <div>
      <AppBar />
      {
        loading ? <div className='w-screen flex flex-col justify-center items-center'>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div> : null
      }
      <div className='flex flex-col justify-start overflow-x-hidden items-center gap-4 mt-[150px]'>
        {
          blogs && blogs.length > 0 &&
          blogs.map((item, index) => {
            return (
              <BlogCard category={item?.category} blogId={item.id} key={index} authorName={item?.author?.name} content={item.content} publishedDate={item?.createdAt} title={item.title} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Blogs