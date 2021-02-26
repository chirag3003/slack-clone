import { Button } from '@material-ui/core';
import React from 'react'
import styled from "styled-components"
import {auth,provider} from "./data/firebase.js";
import {GoogleLoginButton} from "react-social-login-buttons"

function Login({changeUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            const newUser = {
                name:result.user.displayName,
                photo: result.user.photoURL,
            }
            changeUser(newUser);
            localStorage.setItem('user',JSON.stringify(newUser));
        })
        .catch(err => {
            alert(err.message);
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="https://www.flaticon.com/premium-icon/icons/svg/2584/2584687.svg" />
                <h1>Sign In Slack</h1>

                <SignInButtons>

                    <Button variant='contained' onClick={signIn}>
                        <SigninImg>
                            <img 
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" 
                            />
                        </SigninImg>
                         Sign in With Google
                    </Button>

                </SignInButtons>
            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f8f8f8;

`
const Content = styled.div`
    background:white;
    padding:100px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const SlackImg = styled.img`
    height:100px;
`
const SignInButtons = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 21px 36px;
    align-items:center;
    justify-content:center;
    margin-top:40px;
`
const SigninImg = styled.div`
    height:30px;
    width:30px;
    img{
        width:100%;
        height:100%;
    }
`