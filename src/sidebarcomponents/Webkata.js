import React from 'react'

function Webkata() {
  let data = [{
    name: "HTML",
    offer: "Get 25 Run Counts",
  },
  {
    name: "CSS",
    offer: "Get 25 Run Counts",
  },
  {
    name: "JAVASCRIPT",
    offer: "Get 75 Run Counts",
  },
  {
    name: "BOOTSTRAP",
    offer: "Get 100 Run Counts",
  },

  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className='text-center'>WEBKATA</h1>
          <p className='text-center'>Learn Web development skills by a series of task.
            Webkata is the Front-end practice platform which hosts a series of tasks on Web Development skills like HTML, CSS, and Javascript.
            This cloud based module will enable you to practise Front-end skills without any need to setup local environment.</p>
        </div>
      </div>
      <div className="row">
        {
          data.map((item) => {
            return <div className="col-lg-4">
              <div className="card shadow-lg p-3 mb-5 bg-white rounded" >
                <div className="card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lKyd0Fj5cFEefQFdFKAuu8vot-0Dug2_MVMV7t4wiPKFj6yoaaXd9j-3HvIKswubbys&usqp=CAU" class="card-img-top" alt="..."></img>
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

export default Webkata