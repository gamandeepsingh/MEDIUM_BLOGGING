import Auth from "../components/Auth"
import Quote from "../components/Quote"


const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="max-md:hidden">
          <Quote />
        </div>
        <div>
          <Auth type="signin" />
        </div>
      </div>
    </div>
  )
}

export default Signin