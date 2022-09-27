import React from 'react'

function Leaderboard() {
  let data = [
    {
      id: 1,
      name: "Arun",
      mark: 500
    },
    {
      id: 2,
      name: "Sangeeth",
      mark: 400
    },
    {
      id: 3,
      name: "Eswar",
      mark: 450
    },
    {
      id: 4,
      name: "Gokul",
      mark: 300
    },
    {
      id: 5,
      name: "Bala",
      mark: 500
    },
  ]
  return (
    <>
      <h1 className='text-center'>LeaderBoard</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mark</th>

          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mark}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Leaderboard