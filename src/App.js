import React, { useState,useEffect } from "react"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import NoChat from "./components/NoChat";
import Login from "./components/Login";
import styled from "styled-components"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./components/data/firebase";
import {auth,provider} from "./components/data/firebase"


function App() {

  let theme=true;
  if(localStorage.getItem('theme')){
    theme = JSON.parse(localStorage.getItem('theme')).darkTheme;
  }
  const [darkTheme,changeDarkTheme] = useState(theme);
  function changeTheme(){
    localStorage.setItem('theme',JSON.stringify({
      darkTheme:!darkTheme,
    }))
    changeDarkTheme(!darkTheme)
  }

  const [user,changeUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log(user)

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.clear()
      changeUser(false)
    })
    
  }
  
  const [rooms,setRooms] = useState([]);


  
  const getChannels = () => {
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
    
    getChannels();
  },[])

  return (
    <div className="App">
      <Router>
        <Container >
          {!user?<Redirect to="/" />:null }
          

          
              
              
          <Switch>
            <Route path="/room/:channelId">
              <Header signOut={signOut} darkTheme={darkTheme} changeTheme={changeTheme} user={user}/>
              <Main >
                <Sidebar channels={rooms} darkTheme={darkTheme} />
                <Chat darkTheme={darkTheme} user={user} />
              </Main>
            </Route>


            <Route path="/room">
            <Header signOut={signOut} darkTheme={darkTheme} changeTheme={changeTheme} user={user}/>
              <Main >
                <Sidebar channels={rooms} darkTheme={darkTheme} user={user}  />
                <NoChat darkTheme={darkTheme} />
              </Main>
            </Route>


            <Route path="/">
              {user?<Redirect to="/room" />:null}
              <Login changeUser={changeUser} />
            </Route>
          </Switch>


          
          
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
  grid-template-rows:50px minmax(0,1fr);

`

const Main = styled.div`
  display:grid;
  grid-template-columns:270px minmax(0,1fr);
  heigh:100%;
`