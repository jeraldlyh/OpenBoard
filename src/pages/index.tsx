import Head from "next/head"
import { Fragment, useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
    const router = useRouter()
    const [ allValues, setAllValues ] = useState({
        username: "",
        password: "",
    })

    const changeHandler = (e: any) => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Login</title>
            </Head>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="mb-4 flex text-xl font-bold text-th-text">Login</div>
                <div>Username</div>
                <input className="px-3 mb-4" type="text" name="username" onChange={changeHandler}></input>
                <div>Password</div>
                <input className="px-3" type="password" name="password" onChange={changeHandler}></input>
                <div className="my-7 bg-white cursor-pointer px-9 py-2 rounded-full text-black">
                    Login
                </div>
                <div className="cursor-pointer text-white" onClick={() => router.push("/signUp")}>No account yet? Sign up here</div>
            </div>
        </Fragment>
    )
}
