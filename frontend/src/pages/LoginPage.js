import React, { useEffect } from 'react'
import { deleteUser } from '../api'
import LoginForm from '../components/LoginForm'
import SignInForm from '../components/SignInForm'
const LoginPage = () => {
    let jsonToken = localStorage.getItem('token')
    useEffect(()=> {
        console.log(jsonToken)
        jsonToken = localStorage.getItem('token')
    }, [])
  return (
    <>
    {!jsonToken ? 
    (<>LOGUJ SI
    <LoginForm />
       Signuj Si
    <SignInForm />  
    </>) : (
      <>
    <button onClick={()=>localStorage.removeItem('token')}>wyloguj</button>
    <button onClick={()=>{
      deleteUser(localStorage.getItem('token'))
      localStorage.removeItem('token')
    }}>Deletuj</button>
    </>)
    }
    </>
  )
}
export default LoginPage