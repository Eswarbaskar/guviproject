import React from 'react'
import { useFormik } from 'formik'

function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert("WLECOME!!");
        },
    })
    return (
        <div className="container">
            <h2 className='text-center'>WLECOME!!</h2>
            <div className="row">
                <div className="col-lg-6">
                    <img className='image' src="https://www.guvi.in/images/webps/art-signin.webp" alt="" />

                </div>
                <div className="col-lg-6">

                    <form id="login" onSubmit={formik.handleSubmit}>
                        <h5 className='text-center'>login with your email</h5>
                        <div className="form-group">
                            <label for="Email1">Email</label>
                            <input type="email" className="form-control" id="Email1" name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>
                        <div className="form-group">
                            <label for="Password">Password</label>
                            <input type="password" className="form-control" id="Password" name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login