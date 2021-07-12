import Head from "next/head"
import { Fragment, useState } from "react"
import { useRouter } from "next/router"

export default function SignUp() {
    const router = useRouter()
    const [ allValues, setAllValues ] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        repassword: ""
    })

    const changeHandler = (e: any) => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Sign Up</title>
            </Head>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="mb-4 flex text-xl font-bold text-th-text">Sign Up</div>
                <div>Name</div>
                <input className="px-3 mb-4" type="text" name="name" onChange={changeHandler}></input>
                <div>Username</div>
                <input className="px-3 mb-4" type="text" name="username" onChange={changeHandler}></input>
                <div>Email</div>
                <input className="px-3 mb-4" type="text" name="email" onChange={changeHandler}></input>
                <div>Password</div>
                <input className="px-3 mb-4" type="password" name="password" onChange={changeHandler}></input>
                <div>Re-enter Password</div>
                <input className="px-3" type="password" name="repassword" onChange={changeHandler}></input>
                <div className="my-7 bg-white cursor-pointer px-9 py-2 rounded-full text-black">
                    Sign Up
                </div>
                <div className="cursor-pointer text-white" onClick={() => router.push("/")}>Have an account? Login here</div>
            </div>
        </Fragment>
    )
}
