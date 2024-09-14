import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkUserEmail, addUser } from '../services/allApis'

function Register() {

    const nav = useNavigate()
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleSignup = async () => {
        console.log(user)
        const { email, username, password } = user
        if (!email || !username || !password) {
            toast.warning("Enter valid inputs !")
        }
        else {
            const check = await checkUserEmail(email)
            console.log(check)
            if (check.data.length > 0) {
                toast.warning("Email Id already in use !")
            }
            else {
                const res = await addUser(user)
                if (res.status == 201) {
                    toast.success("User created successfully !")
                    setUser({
                        email: "",
                        username: "",
                        password: ""
                    })
                    nav('/login')
                }
                else{
                    toast.error("Registration failed !!!")
                    console.log(res)
                }
            }
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='w-50 border shadow bg-light p-4'>
                    <h1 className='text-center'>Register</h1>
                    <br />
                    <input type="text" className='form-control mb-3' placeholder='Enter Email ID' onChange={(e) => {setUser({ ...user, email: e.target.value }) }} />
                    <input type="text" className='form-control mb-3' placeholder='Enter Username' onChange={(e) => {setUser({ ...user, username: e.target.value }) }} />
                    <input type="password" className='form-control mb-3' placeholder='Enter Password' onChange={(e) => {setUser({ ...user, password: e.target.value }) }} />
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success' onClick={handleSignup}>Register</button>
                        <Link to={'/login'}>Already user? Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register