import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { FormControlLabel, Switch } from '@material-ui/core';

function Header({darkTheme,changeTheme}) {
    return (
        <div>
            <Container darkTheme={darkTheme} >
                <Logo>
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/2584/2584687.svg" alt="Slack"/>
                </Logo>
                <Main>
                    <ThemeSwitcher >
                    <FormControlLabel
                        value={darkTheme?"Dark":"Light"}
                        control={<Switch
                            checked={darkTheme}
                            onChange={changeTheme}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'Theme Changer' }}
                        />}
                        label={darkTheme?"Dark":"Light"}
                        labelPlacement="start"
                    />
                        
                    </ThemeSwitcher>
                    <AccessTimeIcon />
                    <SearchContainer >
                        <Search darkTheme={darkTheme}>
                            <input type="text" placeholder="search..."></input>
                        </Search>
                    </SearchContainer>
                    <HelpOutlineIcon />
                </Main>
                
                <UserContainer>
                    <Name>
                        Chirag
                    </Name>
                    <UserImage>
                        <img 
                            src="https://www.flaticon.com/premium-icon/icons/svg/3829/3829543.svg" 
                            alt="user image"
                        />
                    </UserImage>
                </UserContainer>
            </Container>
        </div>
    )
}

export default Header
 

const Container = styled.div`
    background:${props => props.darkTheme?"#1a1a2e":"#350d36"};
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    position:relative;
    height:100%
`
const Logo = styled.div`
    height:40px;
    width:40px;
    position:absolute;
    left:30px;
    img{
        height:100%;
        width:100%;
    }
`
const Main = styled.div`
    display:flex;
    align-items:center;
    margin: 0 1rem;
`
const ThemeSwitcher = styled.div`
    margin-right:40px;
    margin-left:-40px;
`
const SearchContainer = styled.div`
    min-width:400px;
    margin: 0 1rem;

`
const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right:1rem;
    position:absolute;
    right:20px;
`
const Search = styled.div`
    
    width:100%;
    border-radius:6px;
    align-items:center;
    justify-content:center;
    padding:0 10px;
    input {
        background: ${props => props.darkTheme?"#16213e":"#3B0F4D"};
        border:none;
        padding:6px 12px;
        color:white;
        border-radius:16px;
        width:90%;
        margin:auto;
        box-shadow: 0px 0px 10px 0 #811282;
        
    }
    input:focus{
        outline:none;
        box-shadow: 0px 0px 10px 2px #811282;
    }
`
const Name = styled.div`
    margin-right:20px;
`
const UserImage = styled.div`
    width:40px;
    height:40px;

    img{
        height:100%;
        width:100%;
        border-radius:50%;
    }
`