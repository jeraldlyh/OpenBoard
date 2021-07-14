import Head from "next/head"
import { Fragment, useState, useEffect } from "react"
import { useRouter } from "next/router"
import { registerUser } from "../actions/auth"
import { useAuthContext } from "../context/authContext"
import { BsClipboardData } from "react-icons/bs"
import { useTheme } from "next-themes"
import { AiOutlineFormatPainter } from "react-icons/ai"

function SignUp() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const themes = [{ name: "Neon" }, { name: "Soft" }, { name: "Ruby" }, { name: "Dark" }, { name: "Basic" }];
    const { registerFirebase } = useAuthContext()
    const [allValues, setAllValues] = useState({
        username: "",
        email: "",
        password: "",
        repassword: ""
    })

    const changeHandler = (e: any) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const register = async () => {
        try {
            const response = await registerFirebase(allValues.email, allValues.password)
            response.updateProfile({
                displayName: allValues.username
            })

            const body = {                          // MongoDB model
                username: allValues.username,
                firebaseId: response.user.uid,
                preferences: [],
            }
            await registerUser(body)
            router.push("/")
        } catch (error) {       // Add error modals
            console.log(error)
        }
    }

    const clickable = "w-48 text-center mt-14 cursor-pointer py-3 font-bold rounded-full text-lg text-th-button border-none bg-gradient-to-br from-th-background-left-from to-th-background-left-to hover:opacity-80"
    const disabled = "w-48 text-center mt-14 cursor-not-allowed py-3 font-bold rounded-full text-lg text-th-button border-none bg-gradient-to-br from-th-background-left-from to-th-background-left-to opacity-40"

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Fragment>
            <Head>
                <title>OneBoard | Sign Up</title>
            </Head>
            <div className="h-screen flex lg:flex-row flex-col">
                <div className="absolute text-th-text-left lg:text-th-text-right flex items-center pt-8 pl-10">
                    <BsClipboardData className="h-9 w-9"/>
                    <span className="cursor-default ml-2 pr-4 text-3xl font-light">One<span className="font-bold">Board</span></span>
                </div>
                <div className="absolute right-0 m-8 flex items-center">
                    <label className="py-2 pl-4 pr-1 h-9 border border-th-text-left rounded-l-full border-r-0 text-th-text-left"><AiOutlineFormatPainter className="h-5 w-5"/></label>
                    <select
                        name="theme"
                        className="border-l-0 -ml-1 h-9 text-sm cursor-pointer focus:outline-none bg-transparent border border-th-text-left hover:text-th-text-right rounded-r-full text-th-text-left pl-2 pr-5"
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
                <div className="w-full lg:w-7/12 py-24 lg:py-16 bg-th-background-secondary flex flex-col justify-center items-center">
                    <div className="lg:mt-5 w-5/12 items-center justify-center text-th-text-right">
                        <div className="mt-6 mb-2 text-sm">USERNAME</div>
                        <div className="flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="text" name="username" onChange={changeHandler}></input>
                        </div>
                        <div className="mt-6 mb-2 text-sm">EMAIL</div>
                        <div className="flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="email" name="email" onChange={changeHandler}></input>
                        </div>
                        <div className="mt-6 mb-2 text-sm">PASSWORD</div>
                        <div className="flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="password" name="password" onChange={changeHandler}></input>
                        </div>
                        <div className="mt-6 mb-2 text-sm">RE-ENTER PASSWORD</div>
                        <div className="mb-3 flex items-center border border-th-text-right rounded-full py-2 px-5">
                            <input className="w-full py-1 bg-th-background-secondary focus:outline-none text-sm tracking-wide" type="password" name="repassword" onChange={changeHandler}></input>
                        </div>
                        {
                            allValues.password !== allValues.repassword && allValues.repassword !== "" ?
                                <div className="text-red-400 font-light text-sm">Your passwords do not match. Please try again.</div>
                                :
                                null
                        }
                        <div className="flex justify-center">
                            <div
                                className={allValues.username && allValues.email && allValues.password && allValues.repassword && allValues.password === allValues.repassword ? clickable : disabled}
                                onClick={() => register()}
                            >
                                SIGN UP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-first lg:order-last pt-32 pb-24 lg:py-0 text-th-text-left w-full lg:w-5/12 bg-gradient-to-br from-th-background-left-from to-th-background-left-to justify-center flex flex-col items-center">
                    <div className="font-bold text-5xl">
                        Hello, Friend!
                    </div>
                    <div className="w-80 mt-7 text-lg font-light text-center opacity-75 tracking-wide">
                        Enter your personal details to start your journey with us
                    </div>
                    <div className="mt-10 lg:mt-28 font-semibold text-lg">
                        Already have an account?
                    </div>
                    <div onClick={() => router.push("/")} className="font-semibold mt-4 flex items-center border-2 border-th-text-left rounded-full py-3 px-16 text-th-text-left focus:outline-none text-base tracking-wide hover:border-th-text-left hover:bg-th-text-left hover:text-th-background-left-to cursor-pointer">
                        LOGIN HERE
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp