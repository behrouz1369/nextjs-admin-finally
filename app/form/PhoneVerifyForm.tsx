import { withFormik } from "formik"
import { phoneVerifyValuesInterface } from "../contracts/auth"
import * as yup from 'yup'
import callApi from "../helpers/callApi"
import ValidationError from "../exceptions/validationError"
import InnerPhoneVerifyForm from "../components/auth/innerPhoneVerifyForm"
import { StoreLoginToken } from "../helpers/auth"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1-3]|d|2[0-2]|98)|d{7}$/

const validateSchemaForm = yup.object().shape({
    code: yup.string().required().matches(/^[0-9]+$/,'just enter number').length(6)
})

interface phoneVerifyFormProps {
    // setCookies:any
    token?:string,
    clearToken:() => void,
    router:AppRouterInstance
}

const PhoneVerifyForm = withFormik<phoneVerifyFormProps , phoneVerifyValuesInterface>({
    mapPropsToValues : props => ({
        code:'',
        token: props?.token ?? '',

    }),

    validationSchema : validateSchemaForm,

    handleSubmit : async (values , {props, setFieldError}) => {
        try {
            const res = await callApi().post('/auth/login/verify-phone' , values )
            if(res.status === 200){

                // Store Token Phone Verify
                StoreLoginToken(res?.data?.user?.token)

                // Redirect To Page Home
                await props.router.push('/admin')

                // clear token phone verify from redux
                props.clearToken()
            }

        } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }

        }
    }
})(InnerPhoneVerifyForm)

export default PhoneVerifyForm
