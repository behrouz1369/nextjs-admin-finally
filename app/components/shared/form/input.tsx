import { ErrorMessage, Field } from "formik"

interface Props {
    name:string,
    type?:string,
    label:string,
    classNameLabel?:string,
    classNameInput?:string,
    classNameError?:string
}

const Input : React.FC<Props> = ({name,label,type="text",classNameLabel,classNameInput,classNameError,...props}) => {

    return(
        <>
            <div>
                <label htmlFor={name} className={`block text-sm/6 font-medium text-gray-900 ${classNameLabel ?? ''}`}>{label} :</label>

                <div className="mt-2">
                    <Field
                        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${classNameInput ?? ''}`}
                        name={name}
                        type={type}
                        placeholder="Enter Text ..."
                        {...props}
                    />

                    <ErrorMessage name={name} className={`text-[12px] text-red-600 ${classNameError ?? ''}`} component={'div'} />
                </div>
            </div>
        </>
    )
}

export default Input
