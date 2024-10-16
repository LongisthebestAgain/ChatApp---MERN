import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, login } = useLogin();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Username and password are required!");
            return;
        }
        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center md:min-w-96 sm:min-w-52 min-w-52 mx-auto'>
            <div className='h-full w-full p-6 bg-purple-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'> Login
                    <span className='text-blue-700'> ChatApp</span>
                </h1>

                <form onSubmit={handleLogin}>
                    <div className='pt-4 flex flex-col gap-3'>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                        </div>
                        <div><label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                        </label>
                        </div>
                        <Link to='/signup' className='text-sm hover:text-blue-600 hover:underline pl-1 inline-block'>Don't have an account?</Link>
                    </div>
                    <div>
                        <button className='btn btn-md w-full mt-4' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
