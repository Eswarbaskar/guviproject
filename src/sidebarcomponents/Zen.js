import React from 'react'

function Zen() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 ">
                    <form id="zenclass">
                        
                        <div class="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                         </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" class="btn btn-primary ">login</button>
                        
                        
                    </form>
                </div>
                <div className="col-lg-6">
                    <img src="https://media.istockphoto.com/photos/over-shoulder-view-of-white-blank-empty-mockup-screen-for-advertising-picture-id1322837679?b=1&k=20&m=1322837679&s=170667a&w=0&h=RTcknJnN8huIcudHrOquYrpTUh2r6Payi4wcLUbdLeE=" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Zen