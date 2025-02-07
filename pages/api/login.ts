// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';

type Data = {
  status: string;
};

interface ExtendedNextApiRequest extends NextApiRequest{
    body : {
        token:string
    }
}

export default function Login(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>,
) {
    // set cookie httpOnly
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("shopy_token",req.body?.token,{
            httpOnly:true,
            maxAge:60*60*24,
            sameSite: "lax",
            path:"/"
            //secure:
            //domain:
        })
    )

  res.status(200).json({ status: "success" });
}
