import React from 'react';
import CodeBlock from './CodeBlock';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';
function MainZone() {


  return (
    <div className="main">
        LOGUJ SI
     <LoginForm />
        Signuj Si
     <SignInForm /> 
  
  </div>
  );
}

export default MainZone;
