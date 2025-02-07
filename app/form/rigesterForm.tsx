import { withFormik } from "formik"
import { registerValuesInterface } from "../contracts/auth"
import * as yup from 'yup'
import InnerRegisterForm from "../components/auth/innerRegisterForm"
import callApi from "../helpers/callApi"
import Router from "next/router"
import ValidationError from "../exceptions/validationError"

interface registerFormProps {

}

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1-3]|d|2[0-2]|98)|d{7}$/

const validateSchemaForm = yup.object().shape({
    name: yup.string().required().min(3).max(255),
    phone: yup.string().required().min(11).matches(phoneRegExp , 'The Phone Format Is Not Correct')
})

const RegisterForm = withFormik<registerFormProps , registerValuesInterface>({
    mapPropsToValues : prop => ({
        name:'',
        phone:''
    }),

    validationSchema : validateSchemaForm,

    handleSubmit : async (values , {props , setFieldError}) => {
       try {
        const res = await callApi().post('/auth/register' , values)
        if(res.status === 201){
            Router.push('/auth/login')
        }
       } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }
       }

    }
})(InnerRegisterForm)

export default RegisterForm
