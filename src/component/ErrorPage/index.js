import React from 'react'
import batman from '../../images/batman.png'


const ErrorPage = () => {
  return (
    <div className='quiz-bg'>
        <div className='container'>
            <h2 className='textCenter'>Cette page n'existe pas</h2>
            <img className='batmanImg' src={batman} alt="Image du symbole de Batman : chauve souris grise sur fond blanc" />
        </div>
    </div>
  )
}

export default ErrorPage