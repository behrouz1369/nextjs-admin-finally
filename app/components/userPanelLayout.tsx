import { ReactNode, useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router"
import { RemoveLoginToken } from "../helpers/auth"



interface Props {
    children: ReactNode
}

const UserPanelLayout = ({children} : Props) => {
    const router = useRouter()

    const {user , error , isLoading} = useAuth()

    if(isLoading){
        return <div>Loading Page ...</div>
    }

    if(error){
        //
        router.push('/auth/login')
        return <></>
    }

    const logoutHandler = async () => {
        await RemoveLoginToken()

        await router.push('/')
    }


    return(
        <div className="flex flex-col gap-5 justify-center items-center text-5xl w-full h-screen">
            <h1 className="text-blue-700 text-xl">User Page</h1>
            {children}

            <button className="text-sm text-white bg-red-600 rounded py-2 px-4" onClick={logoutHandler}>logout</button>
        </div>
    )
}


export default UserPanelLayout
