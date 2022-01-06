import React from 'react'
import * as Yup from 'yup'
import {ErrorMessage, Formik,Form, Field} from 'formik'
// below is example for using useFormik hook 
const initialValues = {
    name:'Enter name',
    email:''            
}

const onSubmit = (values) => { 
    console.log("Form value",values)
}

// const validate = (values) =>{
//     let errors ={}
//     if(!values.name){
//         errors.name= "Required"
//     }
//     if(!values.email){
//         errors.email= "Required"
//     }
//     return errors
// }
const validaionSchema = Yup.object({
    name: Yup.string().required('Required'),
    email:Yup.string().email('invalid email').required('Required!')
})

function StudentFormAdv () {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validaionSchema
    // })
    // console.log("Form value",formik.touched)
    return (<div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validaionSchema}>
        <Form>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name"></ErrorMessage>
            </div>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email"></ErrorMessage>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    </div>);
}

export default StudentFormAdv

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