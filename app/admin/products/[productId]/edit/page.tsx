'use client';
import React from 'react'
import { useParams, useRouter } from "next/navigation"
import useSWR from "swr"
import { GetSingleProduct } from "@/app/services/product"
import ValidationError from "@/app/exceptions/validationError"
import EditProductForm from "@/app/form/admin/editProductForm"


const EditProduct = () => {
    const params = useParams<{productId:any}>();

    const router = useRouter()

    //Get The Product With ProductId
    const {data , error} = useSWR({url:`/admin/products/${params?.productId}/edit`,productId:params?.productId} , GetSingleProduct)

    const isLoading = !data && !error

    //If The Product Is Not Exists Return 404 , Redirect To Products Admin Page
    if(error instanceof ValidationError){
        router.push('/admin/products')
        return <></>
    }

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">ایجاد محصول </h1>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            {
                                isLoading
                                    ? <span>Loading...</span>
                                    : <EditProductForm product={data?.product} router={router} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct
