import React,{useState} from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from "@material-ui/icons/Add";
import sidebarItemsData from "./data/sidebarData.js";
import { IconButton } from '@material-ui/core';
import db from "./data/firebase";
import {useHistory} from "react-router-dom";


function Sidebar({channels,darkTheme}) {

    const history = useHistory();

    const [channelInputState,changeChannelInputState] = useState(false);
    const [channelInput,changeChannelInput] = useState('');

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const addChannel = (evt) => {
        evt.preventDefault();
        if(channelInput.trim() !== ''){
            db.collection('rooms').add({
                name:channelInput.trim()
            })
            changeChannelInput('')
        }
    }

    return (
        <Container darkTheme={darkTheme}>
            <WorkSpaceContainer>
                <Name>Chirag's</Name>
                <NewMessage darkTheme={darkTheme}>
                    <IconButton >
                        <AddCircleOutlineIcon style={{
                            color:'white',
                        }} />
                    </IconButton>
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {sidebarItemsData.map((item,index) => {
                    return(
                        <MainChannelItem darkTheme={darkTheme} key={index} >
                            {item.icons}
                            {item.text}
                        </MainChannelItem>
                    )
                })}
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer style={{marginBottom:channelInputState?'45px':''}}>
                    <div>
                        Channels
                    </div>
                    <IconButton onClick={()=>{changeChannelInputState(!channelInputState)}}>
                        <AddIcon style={{
                            
                            color:"white",
                        }} />
                    </IconButton>
                    <AddChannelContainer darkTheme={darkTheme} style={{display:channelInputState?'':'none'}} >
                        <AddChannel darkTheme={darkTheme}>
                            <input 
                                type="text" 
                                placeholder="search..." 
                                value={channelInput}
                                onChange={(evt)=>{changeChannelInput(evt.target.value)}}
                            ></input>
                        </AddChannel>
                        <button type="submit" style={{display:"none"}} onClick={addChannel} ></button>
                    </AddChannelContainer>
                </NewChannelContainer>
                <ChannelList>
                    {channels.map((channel,i) => {
                        return (
                            <Channel darkTheme={darkTheme} key={i} onClick={() =>{goToChannel(channel.id)}} >
                                # {channel.name}
                                

                            </Channel>
                            
                        )
                    })}
                    
                </ChannelList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background:${props => props.darkTheme?"#16213e":"#3f0e40"};
    margin:0;
    overflow:hidden;

`

const WorkSpaceContainer = styled.div`
    color:white;
    height:64px;
    display:flex;
    align-items:center;
    padding:0 20px;
    justify-content:space-between;
    border-bottom: 1px solid #532753;
`
const Name = styled.div``

const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:{props=>props.darkTheme?"":"white"};
    color:{props => props.darkTheme?"white":"#3f0e40"} !important;
    fill: #3f0e48;
    display:flex;
    justify-content-center;
    align-items: center;
    justify-content:center;
    border-radius:50%;

`


const MainChannels = styled.div`
    max-height:30vh;
    padding-top:20px;
    overflow-y:auto;
`
const MainChannelItem = styled.div`
    color:rgb(188,171,188);
    display:grid;
    grid-template-columns:15% auto;
    height:30px;
    padding-left:20px;
    align-items: center;
    cursor: pointer;
    :hover{
        background:${props => props.darkTheme?"#1a1a2e":"#350d36"};
    }

`
const ChannelsContainer = styled.div`
    color:rgb(188,171,188) !important;
    margin-top:10px;
`
const NewChannelContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:28px;
    padding:0 18px;
    align-items: center;
    position:relative;
`
const AddChannelContainer = styled.form`
    position:absolute;
    top:30px;
    left:0;
    padding:5px;
    padding-right:20px;
`
const AddChannel = styled.div`
    
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
        box-shadow: 0px 0px 3px 2px #811282;
    }
`
const ChannelList = styled.div`
    max-height:40vh;
    overflow-y:auto
`
const Channel = styled.div`
    height:20px;
    display:flex;
    align-items:center;
    padding:4px 20px;
    cursor: pointer;
    
    :hover{
        background:${props => props.darkTheme?"#1a1a2e":"#350d36"};
       
    }
`





