import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })
  const { signup, loading } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (


    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='h-full w-full p-6 bg-purple-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> SignUp

          <span className='text-blue-700'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='pt-6 flex flex-col gap-3 '>
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
                <input type="text" className="grow" placeholder="Full Name"
                  value={inputs.fullName}
                  onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}

                // Some of revision notes:
                // Normal HTML:In traditional HTML forms, the browser manages the input's value until the form is submitted or JavaScript is explicitly called to handle the input. The value isn’t processed until the user finishes filling out the form or submits it.
                // You only retrieve the data (like storing it in a variable) when you need it, for example, on form submission.
                // React (Controlled Components):

                // In React, the form inputs are controlled by React’s state. Every time the user types, the onChange event is triggered, which updates the state (e.g., inputs.fullName) one character at a time.
                // The input's value is continuously synchronized with the state, meaning each character typed by the user is immediately stored in inputs.fullName.
                // React then re-renders the component to show the updated value in the input field using the value attribute. This ensures that what the user sees in the input field is always in sync with the component's state.
                //...inputs is to ensure that only fullName is updated and the rest of the state is preserved.
                // 1. Re-rendering Mechanism in React
                // Component-based Rendering: React operates on a component-based architecture. When you update the state (for example, when you type in an input field), only the component that is directly affected by that state change is re-rendered.
                // Virtual DOM: React uses a Virtual DOM to optimize rendering. When state changes, React updates the Virtual DOM first, which is a lightweight copy of the actual DOM. It then compares the Virtual DOM to the actual DOM to identify what has changed.
                // Efficient Updates: After comparing, React only updates the parts of the actual DOM that have changed. In your case, if you change the fullName value, only the specific input field is updated in the DOM, not the entire page.
                // 2. Why There’s No Page Reload
                // Single-Page Application (SPA): React applications are typically structured as single-page applications (SPAs). This means that the whole app is loaded once, and navigation between different components or views happens without full-page reloads.
                // State Management: React's state management allows the application to respond to user input and other events without needing to refresh the entire page. Instead, components update their internal state and re-render based on that state change.
                // Event Handling: When you type in the input field, the onChange event handler updates the state using the setInputs function. This update triggers React's rendering process but does not reload the page like a traditional web application would (where a full page reload is required to reflect changes).

                />

              </label>
            </div>
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
                  value={inputs.username}
                  onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2">
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
                  value={inputs.password}
                  onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2">
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
                <input type="password" className="grow" placeholder='Confirm Password'
                  value={inputs.confirmPassword}
                  onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                />
              </label>
            </div>

          </div>

          <GenderCheckBox onCheckChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to={'/login'} className='text-sm hover:text-blue-600 hover:underline pl-1 mt-2 inline-block'>Already have an account?</Link>

          <div>

            <button className='btn btn-md w-full mt-4' disabled={loading}>

              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}

            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
