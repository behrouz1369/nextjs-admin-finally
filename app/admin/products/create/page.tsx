'use client'

import CreateProductForm from "@/app/form/admin/createProductForm"
import { useRouter } from "next/navigation"



const CreateProduct = () => {
    const router = useRouter()
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
                        {/* Form Product Create */}
                        <CreateProductForm router={router} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProduct
