import React from 'react'

function History() {
  return (
    <>
    <div className='p-5'>
      <h3>Watch History</h3>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Caption</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heeriye</td>
            <td>https://www.youtube.com/watch?v=RLzC55ai0eo</td>
            <td>10-09-2024</td>
            <td><button className='btn'><i className="fa-solid fa-trash" style={{color: "#f70808",}} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History