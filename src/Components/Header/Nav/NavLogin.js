import React, { useState } from 'react'
import "./NavLogin.css"
import Register from '../Components/Register';
import Login from '../Components/Login';

const NavLogin = () => {
  const [isShowForm, setShowForm] = useState(false);
  return (
    <div>
        <button className='btnLogin' onClick={() => setShowForm(!isShowForm)}> Đăng nhập </button>
        {
          isShowForm === true ? (<Register />) : ("")
        }
    </div>
  )
}

export default NavLogin


