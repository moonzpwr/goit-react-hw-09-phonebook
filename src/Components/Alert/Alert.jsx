import propTypes from 'prop-types'
import s from './Alert.module.css'



export default function Alert({onClickClose}) {
    return (
        <div className={s.container}>
            Contact already exist!
             <button type="button" className={s.btn} onClick={onClickClose}>Close</button>
        </div>
    )
}

Alert.propTypes = {
    onClickClose: propTypes.func.isRequired
}