import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}
export default App;




