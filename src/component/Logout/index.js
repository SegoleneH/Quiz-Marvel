import React, { useState, useEffect } from 'react'

const Logout = () => {

    const[checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            console.log('checked');
        }
    }, [checked]);

    const handleChange = event => {
        console.log(event)
    }

  return (
    <div className='logoutContainer' >
        <label className='switch'>
            <input 
            onChange={handleChange}
                type="checkbox"
                checked={checked}
            />
            <span className='slider round'></span>
        </label>
    </div>
  )
}

export default Logout