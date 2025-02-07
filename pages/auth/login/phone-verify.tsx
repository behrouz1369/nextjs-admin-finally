import GuestLayout from "@/app/components/guestPanelLayout ";
import LoginForm from "@/app/form/loginForm";
import PhoneVerifyForm from "@/app/form/PhoneVerifyForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectToken, updateToken } from "@/app/store/slices/auth";
import { NextPageWithLayout } from "@/pages/_app";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";






const PhoneVerify : NextPageWithLayout = () => {

    const dispatch = useAppDispatch()

    const token = useAppSelector(selectToken)

    const clearPhoneVerifyToken = () =>{
        dispatch(updateToken(undefined))
    }

    useEffect(()=>{
        Router.beforePopState(({ url, as, options }) => {
            clearPhoneVerifyToken()

            return true
          })

        if(token === undefined){
            Router.push('/auth/login')
        }
    },[token])

    return(
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Phone Verify to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    {/* Form Login  setCookies={setCookies}*/}
                    <PhoneVerifyForm token={token} clearToken={clearPhoneVerifyToken}/>
                </div>
            </div>
        </>
    )
}

PhoneVerify.getLayout = (page) => <GuestLayout>{page}</GuestLayout>

export default PhoneVerify
