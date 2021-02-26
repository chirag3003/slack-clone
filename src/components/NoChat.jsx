import React from 'react'
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NoChat({darkTheme}) {
    return (
        <Container darkTheme={darkTheme}>
            <Content darkTheme={darkTheme} >
                <ArrowBackIcon />
                <h1>Select A Channel</h1>
            </Content>

        </Container>
    )
}

export default NoChat


const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:${props => props.darkTheme?"#0f3460":"#f2f4fb"};
    color:${props => props.darkTheme?'rgb(188,171,188)':null};
`
const Content = styled.div`
    width:55%;
    background:${props => props.darkTheme?"#1f4068":"#e8e8e8"};
    padding:30px;
    border-radius:16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:40px;

    
`