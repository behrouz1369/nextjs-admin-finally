'use client'

import { loginValuesInterface } from "@/app/contracts/auth"
import { Form, FormikProps } from "formik"
import Input from "@/app/components/shared/form/input"
import { useRouter } from "next/navigation"
import { CreateProductInterface } from "@/app/contracts/admin/product"
import Textarea from "../../shared/form/textarea"
import SelectBox from "../../shared/form/select"
import Product from "@/app/models/product"


type ProductFormProps = FormikProps<CreateProductInterface> & {
    product? : Product
}


const InnerProductForm = (props : ProductFormProps) => {

    const router = useRouter()

    return (

        <>
             <Form>
                <div className="p-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                    <div className="sm:col-span-2">
                        <Input
                            name="title"
                            type="text"
                            label="نام محصول"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <Input
                            name="price"
                            type="text"
                            label="قیمت محصول"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <SelectBox
                            label="دسته بندی محصول"
                            name="category_id"
                            options={
                                [
                                    {label:'یکی از موارد را انتخاب کنید',value:''},
                                    {label:'لوازم خانگی',value:1},
                                    {label:'موبایل',value:2},
                                    {label:'لوازم کشاورزی',value:3},
                                    {label:'تلویزیون',value:4}
                                ]
                            }
                        />
                    </div>

                    <div className="sm:col-span-4">
                        <Textarea
                            label="درباره محصول"
                            name="description"
                        />
                    </div>
                </div>

                <div className="p-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center">
                    <button
                        type="submit"
                        className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-700 ">
                            {
                                props?.product ? 'ویرایش محصول' : 'ایجاد محصول'
                            }
                    </button>
                    <button
                        onClick={()=>router.push('/admin/products')}
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">انصراف</button>
                </div>
            </Form>
        </>
    )
}

export default InnerProductForm
