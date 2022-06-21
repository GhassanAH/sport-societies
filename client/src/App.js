import React from 'react';
import WorldMap from './components/map'
import Round16 from './components/round16';
import Round8 from './components/round8';
import Round4 from './components/round4';
import Final from './components/final';
import Summary from './components/summary';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './css/home.css'

function App() {
  return (
      <div className="wrapper" >
            <Header/>
            <div className="main">
               <BrowserRouter>
                  <Routes>
                        <Route exact path="/"  element={<Home/>}></Route>
                        <Route  path="/groupsStage"  element={<WorldMap/>}></Route>
                        <Route exact path="/round16"  element={<Round16/>}></Route>
                        <Route exact path="/round8"  element={<Round8/>}></Route>
                        <Route exact path="/round4"  element={<Round4/>}></Route>
                        <Route  path="/final"  element={<Final/>}></Route>
                        <Route  path="/summary"  element={<Summary/>}></Route>
                  </Routes>
               </BrowserRouter>
            </div>
            <Footer/>
      </div>


  );
}

export default App;
