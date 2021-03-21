import { CSSTransition } from 'react-transition-group';
import { lazy } from 'react';
import {  useSelector } from 'react-redux';
import phonebookSelectors from '../redux/phonebook/phonebook-selectors'



const ContactForm = lazy(() => import('../Components/ContactForm/ContactForm' /* webpackChunkName: "ContactForm" */));
const ContactList = lazy(() => import('../Components/ContactList/ContactList' /* webpackChunkName: "ContactList" */));
const Filter = lazy(() => import('../Components/Filter/Filter' /* webpackChunkName: "filter" */))

export default function Phonebook() {
  const contacts = useSelector(phonebookSelectors.getItems)
  
    return (
      <div className="phonebook-container">
      <ContactForm />
      
      <ContactList />
        
      <CSSTransition
        in={contacts.length > 1}
        unmountOnExit
        timeout={250}
        classNames='filter'
        >
        <Filter/>
      </CSSTransition>
      </div>
    )

}

