import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from "@material-ui/icons/Add";
import sidebarItemsData from "./data/sidebarData.js";
import channelData from "./data/channelData.js";

function Sidebar({darkTheme}) {
    return (
        <Container darkTheme={darkTheme}>
            <WorkSpaceContainer>
                <Name>Chirag's</Name>
                <NewMessage darkTheme={darkTheme}>
                    <AddCircleOutlineIcon />
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
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelList>
                    {channelData.map((channel,i) => {
                        return (
                            <Channel darkTheme={darkTheme} key={i}>
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
    color:{props => props.darkTheme?"white":"#3f0e40"};
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
    color:rgb(188,171,188);
    margin-top:10px;
`
const NewChannelContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:28px;
    padding:0 18px;
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





