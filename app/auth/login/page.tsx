'use client';

import LoginForm from "@/app/form/loginForm";
import { useAppDispatch } from "@/app/hooks";
import useAuth from "@/app/hooks/useAuth";
import { updateToken } from "@/app/store/slices/auth";
import { redirect, useRouter } from "next/navigation";


const Login = () => {
    const {user} = useAuth()

    const router = useRouter()

    // const [cookies , setCookies] = useCookies(['token-shopy'])
    const dispatch = useAppDispatch()
    // const [token , setToken] = useState('')

    const setPhoneVerifyToken = (token:string) => {
        dispatch(updateToken(token))
    }

    if(user){
       redirect('/admin')
    }

    return(
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    {/* Form Login  setCookies={setCookies}*/}
                    <LoginForm  setToken={setPhoneVerifyToken} router={router} />
                </div>
            </div>
        </>
    )
}

export default Login
