import { ErrorMessage, Field, FieldProps } from "formik"
import { ChangeEvent } from "react";

interface OptionsInterface{
    label:string,
    value:any
}

interface Props {
    name:string,
    options: OptionsInterface[],
    label:string,
    classNameLabel?:string,
    classNameSelect?:string,
    classNameError?:string,
    onChange?:(e:ChangeEvent)=>void
}

const SelectBox : React.FC<Props> = ({ label,name,classNameLabel,classNameSelect,classNameError,onChange,options }) => {

    return (
      <div>
        <label htmlFor={name} className={`block text-sm/6 font-medium text-gray-900 ${classNameLabel ?? ''}`}>{label}</label>
        <Field name={name} id={name}>
            {
                ({field , meta}:FieldProps) => (
                    <select
                        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${classNameSelect ?? ''}`}
                        {...field}
                        onChange={onChange || field.onChange}
                    >
                        {
                            options.map((option:OptionsInterface , index) => (
                                <option key={index} value={option.value} defaultValue={option.value}>{option.label}</option>
                            ))
                        }
                    </select>
                )
            }
        </Field>

        <ErrorMessage name={name} className={`text-[12px] text-red-600 ${classNameError ?? ''}`} component={'div'} />
      </div>
    );
  };

  export default SelectBox
