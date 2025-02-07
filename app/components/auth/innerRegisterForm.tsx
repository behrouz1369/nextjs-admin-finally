import { registerValuesInterface } from "@/app/contracts/auth"
import { Form, FormikProps } from "formik"
import Input from "../shared/form/input"


const InnerRegisterForm = (props : FormikProps<registerValuesInterface>) => {

    return (

        <>
            <Form className="space-y-6">
                <Input
                    name="name"
                    label="Name"
                />

                <Input
                    name="phone"
                    label="Phone Number"
                />

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                </div>
            </Form>
        </>
    )
}

export default InnerRegisterForm
