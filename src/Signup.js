import { useFormik } from 'formik'
import React from 'react'

function Signup() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
        },
        onSubmit: values => {
            alert("WWLECOME!!");
        },
    })
    return (
        <div className="container">
            <h2 className='text-center'>WLECOME!!</h2>
            <div className="row">
                <div className="col-lg-6">

                    <form id="login" onSubmit={formik.handleSubmit}>
                        <h5 className='text-center'>signup with your email</h5>
                        <div className="form-group">
                            <label for="firstName">FirstName</label>
                            <input type="text" className="form-control"
                                id="firstName"
                                name='firstName'
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />

                        </div>
                        <div className="form-group">
                            <label for="lastName">LastName</label>
                            <input type="text" className="form-control"
                                id="lastName"
                                name='lastName'
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />

                        </div>
                        <div className="form-group">
                            <label for="Email1">Email</label>
                            <input type="email" className="form-control" id="Email1"
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>
                        <div className="form-group">
                            <label for="Password">Password</label>
                            <input type="password" className="form-control" id="Password"
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>
                        <div className="form-group ">
                            <label for="phoneNumber">PhoneNumber</label>
                            <input type="number" className="form-control" id="phoneNumber"
                                name='phoneNumber'
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber} />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <img className='image' src="https://www.guvi.in/images/webps/art-new-account.webp" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Signup