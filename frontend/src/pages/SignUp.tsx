import Auth from "../components/Auth"
import Quote from "../components/Quote"

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div>
          <Auth type="signup" />
        </div>
        <div className="max-md:hidden">
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default SignUp
