import React from 'react'


function Rewards() {
    let data = [{
        name: "codekata",
        offer: "Get 25 Run Counts",
        rs: 50
    },
    {
        name: "codekata",
        offer: "Get 25 Run Counts",
        rs: 50
    },
    {
        name: "codekata",
        offer: "Get 75 Run Counts",
        rs: 50
    },
    {
        name: "codekata",
        offer: "Get 100 Run Counts",
        rs: 50
    },
    {
        name: "codekata",
        offer: "Get 155 Run Counts",
        rs: 50
    },
     ]
    return (
        <div className="contianer ">
            
            <div className="row">
                 <h1 className='text-center'>REWARDS</h1>
                {
                    data.map((item) => {
                       return  <div className="col-lg-4">
                       <div className="card shadow-lg p-3 mb-5 bg-white rounded" >
                           <div className="card-body">
                            <img src="https://t3.ftcdn.net/jpg/04/22/92/40/360_F_422924095_nZhpWgDgqCLOvZYlI1EAGMkTwgKWg5BJ.jpg" className="card-img-top" alt="" />
                               <h5 className="card-title">{item.name}</h5>
                               <h6 className="card-subtitle mb-2 text-muted">{item.offer}</h6>
                               <h4  className="card-link">{item.rs}</h4>
                               <button href="index.html" className="card-link bg-success">redeem</button>
                           </div>
                       </div>
                   </div>
                    })
                }
            </div>
        </div>
    )
}

export default Rewards