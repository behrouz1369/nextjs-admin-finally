import { loginValuesInterface, phoneVerifyValuesInterface } from "@/app/contracts/auth"
import { Form, FormikProps } from "formik"
import Input from "../shared/form/input"


const InnerPhoneVerifyForm = (props : FormikProps<phoneVerifyValuesInterface>) => {

    return (

        <>
            <Form className="space-y-6">

                <Input
                    name="code"
                    label="Code"
                />

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
                </div>
            </Form>
        </>
    )
}

export default InnerPhoneVerifyForm
