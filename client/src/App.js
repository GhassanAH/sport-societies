import React from 'react';
import WorldMap from './components/worldcup/map'
import Round16 from './components/worldcup/round16';
import Round8 from './components/worldcup/round8';
import Round4 from './components/worldcup/round4';
import Final from './components/worldcup/final';
import Summary from './components/worldcup/summary';
import Home from './components/worldcup/home';
import Header from './components/header';
import Footer from './components/footer';
import Aboutspw from './aboutspw';
import Landing from './landing';
import League from './components/leagues/League'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './css/home.css'

function App() {
  return (
      <div className="wrapper" >
            <Header/>
            <div className="main">
               <BrowserRouter>
                  <Routes>
                        <Route exact path="/" element={<Landing/>}></Route>
                        <Route exact path="/worldcupHome"  element={<Home/>}></Route>
                        <Route  path="/groupsStage"  element={<WorldMap/>}></Route>
                        <Route exact path="/round16"  element={<Round16/>}></Route>
                        <Route exact path="/round8"  element={<Round8/>}></Route>
                        <Route exact path="/round4"  element={<Round4/>}></Route>
                        <Route  path="/final"  element={<Final/>}></Route>
                        <Route  path="/summary"  element={<Summary/>}></Route>
                        <Route  path="/aboutpage1"  element={<Aboutspw/>}></Route>
                        <Route  path="/league/:id"  element={<League/>}></Route>
                  </Routes>
               </BrowserRouter>
            </div>
            <a id="scrollUp" href="#top"></a>           
            <Footer/>
      </div>


  );
}

export default App;
