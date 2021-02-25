import React, { useState,useEffect } from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./components/data/firebase";

function App() {

  const [darkTheme,changeDarkTheme] = useState(false);
  function changeTheme(){
    changeDarkTheme(!darkTheme)
  }

  const [rooms,setRooms] = useState([]);
  console.log(rooms);
  const getChannels = () => {
    console.log("this is running")
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          name:doc.data().name
        }
      }))
    })
  }
  
  
  useEffect(() => {
    console.log("use runs")
    
    getChannels();
  },[])


  return (
    <div className="App">
      <Router>
        <Container >
          
          <Header darkTheme={darkTheme} changeTheme={changeTheme} />

          <Main >
            <Sidebar channels={rooms} darkTheme={darkTheme} />
              
              
              <Switch>
                <Route path="/room">
                  <Chat darkTheme={darkTheme}/>
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>


          </Main>
          
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:grid;
  grid-template-rows:50px auto;

`

const Main = styled.div`
  display:grid;
  grid-template-columns:270px auto;
`