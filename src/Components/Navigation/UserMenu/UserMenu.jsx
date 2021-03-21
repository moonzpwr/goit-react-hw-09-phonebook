import { useSelector, useDispatch } from "react-redux"
import authSelectors from '../../../redux/auth/auth-selectors'
import authOperations from '../../../redux/auth/auth-operations'
import defaultAvatar from './user.svg'
import s from './UserMenu.module.css'

export default function UserMenu() {
    const name = useSelector(authSelectors.getUsername)
    const dispatch = useDispatch()
    const onLogout = () => dispatch(authOperations.logOut())

    return (
        <div className={s.container}>
            <img src={defaultAvatar} alt='' width='30' />
            <span>Welcome, {name}!</span>
            <button type='button' onClick={onLogout}>Logout</button>
        </div>
    )
    
}

