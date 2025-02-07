import { withFormik } from "formik"
import { loginValuesInterface } from "../contracts/auth"
import * as yup from 'yup'
import InnerRegisterForm from "../components/auth/innerRegisterForm"
import InnerLoginForm from "../components/auth/innerLoginForm"
import callApi from "../helpers/callApi"
import ValidationError from "../exceptions/validationError"
import Router from "next/router"
import { Dispatch } from "@reduxjs/toolkit"
import { SetStateAction } from "react"


const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1-3]|d|2[0-2]|98)|d{7}$/

const validateSchemaForm = yup.object().shape({
    phone: yup.string().required().min(11).matches(phoneRegExp , 'The Phone Format Is Not Correct')
})

interface loginFormProps {
    // setCookies:any
    setToken: (token:string)=> void
}

const LoginForm = withFormik<loginFormProps , loginValuesInterface>({
    mapPropsToValues : prop => ({
        phone:''
    }),

    validationSchema : validateSchemaForm,

    handleSubmit : async (values , {props, setFieldError}) => {
        try {
            const res = await callApi().post('/auth/login' , values )

            if(res.status === 200){
                props.setToken(res.data.token)
                Router.push('/auth/login/phone-verify')
            }

        } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }

        }
    }
})(InnerLoginForm)

export default LoginForm
