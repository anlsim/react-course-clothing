import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp  from '../../components/sign-up/sign-up';
import './sign-in.scss';
const SignInPage = ()=> (
    <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
    </div>

);


export default SignInPage;