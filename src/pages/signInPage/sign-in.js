import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp  from '../../components/sign-up/sign-up';
import {SignInAndSignUpContainer} from './sign-in.styles'
const SignInPage = ()=> (
    <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
    </SignInAndSignUpContainer>

);


export default SignInPage;