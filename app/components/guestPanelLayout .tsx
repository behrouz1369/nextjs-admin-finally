import { ReactNode, useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router"



interface Props {
    children: ReactNode
}

const GuestLayout = ({children} : Props) => {

    const router = useRouter()

    const {user,error} = useAuth()

    if(user){
        router.push('/panel')
        return <></>
    }

    return(
        <div className="flex flex-col gap-5 justify-center items-center text-5xl w-full h-screen">
            <h1 className="text-orange-700 text-xl">Guest Page</h1>
            {children}
        </div>
    )
}


export default GuestLayout
