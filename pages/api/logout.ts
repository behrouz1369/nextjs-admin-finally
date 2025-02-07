// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';

type Data = {
  status: string;
};

export default function Logout(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    // set cookie httpOnly
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("shopy_token",'',{
            httpOnly:true,
            maxAge:0,
            sameSite: "lax",
            path:"/"
            //secure:
            //domain:
        })
    )

  res.status(200).json({ status: "success" });
}
