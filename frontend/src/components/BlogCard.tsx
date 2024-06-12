import moment from "moment-timezone"

type BlogProps = {
  authorName: string,
  title: string,
  content: string,
  publishedDate: Date,
  category: string,
  blogId: string
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  category,
  blogId
}: BlogProps) => {
  return (
    <div onClick={() => { window.location.href = `/blog/${blogId}` }} className="cursor-pointer">
      <div className="max-w-[1080px] w-[90vw] flex-wrap flex justify-around min-h-48 h-full rounded-3xl p-4 overflow-hidden">
        <div className="flex flex-col w-[60%] max-md:w-full">
          <div className="flex gap-2 items-center mb-3 justify-between flex-wrap">
            <div className="flex gap-2 items-center mb-3 pt-4">
              <span className="relative inline-flex items-center justify-center w-[40px] h-[40px] bg-gray-600 rounded-full">
                <span className="font-medium text-gray-300 overflow-hidden w-[40px] h-[40px] flex justify-center items-center">
                  {authorName[0].toUpperCase()}
                </span>
              </span>
              <span className="font-bold text-md text-black tracking-wide font-sans text-wrap">
                {authorName}
              </span>
            </div>
            <span className="font-light text-md text-slate-500 text-nowrap font-thin">
              {moment.utc(publishedDate).tz('Asia/Kolkata').format('DD-MM-YYYY')}
            </span>
          </div>
          <div className="text-4xl font-medium tracking-wider font-sans break-words">
            {title}
          </div>
          <div className="text-xl font-extralight font-thin break-words overflow-hidden">
            {content.slice(0, 200)}...
          </div>
          <div className="font-medium text-xs mt-5">
            {`${Math.ceil(content.length / 100)} min read`}
          </div>
          <div className="bg-slate-200 flex w-fit px-2 py-1 rounded-md text-sm font-thin m-1">
            {category}
          </div>
        </div>
        <div className="w-[20%] flex justify-center items-center max-md:w-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/140/806/non_2x/profile-glyph-circle-background-icon-vector.jpg"
            alt={title}
            className="w-[200px] rounded-full overflow-hidden"
          />
        </div>
        <div className="w-[90%] h-[2px] bg-slate-600 opacity-10 mt-2"></div>
      </div>

    </div>
  )
}

export default BlogCard