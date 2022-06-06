import {getAuth} from 'firebase/auth'
import {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }


  return <div className="profile">
    <heared className="profileHeader">
      <p className="pageHeader">
        My Profile
      </p>
      <button type='button' className="logOut" onClick={onLogout}>
        Logout
      </button>
    </heared>
  </div>
}

export default Profile