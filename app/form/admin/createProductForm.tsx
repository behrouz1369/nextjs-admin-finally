import { withFormik } from "formik"
import * as yup from 'yup'
import ValidationError from "@/app/exceptions/validationError"
import InnerProductForm from "@/app/components/admin/products/innerProductForm"
import { CreateProductInterface } from "@/app/contracts/admin/product"
import { CreateProduct } from "@/app/services/product"
import { toast } from "react-toastify"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const validateSchemaForm = yup.object().shape({
    title:yup.string().required().min(4).max(255),
    price:yup.number().min(0),
    category_id:yup.string().required(),
    description:yup.string().required().min(4).max(6000)
})

interface createProductFormProps {
    router: AppRouterInstance
}

const CreateProductForm = withFormik<createProductFormProps , CreateProductInterface>({
    mapPropsToValues : prop => ({
        title:'',
        price:0,
        category_id:'',
        description:''
    }),

    validationSchema : validateSchemaForm,

    handleSubmit : async (values , {props, setFieldError}) => {
        try {
            // Create New Product By Api
            await CreateProduct(values)

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

export default CreateProductForm
