import Cookies from "universal-cookie"

const StoreLoginToken = async (token : string , days : number = 10) => {
    return await fetch('/api/login' , {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({token})
    })
}

const RemoveLoginToken = async () => {
    return await fetch('/api/logout',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    })
}

export { StoreLoginToken , RemoveLoginToken }
