import React, { useEffect, useState } from 'react'
import { getCategories, deleteCategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';

function CategoryList({ add }) {

    const [catList, setCatList] = useState([]);

    useEffect(() => {
        getData()
    }, [add])

    const getData = async () => {
        const res = await getCategories();
        console.log(res)
        if (res.status == 200) {
            setCatList(res.data)
        }
    }

    const handleDeleteCat = async (id) => {
        const res = await deleteCategory(id);
        console.log(res)
        if (res.status == 200) {
            getData()
        }
    }

    const dropHandler = async (e, category) => {
        console.log("dropped")
        const vid = JSON.parse(e.dataTransfer.getData("video"))
        category.videos.push(vid)
        const result = await updateCategory(category.id, category)
        console.log(result)
        if (result.status == 200) {
            toast.success(`${vid.title} video added to ${category.ctitle}`)
            getData()
        }
        else {
            toast.error("Failed Adding Video to Category !")
        }
    }
    const dragOverHandler = (e) => {
        console.log("dragging")
        e.preventDefault()
    }

    return (
        <>
            <div className='container-fluid border border-3 border-light p-2 mt-3'>
                {
                    catList.length > 0 ?
                        <div>
                            {
                                catList.map(i => (
                                    <div className='border m-1'>
                                        <div className='m-2 p-3 mb-3 d-flex justify-content-between' onDragOver={(e) => { dragOverHandler(e) }} onDrop={(e) => { dropHandler(e, i) }}>
                                            <h3>{i.ctitle}</h3>
                                            <button className='btn' onClick={() => { handleDeleteCat(i.id) }}><i className="fa-solid fa-trash" style={{ color: "#f70808", }} /></button>
                                        </div>
                                        <div>
                                            {
                                                i?.videos?.length > 0 &&
                                                <>
                                                    {i?.videos?.map(vid=>(
                                                        <VideoCard video={vid} cat={true} />
                                                    ))}
                                                </>
                                            }
                                        </div>
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