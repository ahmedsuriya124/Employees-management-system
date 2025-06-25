import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className="text-white bg-transparent text-xl ring-2 ring-emerald-600 focus:ring-2 focus:ring-emerald-500 outline-none rounded-full px-5 py-3 placeholder:text-gray-400" type="email" placeholder='Enter Your Email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    required className="text-white bg-transparent text-xl ring-2 ring-emerald-600 focus:ring-2 focus:ring-emerald-500 outline-none rounded-full mt-3 px-5 py-3 placeholder:text-gray-400" type="password" placeholder='Enter Your Password' />
                    <button className='text-white mt-7 outline-none text-xl bg-emerald-600 rounded-full py-3 px-5 cursor-pointer hover:bg-emerald-700 placeholder:text-white w-full' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login