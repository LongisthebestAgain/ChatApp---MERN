import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()
    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return; // if there are errors, return nothing and stop the function 
        try {
            setLoading(true);
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' //content-type is used to specify the type of data that is being sent to the server , and the data is in json format
                },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }), // json.stringify is used to convert the object to a string 
            });
            const data = await res.json();

            
            if(data.error){
                throw new Error(data.error)
            }
            toast.success("User created successfully")

            localStorage.setItem("chat-user", JSON.stringify(data)); //If you're comfortable fetching user-specific data (like username, avatar, etc.) from the backend after each login or page refresh, you might not need to store anything in localStorage. You could just depend on the JWT stored in the HTTP-only cookie and make a server request to get user info.
            console.log(data)   
            setAuthUser(data);


        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { signup, loading };
};
export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('All fields are required')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Password do not match')
        return false;
    }
    if (password.length < 6) {
        toast.error('Password should be at least 6 characters')
        return false;
    }
    return true;
}
