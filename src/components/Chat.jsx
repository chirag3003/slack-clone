import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SpeedIcon from '@material-ui/icons/Speed';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import messageData from "./data/message.js";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import GifIcon from '@material-ui/icons/Gif';
import db from "./data/firebase"
import {BrowserRouter as Router,Route,Switch,useParams} from "react-router-dom";
import firebase from 'firebase';

function Chat({darkTheme,user}) {

    const [input,changeInput] = useState('');
    const [inputButtons,setInputButtons] = useState(false);
    const [channel,changeChannel] = useState({})
    const {channelId} = useParams();
    const [messages,changeMessages] = useState([]);


    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc) => doc.data());
            changeMessages(messages)
        })
    }
    const sendMessage = () => {
        // console.log(user.name,user.photo,input,firebase.firestore.Timestamp.now())
        if(input === ''){
            return ;
        }
        let message = {
            name: user.name,
            photo:user.photo,
            text:input,
            timestamp:firebase.firestore.Timestamp.now()
        }
        db.collection('rooms').doc(channelId).collection('messages').add(message);
        changeInput('')
    }
    const getChannel = () => {
        db.collection('rooms').doc(channelId).onSnapshot((snapshot) => {
            changeChannel(snapshot.data());
            
        })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    },[channelId])


    return (
        <Container darkTheme={darkTheme}>
            
                        <Header darkTheme={darkTheme}>
                            <NameDes darkTheme={darkTheme}>
                                # {channel.name}
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
                                messages.map((message,i) => {
                                    return(
                                        <Message darkTheme={darkTheme}>
                                            <MessageAvatar>
                                                <img src={message.photo} />
                                            </MessageAvatar>
                                            <MessageText>
                                                <p className="name">{message.name} 
                                                    <span>{new Date(message.timestamp.toDate()).toUTCString}</span>
                                                </p>
                                                <p className="message">{message.text}</p>
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
                                <input 
                                    type="text"
                                    value={input}
                                    onChange={evt => {changeInput(evt.target.value)}}
                                    
                                />
                                <IconButton>
                                    <EmojiEmotionsOutlinedIcon />
                                </IconButton>
                                
                                <IconButton onClick={() =>{setInputButtons(!inputButtons)}}>
                                    <MoreVertIcon />
                                </IconButton>
                                <button 
                                    type='submit'
                                    style={{display:'none'}} 
                                    onClick={evt => {evt.preventDefault();sendMessage()}}
                                ></button>
                            </InputContainer>
                            <InputButtons style={{display:inputButtons?'':'none',}}>
                                <IconButton>
                                    <AttachFileOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <CallIcon />
                                </IconButton>
                                <IconButton>
                                    <VideocamIcon />
                                </IconButton>
                                <IconButton>
                                    <GifIcon />
                                </IconButton>
                                

                            </InputButtons>
                        </ChatFooter>

      
              </Container>
    )
}

export default Chat


const Container = styled.div`
    display:grid;
    grid-template-rows:64px minmax(0,1fr) min-content;
    flex-direction:column;
    height:100%;
    max-height:100%;
    background:${props => props.darkTheme?"#0f3460":"#f2f4fb"};
    color:${props => props.darkTheme?'rgb(188,171,188)':null};
    overflow-y:auto
    

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
    padding: 30px 0;
`
const Message = styled.div`
    display:flex;
    padding:10px 30px;
    :hover{
        background:${props => props.darkTheme?"#1f4068":"#e8e8e8"};
    }
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
    font-weight:400;
    .name{
        font-weight:700;
        margin-bottom:3px;
    }
`
const ChatFooter = styled.div`
    
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    padding:15px 20px;

`
const InputContainer = styled.form`
    width:100%;
    display:flex;
    border-radius:25px;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
    transition:1s ease;
    input{
        background:${props => props.darkTheme?"#1f4068":null};
        padding:0px 10px;
        flex:1;
        border:none;
        outline:none;
        margin:0 5px;
    }

`
const InputButtons = styled.div`
    width:100%;
    display:flex;
    padding-top:5px;
    margin-top:-5px;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
    border-radius:50px;
    button{
        margin:0 5px;
    }
`