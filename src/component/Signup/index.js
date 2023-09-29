import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  //& This code snippet defines an object named data with four properties: 
  //& pseudo, email, password, and confirmPassword.The initial values for all properties are empty strings.


  const [loginData, setLoginData] = useState(data);
  //& ^ This code snippet is using destructuring assignment in JavaScript to extract 
  //& the values of pseudo, email, password, and confirmPassword from the data object.
  //& It allows you to assign these properties to separate variables in a more concise way.
  const [error, setError] = useState('')

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  }
  //& takes an event object as an argument. Inside the function, it updates the loginData state
  //& by spreading the existing loginData object and changing the value of a specific property using the id and value properties of the event target.

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = loginData;
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        setLoginData({ ...data });
        navigate('/welcome');
      })
      .catch(error => {
        setError(error);
        setLoginData({ ...data });
      })
  }

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button disabled>Inscription</button> : <button>Inscription</button>
  //& This code snippet creates a button element based on the values of pseudo, email, password, and confirmPassword.
  //& If any of these values is empty or if password is not equal to confirmPassword, the button will be disabled.
  //& Otherwise, the button will be enabled.


  // gestion erreurs
  const errorMsg = error !== '' && <span>{error.message}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">
        </div>
        <div className="formBoxRight">
          <div className="formContent">

            {errorMsg}

            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              </div>

              {btn}
            </form>

            <div className='linkContainer'>
              <Link className='simpleLink' to='/login'>Déjà inscrit ? Se connecter</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup