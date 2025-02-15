import cookie from 'cookie';

export async function POST(){
    // set cookie httpOnly
    return new Response(JSON.stringify({ status: "success" }),{
        status:200,
        headers:{
            "Set-Cookie":cookie.serialize("shopy_token",'',{
                httpOnly:true,
                maxAge:0,
                sameSite: "lax",
                path:"/"
                //secure:
                //domain:
            })
        }
    })
}
