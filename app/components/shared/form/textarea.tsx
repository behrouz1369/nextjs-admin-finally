import { ErrorMessage, Field, FieldProps } from "formik"
import { ChangeEvent } from "react";

interface Props {
    name:string,
    rows?:number,
    label:string,
    classNameLabel?:string,
    classNameTextarea?:string,
    classNameError?:string,
    onChange?:(e:ChangeEvent)=>void
}

const Textarea : React.FC<Props> = ({ label,name,rows=5,classNameLabel,classNameTextarea,classNameError,onChange }) => {

    return (
      <div>
        <label htmlFor={name} className={`block text-sm/6 font-medium text-gray-900 ${classNameLabel ?? ''}`}>{label}</label>
        <Field name={name} id={name}>
            {
                ({field , meta}:FieldProps) => (
                    <textarea
                        id={name}
                        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${classNameTextarea ?? ''}`}
                        rows={rows}
                        {...field}
                        onChange= {onChange || field.onChange}
                    />
                )
            }
        </Field>

        <ErrorMessage name={name} className={`text-[12px] text-red-600 ${classNameError ?? ''}`} component={'div'} />
      </div>
    );
  };

  export default Textarea
