import { withFormik } from "formik"
import { loginValuesInterface } from "../contracts/auth"
import * as yup from 'yup'
import InnerLoginForm from "../components/auth/innerLoginForm"
import callApi from "../helpers/callApi"
import ValidationError from "../exceptions/validationError"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1-3]|d|2[0-2]|98)|d{7}$/

const validateSchemaForm = yup.object().shape({
    phone: yup.string().required().min(11).matches(phoneRegExp , 'The Phone Format Is Not Correct')
})

interface loginFormProps {
    // setCookies:any
    setToken: (token:string)=> void,
    router:AppRouterInstance
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
                props.router.push('/auth/login/phone-verify')
            }

        } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }

        }
    }
})(InnerLoginForm)

export default LoginForm
