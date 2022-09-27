import React from 'react'

function Courses() {
    let data = [{
        name: "step into robtic process and Automation",
        offer: "2h,English",
    },
    {
        name: "Python with IIT Certification",
        offer: "Get 25 Run Counts"
    },
    {
        name: "Python with IIT Certification",
        offer: "6 hrs Tamil"
    },
   
    {
        name: "Python with IIT Certification",
        offer: "6 hrs hindi",
    },
     ]
    return (
        <>
        <div className="container">
            <h1 className='text-center'>Courses</h1>
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a href="index.html" className="navbar-brand topbar">Course Library</a>
                                <a href="index.html" className="navbar-brand topbar">Combo</a>
                                <a href="index.html" className="navbar-brand topbar">Free Library</a>
                                <a href="index.html" className="navbar-brand topbar">My Courses</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        
        <hr />
        
            
            <div className="row">
                 <h3>Atomic Library</h3>
                 <hr />
                {
                    data.map((item) => {
                       return  <div className="col-lg-4">
                       <div className="card shadow-lg p-3 mb-5 bg-white rounded" >
                           <div className="card-body">
                            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="card-img-top" alt="" />
                               <h5 className="card-title">{item.name}</h5>
                               <h6 className="card-subtitle mb-2 text-muted">{item.offer}</h6>
                               <a href="index.html" className="card-link success">Learn for FREE</a>
                           </div>
                       </div>
                   </div>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Courses