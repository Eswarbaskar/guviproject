import React from 'react'

function Codekata() {
    let data = [{
        name: "INPUT/OUTPUT",
        offer: "Get 25 Run Counts",
    },
    {
        name: "Absolute Beginner",
        offer: "Get 25 Run Counts",
    },
    {
        name: "Array",
        offer: "Get 75 Run Counts",
    },
    {
        name: "Mathematics",
        offer: "Get 100 Run Counts",
    }, 

    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='text-center'>Codekata</h1>
                    <p>Codekata a series of programs curated by experts from the industry.
                        Practising on Codekata will take your coding skills to next level.
                        We will recommend your profile to recruiting companies based on your performance in codekata.
                        You can be a better programmer and crack interviews by completing Codekata.</p>
                </div>
            </div>
            <div className="row">
                {
                    data.map((item) => {
                        return <div className="col-lg-4">
                            <div className="card shadow-lg p-3 mb-5 bg-white rounded" >
                                <div className="card-body">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVU9sd0iNpqA-P4_w98jVDjQXwV6cANSDgURkGtxbQWtg5qypAk-7UA4EO_khAmZ6pYI&usqp=CAU" class="card-img-top" alt="..."></img>
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.offer}</h6>
                                    <div className="text-right">
                                        <button href="index.html" className="card-link bg-success">Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>



    )
}

export default Codekata