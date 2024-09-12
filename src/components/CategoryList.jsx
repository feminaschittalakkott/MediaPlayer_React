import React, {useEffect, useState} from 'react'
import { getCategories, deleteCategory } from '../services/allApis'

function CategoryList({add}) {

    const [catList, setCatList] = useState([]);

    useEffect(()=>{
        getData()
    }, [add])

    const getData=async()=>{
        const res = await getCategories();
        console.log(res)
        if(res.status == 200){
            setCatList(res.data)
        }
    }

    const handleDeleteCat=async(id)=>{
        const res = await deleteCategory(id);
        console.log(res)
        if(res.status == 200){
            getData()
        }
    }

  return (
    <>
        <div className='container-fluid border border-3 border-light p-2 mt-3'>
            {
            catList.length > 0 ?
            <div>
                {
                    catList.map(i=>(
                        <div className='m-2 p-3 mb-3 border d-flex justify-content-between'>
                            <h3>{i.ctitle}</h3>
                            <button className='btn' onClick={()=>{handleDeleteCat(i.id)}}><i className="fa-solid fa-trash" style={{ color: "#f70808", }} /></button>
                        </div>
                    ))
                }
            </div>
            :
            <h5 className='text-center text-danger'>No Catgories</h5>
            }
        </div>
    </>
  )
}

export default CategoryList