import React from 'react'
import * as Yup from 'yup'
import {ErrorMessage, Formik,Form, Field,FieldArray} from 'formik'
// below is example for using useFormik hook 
const initialValues = {
    name:'Enter name',
    email:'',
    address:{line1:'',line2:''},
    phoneNumbers:['',''],
    altPhones:['']
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
            <ErrorMessage name="name" component="div"></ErrorMessage>
            </div>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div className='form-control'>
            <label htmlFor='address'>Address Line1</label>
            <Field type="text" id="address.line1" name="address.line1" />
            <ErrorMessage name="address.line1"></ErrorMessage>
            </div>

            <div className='form-control'>
            <label htmlFor='address.line2'>Address Line2</label>
            <Field type="text" id="address.line2" name="address.line2" />
            <ErrorMessage name="address.line2"></ErrorMessage>
            </div>

            <div className='form-control'>
            <label htmlFor='phoneNumbers[0]'> Phone number 1</label>
            <Field type="text" id="phoneNumbers[0]" name="phoneNumbers[0]" />
            <ErrorMessage name="phoneNumbers[0]"></ErrorMessage>
            </div>
            <div className='form-control'>
            <label htmlFor='phoneNumbers[1]'>Phone number 2</label>
            <Field type="text" id="phoneNumbers[1]" name="phoneNumbers[1]" />
            <ErrorMessage name="phoneNumbers[1]"></ErrorMessage>
            </div>

            <div className='form-control'>
                <FieldArray name='altPhones'>
                    {
                    (fieldArrayProps)=>{
                        console.log('field array props',fieldArrayProps)
                        const {push,remove,form} = fieldArrayProps
                        const {values} = form
                        const {altPhones} = values
                        return (<div>
                            {
                                altPhones.map((phNumber,index)=>(
                                    <div key={index} >
                                        <Field name={`altNumbers[${index}]`}/>
                                        {
                                            index>0 && <button type="button" onClick={()=>remove(index)}>-</button> 
                                        }
                                        
                                        <button type="button" onClick={()=>push('')}>+</button>
                                    </div>
                                ))
                            }
                        </div>)
                    }
                    }
                </FieldArray>
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