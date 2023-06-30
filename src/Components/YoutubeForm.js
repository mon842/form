import React from 'react'
import { useFormik } from 'formik'



const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('form data', values);
}
const validate = values => {
    let error = {};
    if (!values.name)
        error.name = 'required value'
    if (!values.email)
        error.email = 'required value'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        error.email = "invalid email"
    if (!values.channel)
        error.channel = 'required value'
    return error;
}

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-control'><label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' name='channel' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.channel} />
                    {formik.errors.channel && formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit' >submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm