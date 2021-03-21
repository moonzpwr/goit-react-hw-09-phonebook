import { CSSTransition } from 'react-transition-group';
import '../App.css';


export default function HomeView() {
    
        return (
            <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="welcome">Welcome to our service.</h1>
          </CSSTransition>
           
        )
    
    
}

