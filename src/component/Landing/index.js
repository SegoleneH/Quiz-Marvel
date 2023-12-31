import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link} from 'react-router-dom';
import SignUp from '../Signup';
import Login from '../Login';


const Landing = () => {

    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);

    useEffect(() => {
        //^ s'effectue avant le return
        refWolverine.current.classList.add('startingImg');
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg');
            setBtn(true);
        }, 1000);
        //& ^ fait disparaître les griffes de Wolverine au bout de 1seconde
    }, [])
    //& ^ This code snippet is using the useEffect hook in React.It adds the CSS class "startingImg" 
    //& to the element referenced by refWolverine.current.The useEffect hook is triggered when the 
    //& component is mounted, and the empty array[] as the second argument ensures that it only runs once.

    const setLeftImg = () => {
        refWolverine.current.classList.add('leftImg');
    }

    const setRightImg = () => {
        refWolverine.current.classList.add('rightImg');
    }

    const clearImg = () => {
        if (refWolverine.current.classList.contains('leftImg')) {
            refWolverine.current.classList.remove('leftImg');
        }
        if (refWolverine.current.classList.contains('rightImg')) {
            refWolverine.current.classList.remove('rightImg');
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div  className='leftBox'>
                <Link to='/signup' element={<SignUp/>} onMouseOver={setLeftImg} onMouseOut={clearImg} className='btn-welcome'>Inscription</Link>
            </div>
            <div className='rightBox'>
                <Link to='/login' element={<Login/>} onMouseOver={setRightImg} onMouseOut={clearImg} className='btn-welcome'>Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refWolverine} className='welcomePage'>
            {displayBtn}
        </main>
    )
}

export default Landing