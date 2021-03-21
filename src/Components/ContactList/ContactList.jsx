import { TransitionGroup, CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import s from "./ContactList.module.css";


export default function ContactList() {
    const dispatch = useDispatch();
    const onRemoveContact = (id) => dispatch(phonebookOperations.removeContact(id));
    
    const contacts = useSelector(phonebookSelectors.getVisibleContacts)

    useEffect(() => {
        dispatch(phonebookOperations.fetchContacts())
    }, [dispatch])


        return (
        <div className={s.container}>
            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames='title'>
                <h2 className="title">Contacts</h2>
            </CSSTransition>
            <TransitionGroup component='ul' className={s.contactList}>
                {contacts.map(el => {
                    return (
                        <CSSTransition key={el.id} timeout={250} classNames={s}>
                            <ContactItem
                                id={el.id}
                                name={el.name}
                                number={el.number}
                                onClickRemove={onRemoveContact} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
        )

    
}

ContactList.propTypes = {
    onRemoveContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.object).isRequired
}

