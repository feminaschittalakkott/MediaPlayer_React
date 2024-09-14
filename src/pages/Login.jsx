import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLoginData } from '../services/allApis'
import { toast } from 'react-toastify'

function Login() {

    const nav = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleLogin=async()=>{
        console.log(user)
        const {email, password} = user
        if(!email || !password){
            toast.warning("Enter valid inputs !")
        }
        else{
            const res = await getLoginData(email, password)
            console.log(res)
            if(res.status == 200){
                if(res.data.length > 0){
                    toast.success("Login success !")
                    nav('/home')
                }
                else{
                    toast.warning("Invalid email or password !")
                }
            }
            else{
                toast.error("Somethnig went wrong !")
            }
        }
    }

    
  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-25 border shadow bg-light p-4'>
                <h1 className='text-center'>Login</h1>
                <br/>
                <input type="text" className='form-control mb-3' placeholder='Enter Email' onChange={(e)=>{setUser({...user, email: e.target.value})}} />
                <input type="password" className='form-control mb-3' placeholder='Enter Password' onChange={(e)=>{setUser({...user, password: e.target.value})}} />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' onClick={handleLogin}>Login</button>
                    <Link to={'/signup'}>New user? Signup</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login