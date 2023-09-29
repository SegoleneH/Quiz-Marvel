import React, { useState } from 'react'

const SignUp = () => {

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data);

  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>

        <div className='formBoxLeftSignUp'>
        </div>

        <div className='formBoxRight'>
          <div className='formContent'>
            <form>
              <h2>Inscription</h2>
              <div className='inputBox'>
                <input type="text" id='pseudo'autoComplete='off' required/>
                  <label htmlFor="pseudo">Pseudo</label>
                  {/*     ^ équivalent du for en HTML  */}
              </div>

              <div className='inputBox'>
                <input type="email" id='email' autoComplete='off' required />
                <label htmlFor="email">Email</label>
              </div>

              <div className='inputBox'>
                <input type="password" id='password' autoComplete='off' required />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className='inputBox'>
                <input type="password" id='confirmPassword' autoComplete='off' required />
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              </div>              

            </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp