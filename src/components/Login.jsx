import { Button } from '@material-ui/core';
import React from 'react'
import styled from "styled-components"
import {auth,provider} from "./data/firebase.js";


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
                    <Button onClick={signIn}>
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
`