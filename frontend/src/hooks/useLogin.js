import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        if (!username || !password) {
            toast.error("Username and password must not be empty.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };

}

export default useLogin
