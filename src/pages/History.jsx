import React, { useEffect, useState } from 'react'
import { getHistory, deleteHistory } from '../services/allApis'

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    const res = await getHistory();
    console.log(res)
    if (res.status == 200) {
      setHistory(res.data)
    }
    else{
      console.log(res)
    }
  }

  const delHistory=async(id)=>{
    const res = await deleteHistory(id)
    console.log(res)
    if(res.status == 200){
      getData()
    }
  }

  return (
    <>
      <div className='p-5'>
        <h3>Watch History</h3>
        {
          history.length > 0 ?

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
                {
                  history.map(i =>(
                    <tr>
                      <td>{i.vid}</td>
                      <td>{i.title}</td>
                      <td>{i.vidurl}</td>
                      <td>{i.datetime}</td>
                      <td><button className='btn' onClick={()=>delHistory(i.id)}><i className="fa-solid fa-trash" style={{ color: "#f70808", }} /></button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            :
            <h4 className='text-center text-danger'>No History !!!</h4>
        }
      </div>
    </>
  )
}

export default History