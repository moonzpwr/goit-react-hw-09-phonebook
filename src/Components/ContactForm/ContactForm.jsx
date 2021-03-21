import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Alert from '../Alert/Alert';
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import s from './ContactForm.module.css';


export default function ContactForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isExist, setIsExist] = useState(false);

    const onAddContact = (contact) => dispatch(phonebookOperations.addContact(contact))
    const contacts = useSelector(phonebookSelectors.getItems)

    const handleSubmit = e => { 
        if (contacts.filter(el => el.name === name).length === 0) {
            e.preventDefault()
            onAddContact({ name, number });
            setName('');
            setNumber('');
            return;
        } 
        e.preventDefault()
        setIsExist(true);
        setTimeout(() => {
            setIsExist(false);
        }, 4000)
    }

    const handleChange = e => { e.target.type === 'text' ? setName(e.target.value) :  setNumber(e.target.value)  }

    const closeNotification = () => {
        setIsExist(false);
  }


        return (
            <div className={s.container}>
                <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="title">Phonebook</h1>
          </CSSTransition>
            <form className={s.form} onSubmit={handleSubmit}>
                <label>Name: 
                    <input type="text"
                    value={name}
                    onChange={handleChange} />
                </label>
                <label >Number: 
                    <input type="tel"
                    value={number}
                    onChange={handleChange}/>
                </label>
                <button
                    type='submit'
                    className={s.submitBtn}
                >Add contact</button>
            </form>
            <CSSTransition
            in={isExist}
            unmountOnExit
            timeout={250}
            classNames='notification'>
                <Alert onClickClose={closeNotification} />
            </CSSTransition>
            </div>
        )
        }
  


ContactForm.propTypes = {
    onAddContact: propTypes.func.isRequired
}


