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
                 <h1>REWARDS</h1>
                {
                    data.map((item) => {
                       return  <div className="col-lg-4">
                       <div class="card shadow-lg p-3 mb-5 bg-white rounded" >
                           <div class="card-body">
                               <h5 class="card-title">{item.name}</h5>
                               <h6 class="card-subtitle mb-2 text-muted">{item.offer}</h6>
                               
                               <h4  class="card-link">{item.rs}</h4>
                               <button href="index.html" class="card-link bg-success">redeem</button>
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