import {Field, FieldProps} from 'formik';
import {Input} from 'antd';
import { IInputProps } from './input';
function InputComponent({name, label, placeholder,}: IInputProps) {
    return (
        <Field name={name}>
            {({ field, }: FieldProps) => (
                   <div>
                       {label && <label htmlFor={name}>{label}</label>}
                       <Input {...field} placeholder={placeholder} />
                   </div>
            )}
        </Field>
    );
}

export default InputComponent;
