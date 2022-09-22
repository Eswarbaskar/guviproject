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
            <h1>Courses</h1>
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a href="index.html" class="navbar-brand">Course Library</a>
                                <a href="index.html" class="navbar-brand">Combo</a>
                                <a href="index.html" class="navbar-brand">Free Library</a>
                                <a href="index.html" class="navbar-brand">My Courses</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <hr />
        <div className="contianer ">
            
            <div className="row">
                 <h3>Atomic Library</h3>
                 <hr />
                {
                    data.map((item) => {
                       return  <div className="col-lg-4">
                       <div class="card shadow-lg p-3 mb-5 bg-white rounded" >
                           <div class="card-body">
                               <h5 class="card-title">{item.name}</h5>
                               <h6 class="card-subtitle mb-2 text-muted">{item.offer}</h6>
                               
                               
                               <a href="index.html" class="card-link success">Learn for FREE</a>
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