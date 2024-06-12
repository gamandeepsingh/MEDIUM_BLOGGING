import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@gamandeep/zod-medium"
import axios from "axios"
import { BACKEND_URL } from "../config"
import toast from 'react-hot-toast';

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInput, setPostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    function handlerChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value }: { name: string, value: string } = e.target;
        setPostInput({
            ...postInput,
            [name]: value
        })

    }

    async function sendRequest() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInput)
            const jwt = res?.data?.jwt;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        } catch (error) {
            toast.error('Error while Sign')
        }
    }

    return (
        <div className='h-screen flex justify-center items-center flex-col gap-4'>
            <div>
                <div className="text-4xl text-center">
                    {type === "signup" ? "Create an Account" : "Sign in to an Account"}
                </div>
                <div className="font-light text-slate-400 text-center">
                    {type === "signup" ? "Already hava an account?" : "Don't have an Account?"}
                    <span className="underline text-black pl-2">
                        <Link to={`/${type === "signup" ? "signin" : "signup"}`}>{type === "signup" ? "signin" : "signup"}</Link>
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                {type === "signup" ? <LabelInput type="text" label="Your Name:" placeholder="Enter your Name" onChange={handlerChange} name="name" /> : null}
                <LabelInput type="email" label="Your Email:" placeholder="Enter your Email" onChange={handlerChange} name="email" />
                <LabelInput type="password" label="Your Password:" placeholder="Enter your Password" onChange={handlerChange} name="password" />
            </div>
            <div>
                <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-[320px] tracking-wide font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" >{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>

        </div>
    )
}

export default Auth


function LabelInput({ type, label, placeholder, onChange, name }: { label: string, placeholder: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, name: string, type: string }) {

    return <div className="m-3">
        <label htmlFor={name} className="block mb-1 mt-2 text-sm font-medium text-gray-900">
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            onChange={onChange}
            className="min-w-[320px] max-w-[450px] w-full bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder={placeholder}
            required
        />
    </div>
}

