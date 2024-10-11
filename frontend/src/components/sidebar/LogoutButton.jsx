import { CgLogOut } from "react-icons/cg";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();


  return (
    <div className='mt-auto'>
      {
        !loading ? (<CgLogOut className="h-6 w-6 text-white cursor-pointer" onClick={logout}/>)
          : (<span className="loading loading-spinner"></span>)
      }
    </div>
  )
}
export default LogoutButton;
