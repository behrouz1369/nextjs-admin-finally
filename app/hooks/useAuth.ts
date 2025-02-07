import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";
import { useAppDispatch } from ".";
import { updateUser } from "../store/slices/auth";


const useAuth = () => {
    const dispatch = useAppDispatch()

    const cookie = new Cookies()

    const {data , error} = useSWR('user_me' , () => {
        return callApi().get('/user')
    })

    dispatch(updateUser(data?.data?.user))

    return {user : data?.data?.user , error , isLoading : !data && !error}
}

export default useAuth
