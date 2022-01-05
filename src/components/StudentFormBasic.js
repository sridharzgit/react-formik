import React from 'react'
import {ErrorMessage, useFormik} from 'formik'


const initialValues = {
    name:'Enter name',
    email:''            
}

const onSubmit = (values) => { 
    console.log("Form value",values)
}

const validate = (values) =>{
    let errors ={}
    if(!values.name){
        errors.name= "Required"
    }
    if(!values.email){
        errors.email= "Required"
    }
    return errors
}

function StudentFormBasic () {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log("Form value",formik.touched)
    return (<div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name? <div className='error'>{formik.errors.name}</div>:null}
            </div>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type="text" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>);
}

export default StudentFormBasic

// first name 
// last name 
// email 
// phone number 
// address
// house Number
// Street
// land mark 
// permanent address
// temp address
// previou qualication 
// course for enrollmentry {
    
// } catch (error) {
    
// }