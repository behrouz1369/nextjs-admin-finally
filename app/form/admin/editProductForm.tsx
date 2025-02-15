import { withFormik } from "formik"
import * as yup from 'yup'
import ValidationError from "@/app/exceptions/validationError"
import { CreateProductInterface } from "@/app/contracts/admin/product"

import { UpdateProduct } from "@/app/services/product"
import { toast } from "react-toastify"
import Product from "@/app/models/product"
import InnerProductForm from "@/app/components/admin/products/innerProductForm"
import { KeyedMutator } from "swr"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const validateSchemaForm = yup.object().shape({
    title:yup.string().required().min(4).max(255),
    price:yup.number().min(0),
    category_id:yup.string().required(),
    description:yup.string().required().min(4).max(6000)
})

interface editProductFormProps {
    product:Product,
    router:AppRouterInstance,
    mutateProducts?:KeyedMutator<{
        products: any;
        total_page: any;
    }>
}

const EditProductForm = withFormik<editProductFormProps , CreateProductInterface>({
    mapPropsToValues : ({product}) => ({
        title:product?.title,
        price:product?.price,
        category_id:product?.category ?? '',
        description:product?.body
    }),

    validationSchema : validateSchemaForm,

    handleSubmit : async (values , {props, setFieldError}) => {
        try {
            // Edit Product By Api
            await UpdateProduct(props?.product?.id,values)

            if(props?.mutateProducts){
                await props?.mutateProducts()
            }

            props.router.push('/admin/products')

            toast.success('محصول مورد نظر با موفقیت ثبت شد.')
        } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }

            toast.error('مشکلی در ثبت محصول وجود دارد.')
        }
    }
})(InnerProductForm)

export default EditProductForm
