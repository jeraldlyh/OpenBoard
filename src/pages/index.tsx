import Head from "next/head"
import { Fragment, useState } from "react"
import { useRouter } from "next/router"
import { loginUser } from "../actions/auth"
import { useAuthContext } from "../provider/authProvider"

function Login() {
    const router = useRouter()
    const { setUsername, setID } = useAuthContext()
    const [allValues, setAllValues] = useState({
        username: "",
        password: "",
    })

    const changeHandler = (e: any) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const login = () => {
        loginUser(allValues).then(response => {
            if (response.status === 200) {
                setUsername(response.data.username)
                setID(response.data._id)
                router.push("/home")
            }
        })
    }

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Login</title>
            </Head>
            <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
                <div className="mb-4 flex text-xl font-bold text-th-text">Login</div>
                <div>Username</div>
                <input className="px-3 mb-4" type="text" name="username" onChange={changeHandler}></input>
                <div>Password</div>
                <input className="px-3" type="password" name="password" onChange={changeHandler}></input>
                <div
                    className="my-7 bg-white cursor-pointer px-9 py-2 rounded-full text-black"
                    onClick={() => login()}
                >
                    Login
                </div>
                <div className="cursor-pointer text-white" onClick={() => router.push("/signUp")}>No account yet? Sign up here</div>
            </div>
        </Fragment>
    )
}

export default Login