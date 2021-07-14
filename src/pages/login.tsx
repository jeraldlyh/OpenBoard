import Head from "next/head"
import { Fragment, useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useAuthContext } from "../context/authContext"
import { BsClipboardData } from "react-icons/bs"
import { useTheme } from "next-themes"
import { AiOutlineFormatPainter } from "react-icons/ai"

function Login() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const themes = [{ name: "Neon" }, { name: "Soft" }, { name: "Ruby" }, { name: "Dark" }, { name: "Basic" }];
    const { loginFirebase } = useAuthContext()
    const [allValues, setAllValues] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e: any) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const login = () => {
        loginFirebase(allValues.email, allValues.password)
            .then(() => router.push("/"))
    }

    const clickable = "w-48 text-center mt-16 cursor-pointer py-3 font-bold rounded-full text-lg text-th-button border-none bg-gradient-to-br from-th-background-left-from to-th-background-left-to hover:opacity-80"
    const disabled = "w-48 text-center mt-16 cursor-not-allowed py-3 font-bold rounded-full text-lg text-th-button border-none bg-gradient-to-br from-th-background-left-from to-th-background-left-to opacity-40"

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Login</title>
            </Head>
            <div className="h-screen flex lg:flex-row flex-col">
                <div className="absolute text-th-text-left flex items-center pt-8 pl-10">
                    <BsClipboardData className="h-9 w-9"/>
                    <span className="cursor-default ml-2 pr-4 text-3xl font-light">One<span className="font-bold">Board</span></span>
                </div>
                <div className="absolute right-0 m-8 flex items-center">
                    <label className="py-2 pl-4 pr-1 h-9 border border-th-text-left lg:border-th-accent-secondary rounded-l-full border-r-0 text-th-text-left lg:text-th-accent"><AiOutlineFormatPainter className="h-5 w-5"/></label>
                    <select
                        name="theme"
                        className="border-l-0 -ml-1 h-9 text-sm cursor-pointer focus:outline-none bg-transparent border-th-text-left text-th-text-left hover:border-th-accent hover:bg-th-accent hover:text-th-background lg:bg-th-background-secondary border lg:border-th-accent-secondary rounded-r-full lg:text-th-text pl-2 pr-5"
                        onChange={e => setTheme(e.currentTarget.value)}
                        value={theme}
                        >
                        {themes.map(th => (
                            <option key={th.name.toLowerCase()} value={th.name.toLowerCase()}>
                                {th.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="pt-32 pb-24 lg:py-0 text-th-text-left w-full lg:w-5/12 bg-gradient-to-br from-th-background-left-from to-th-background-left-to justify-center flex flex-col items-center">
                    <div className="font-bold text-5xl">
                        Welcome Back!
                    </div>
                    <div className="w-80 mt-6 text-lg font-light text-center opacity-75 tracking-wide">
                        Please login with your credentials to access your dashboard
                    </div>
                    <div className="mt-10 lg:mt-14 font-semibold text-lg">
                        No account yet?
                    </div>
                    <div onClick={() => router.push("/signUp")} className="font-semibold mt-5 flex items-center border-2 border-th-text-left rounded-full py-3 px-16 text-th-text-left focus:outline-none text-base tracking-wide hover:border-th-text-left hover:bg-th-text-left hover:text-th-background-left-to cursor-pointer">
                        SIGN UP HERE
                    </div>
                </div>
                <div className="w-full lg:w-7/12 py-24 lg:py-16 bg-th-background-secondary flex flex-col justify-center items-center">
                    <div className="text-th-text-right flex text-4xl font-bold">Login to <span className="ml-3 font-light">One</span>Board</div>
                    <div className="w-5/12 items-center justify-center text-th-text-right">
                        <div className="mt-14 mb-2 text-sm">EMAIL</div>
                        <div className="flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="email" name="email" onChange={changeHandler}></input>
                        </div>
                        <div className="mt-6 mb-2 text-sm">PASSWORD</div>
                        <div className="flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="password" name="password" onChange={changeHandler}></input>
                        </div>
                        <div className="flex justify-center">
                            <div
                                className={allValues.email && allValues.password ? clickable : disabled}
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