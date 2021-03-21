import propTypes from 'prop-types';
import {  useDispatch, useSelector } from "react-redux";
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import s from "./Filter.module.css";


export default function Filter() {
    const value = useSelector(phonebookSelectors.getFilter);
    const dispatch = useDispatch();
    const oncahngeFilter = (event) => dispatch(phonebookActions.cahngeFilter(event.target.value))


    return (
        <div className={s.container}>
            <label className={s.filterLabel}>Find contacts by name
                <input type="text" value={value } onChange={oncahngeFilter }/>
            </label>
        </div>
    )
}

Filter.propTypes = {
    value: propTypes.string,
    oncahngeFilter: propTypes.func.isRequired
}
