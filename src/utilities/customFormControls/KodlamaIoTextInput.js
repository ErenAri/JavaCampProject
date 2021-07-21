import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'




export default function KodlamaIoTextInput({...props}) {
    const [Field,meta] = useField(props)
    console.log(meta)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...Field}{...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
