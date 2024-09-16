import axios from "axios";

const base_url = "https://mp-server-dqs1.onrender.com"

export const addVideos=async(data)=>{
    return await axios.post(`${base_url}/videos`, data)
}

export const getVideos=async(data)=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideo=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCategory=async(data)=>{
    return await axios.post(`${base_url}/category`, data)
}

export const getCategories=async()=>{
    return await axios.get(`${base_url}/category`)
}

export const deleteCategory=async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}

export const updateCategory=async(id, data)=>{
    return await axios.put(`${base_url}/category/${id}`, data)
}

export const addHistory=async(data)=>{
    return await axios.post(`${base_url}/history`, data)
}

export const getHistory=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const deleteHistory=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}

export const checkUserEmail=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const addUser=async(data)=>{
    return await axios.post(`${base_url}/users`, data)
}

export const getLoginData=async(email, password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}