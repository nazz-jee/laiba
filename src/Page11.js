// import { Formik ,Form, Field,ErrorMessage } from 'formik'
// import React, { Fragment } from 'react'
// import * as yup from "yup"


// const Page11 = () => {
//     const defaultValue ={
//         email:""
//     }
//     const validationSchema = yup.object().shape({
//         email:yup.string().required("Please enter your email")
//     })
//     const handleSubmit = (values) =>{
//         console.log("values",values)
//     }
//   return (
//     <Fragment>
//          <div className='container' style={{backgroundColor:'wheat', width:'500px', height:'400px', marginTop:'100px', borderRadius:'15px', paddingTop:'70px'}}>
//             <h1 className='text-center text-5xl font-bold'>BAROQUE</h1>
//             <h6 className='text-left text-2xl font-bold' style={{paddingTop:'50px',paddingLeft:'10px'}}>Log In</h6>
//             <p className='text-left' style={{color:'gray',paddingLeft:'10px',paddingTop:'10px'}}>Enter your email and we'll send you a login code</p>  <br/>
//          <Formik initialValues={defaultValue}
//          validationSchema={validationSchema}
//          onSubmit={handleSubmit}>
//             <Form style={{textAlign:'left',paddingLeft:'10px'}}>
//                 <label>Email</label> <br/>
//                 <Field  type="text" name="email" className="form-control"></Field>
//                 <p  className='text-danger'>
//                     <ErrorMessage name="email"/>
//                 </p>
//                 <br />
//                 <button className='btn btn-primary form-control ' type="submit">Contineou</button>
//             </Form>
//          </Formik>
//          </div>
//     </Fragment>
//   )
// }

// export default Page11
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import React, { Fragment } from 'react';
// import * as yup from 'yup';

// const Page11 = () => {
//   const defaultValue = {
//     email: '',
//   };

//   const validationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required('Please enter your email'),
//   });

//   const handleSubmit = (values) => {
//     console.log('values', values);
//   };

//   return (
//     <Fragment>
//       <div
//         className='container'
//         style={{
//           backgroundColor: 'wheat',
//           width: '500px',
//           height: '400px',
//           marginTop: '100px',
//           borderRadius: '15px',
//           paddingTop: '70px',
//         }}
//       >
//         <h1 className='text-center text-5xl font-bold'>BAROQUE</h1>
//         <h6
//           className='text-left text-2xl font-bold'
//           style={{ paddingTop: '50px', paddingLeft: '10px' }}
//         >
//           Log In
//         </h6>
//         <p
//           className='text-left'
//           style={{ color: 'gray', paddingLeft: '10px', paddingTop: '10px' }}
//         >
//           Enter your email and we'll send you a login code
//         </p>
//         <br />
//         <Formik
//           initialValues={defaultValue}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           validateOnChange={true} // Enable validation on change
//           validateOnBlur={true} // Enable validation on blur
//         >
//           {({ touched, errors }) => (
//             <Form style={{ textAlign: 'left', paddingLeft: '10px' }}>
//               <label>Email</label> <br />
//               <Field
//                 type='text'
//                 name='email'
//                 className={`form-control ${
//                   touched.email && errors.email ? 'is-invalid' : ''
//                 }`}
//               />
//               <ErrorMessage
//                 name='email'
//                 component='p'
//                 className='text-red-600 text-sm' // Tailwind CSS for error message styling
//               />
//               <br />
//               <button className='btn btn-primary form-control ' type='submit'>
//                 Continue
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </Fragment>
//   );
// };

// export default Page11;
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Fragment } from 'react';
import * as yup from 'yup';

const Page11 = () => {
  const defaultValue = {
    email: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format') // Added a more descriptive error for invalid email format
      .required('Please enter your email'),
  });

  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <Fragment>
      <div
        className='container'
        style={{
          backgroundColor: '#F5F5F5',
          width: '500px',
          height: '450px',
          marginTop: '50px',
          marginBottom: '50px',
          borderRadius: '15px',
          paddingTop: '70px',
        }}
      >
        <h1 className='text-center text-5xl font-bold'>BAROQUE</h1>
        <h6
          className='text-left text-2xl font-bold'
          style={{ paddingTop: '50px', paddingLeft: '10px' }}
        >
          Log In
        </h6>
        <p
          className='text-left'
          style={{ color: 'gray', paddingLeft: '10px', paddingTop: '10px' }}
        >
          Enter your email and we'll send you a login code
        </p>
        <br />
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form style={{ textAlign: 'left', paddingLeft: '10px' }}>
            <label>Email</label>
            <br />
            <Field type='text' name='email' className='form-control' />
            <p className='text-danger'>
              <ErrorMessage name='email' />
            </p>
            <br />
            <button className='btn btn-primary form-control ' type='submit'>
              Continue
            </button>
            <br />
            <br />
            <p className='text-primary'>Privacy</p>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};

export default Page11;
