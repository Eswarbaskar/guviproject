import React from 'react'
import { useFormik } from 'formik'

function Zen() {
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
            <div className="row">
                <div className="col-lg-6">

                    <form id="zenclass" onSubmit={formik.handleSubmit}>
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
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <img className='image' src="https://media.istockphoto.com/photos/over-shoulder-view-of-white-blank-empty-mockup-screen-for-advertising-picture-id1322837679?b=1&k=20&m=1322837679&s=170667a&w=0&h=RTcknJnN8huIcudHrOquYrpTUh2r6Payi4wcLUbdLeE=" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Zen