import React from 'react'
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SpeedIcon from '@material-ui/icons/Speed';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import messageData from "./data/message.js";


function Chat({darkTheme}) {
    return (
        <Container darkTheme={darkTheme}>
            <Header darkTheme={darkTheme}>
                <NameDes darkTheme={darkTheme}>
                    # Channel Name
                    <p>Share ur thoughts here</p>
                </NameDes>
                <HeaderRight>
                    <IconButton aria-label="add person" >
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton aria-label="channel info">
                        <InfoOutlinedIcon />
                    </IconButton>
                </HeaderRight>
            </Header>
            <ChatBody>
                {
                    messageData.map((message,i) => {
                        return(
                            <Message>
                                <MessageAvatar>
                                    <img src={message.avatar} />
                                </MessageAvatar>
                                <MessageText>
                                    <p className="name">{message.name}</p>
                                    <p className="message">{message.message}</p>
                                </MessageText>
                            </Message>
                        )
                    })
                }
                
            </ChatBody>
            <ChatFooter>
                <InputContainer darkTheme={darkTheme}>
                    <IconButton>
                        <SpeedIcon />
                        
                    </IconButton>
                    <input type="text"/>
                    <IconButton>
                        <EmojiEmotionsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                </InputContainer>
            </ChatFooter>

        </Container>
    )
}

export default Chat


const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:${props => props.darkTheme?"#0f3460":"#f2f4fb"};
    color:${props => props.darkTheme?'rgb(188,171,188)':null};
    

`
const Header = styled.header`
    
    height:64px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${props => props.darkTheme?"#1f4068":"#e8e8e8"};
    padding: 0 20px;
`
const NameDes = styled.div`
    p{
        font-weight:400;
        color:#6c757d;
        font-size:0.7rem;
        margin-left:15px;
    }
    color:${props => props.darkTheme?'rgb(188,171,188)':null};
    font-weight:600;
    
`
const HeaderRight = styled.div`
    display:flex;
`
const ChatBody = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    padding: 30px;
`
const Message = styled.div`
    display:flex;
    margin-bottom:20px;
`
const MessageAvatar = styled.div`
    height:40px;
    width:40px;
    img{
        height:100%;
        width:100%;
        border-radius:20px;
    }
`
const MessageText = styled.div`
    margin-left:20px;
    .name{
        font-weight:600;
    }
`
const ChatFooter = styled.div`
    height:70px;
    display:flex;
    justify-content:center;
    align-items: center;
    padding:0 20px;

`
const InputContainer = styled.div`
    width:100%;
    display:flex;
    border-radius:25px;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
    input{
        background:${props => props.darkTheme?"#1f4068":null};
        padding:0px 10px;
        flex:1;
        border:none;
        outline:none;
        margin:0 5px;
    }
`