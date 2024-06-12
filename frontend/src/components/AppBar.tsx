import { Link } from "react-router-dom"
const AppBar = () => {
  return (
    <div className="fixed top-0 z-[999] bg-white">
      <div className="w-screen  overflow-hidden flex justify-center">
      <div className="w-[90%] overflow-hidden h-full min-h-[100px] flex flex-wrap justify-between max-md:justify-center items-center">
        <div className="flex items-center gap-3">
          <Link to={"/"} className="flex items-center gap-1">
            <img
              className="h-[80px] text-6xl"
              src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="" />
            <p className="text-3xl font-bold" >MEDIUM</p>
          </Link>
          <p className="font-thin">Help Center</p>
        </div>

        <div className="flex gap-2 items-center">
          <Link className="text-sm" to={"/"}>Back to medium.com</Link>
          <a href={"/publish"}><button className="border-2 border-slate-800 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in">Create a new Blog</button></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AppBar