import Head from "next/head"
import { Fragment, useState } from "react"
import { useRouter } from "next/router"
import { loginUser } from "../actions/auth"
import { useAuthContext } from "../provider/authProvider"
import { BsClipboardData } from "react-icons/bs"

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
        loginUser(allValues)
            .then(response => {
                setUsername(response.data.username)
                setID(response.data._id)
                router.push("/home")
            })
            .catch(error => console.log(error))     // Add error modals
    }

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Login</title>
            </Head>
            <div className="h-screen flex">
                <div className="absolute text-white flex items-center pt-8 pl-10">
                    <BsClipboardData className="h-9 w-9"/>
                    <span className="cursor-default ml-2 pr-4 text-3xl font-light">One<span className="font-bold">Board</span></span>
                </div>
                <div className="w-5/12 bg-gradient-to-br from-blue-600 to-green-500 justify-center flex flex-col items-center">
                    <div className="font-bold text-white text-5xl">
                        Welcome Back!
                    </div>
                    <div className="w-1/2 mt-7 text-white text-lg font-light text-center opacity-75 tracking-wide">
                        Please login with your credentials to access your dashboard
                    </div>
                    <div className="mt-28 text-white font-semibold text-lg">
                        No account yet?
                    </div>
                    <div onClick={() => router.push("/signUp")} className="font-semibold mt-4 flex items-center border border-white rounded-full py-3 px-16 text-white focus:outline-none text-base tracking-wide hover:border-gray-100 hover:bg-gray-100 hover:text-green-600 cursor-pointer">
                        SIGN UP HERE
                    </div>
                </div>
                <div className="w-7/12 py-16 bg-navy1 flex flex-col justify-center items-center">
                    <div className="text-white flex text-4xl font-bold">Login to <span className="ml-3 font-light">One</span>Board</div>
                    <div className="w-5/12 items-center justify-center text-gray-300">
                        <div className="mt-14 mb-2 text-sm text-gray-300">USERNAME</div>
                        <div className="flex items-center border border-gray-300 rounded-full py-2 px-5">
                            <input className="py-1 bg-navy1 text-gray-300 focus:outline-none text-sm tracking-wide" type="text" name="username" onChange={changeHandler}></input>
                        </div>
                        <div className="mt-6 mb-2 text-sm text-gray-300">PASSWORD</div>
                        <div className="flex items-center border border-gray-300 rounded-full py-2 px-5">
                            <input className="py-1 bg-navy1 text-gray-300 focus:outline-none text-sm tracking-wide" type="password" name="password" onChange={changeHandler}></input>
                        </div>
                        <div className="flex justify-center">
                        <div
                            className="w-48 text-center mt-16 cursor-pointer py-3 font-bold rounded-full text-lg text-navy1 border-none bg-gradient-to-br from-blue-600 to-green-500 bg-none hover:from-blue-700 hover:to-green-600"
                            onClick={() => login()}
                        >
                            LOGIN
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login