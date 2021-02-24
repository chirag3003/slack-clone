import React, { useState } from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {

  const [darkTheme,changeDarkTheme] = useState(false);
  function changeTheme(){
    changeDarkTheme(!darkTheme)
  }


  return (
    <div className="App">
      <Router>
        <Container >
          
          <Header darkTheme={darkTheme} changeTheme={changeTheme} />

          <Main >
            <Sidebar darkTheme={darkTheme} />
              
              
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