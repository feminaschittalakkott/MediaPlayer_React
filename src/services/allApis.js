import axios from "axios";

export const addVideos=async(data)=>{
    return await axios.post('http://localhost:3000/videos', data)
}

export const getVideos=async(data)=>{
    return await axios.get('http://localhost:3000/videos')
}

export const deleteVideo=async(id)=>{
    return await axios.delete(`http://localhost:3000/videos/${id}`)
}

export const addCategory=async(data)=>{
    return await axios.post('http://localhost:3000/category', data)
}

export const getCategories=async()=>{
    return await axios.get('http://localhost:3000/category')
}

export const deleteCategory=async(id)=>{
    return await axios.delete(`http://localhost:3000/category/${id}`)
}

export const addHistory=async(data)=>{
    return await axios.post('http://localhost:3000/history', data)
}

export const getHistory=async()=>{
    return await axios.get('http://localhost:3000/history')
}

export const deleteHistory=async(id)=>{
    return await axios.delete(`http://localhost:3000/history/${id}`)
}