import { useAppSelector } from "@/app/hooks"
import useAuth from "@/app/hooks/useAuth"
import { selectUser } from "@/app/store/slices/auth"

const UserInfo = () => {
    const {user} = useAuth()
    // const user = useAppSelector(selectUser)
    return(
        <>
            <span className="text-lg text-gray-600 font-[500]">username : </span>
            <h2 className="text-3xl text-orange-700 font-bold">{user?.name}</h2>
        </>
    )
}

export default UserInfo
