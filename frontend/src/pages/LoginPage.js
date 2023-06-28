import React, { useEffect } from 'react'
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
    <button onClick={()=>localStorage.removeItem('token')}>wyloguj</button>)
    }
    </>
  )
}
export default LoginPage