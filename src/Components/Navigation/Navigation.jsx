import { useSelector } from "react-redux";
import MainNav from "./MainNav/MainNav";
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
import s from './Navigation.module.css'
import authSelectors from '../../redux/auth/auth-selectors'



export default function Navigation() {
   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <div className={s.container}>
      <MainNav />
      {isAuthenticated ? <UserMenu/> : <AuthNav/>}
    
    </div>
    
  )
}

