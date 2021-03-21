import {  useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import authOperations from '../redux/auth/auth-operations'


export default function Registration() {
  const dispatch = useDispatch()
    const [name, setName] = useState('');
    const nameChange = ({ target: {  value } }) => {
      setName(value)   
    }

    const [email, setEmail] = useState('');
    const emailChange = ({ target: {  value } }) => {
      setEmail(value)   
    }

    const [password, setPassword] = useState('');
    const passwordChange = ({ target: {  value } }) => {
     setPassword(value)   
    }

    const handleSubmit = e => {
      e.preventDefault()
    
      dispatch(authOperations.register({name, email, password}));
      
      setName('');
      setEmail('');
      setPassword('');

    }



    return (
      <div className='authContainer'>
        <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="title">Sing up</h1>
          </CSSTransition>
        <form autoComplete='off' onSubmit={handleSubmit} className='authForm'>
          <label>
            Name: <input type='text' name='name' value={name} onChange={nameChange}></input>
          </label>
          <label>
            E-mail: <input type='email' name='email' value={email} onChange={emailChange}></input>
          </label>
          <label>
            Password: <input type='password' name='password' value={password} onChange={passwordChange}></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
}


