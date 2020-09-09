import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.jpg'
import Header2 from './components/Header2.jpg'
import Logo from './components/Logo.png'
import Logo2 from './components/Logo2.png'
import Top from './components/top.jpg'
import Middle from './components/mid.jpg'
import Bottom from './components/bottom.jpg'
import Footer from './components/Footer.jpg'




//add a header and an image?
function App() {
  return (
    <div className="App">
      {/* Header  */}
      <div style={{position:"relative", display:"flex", margin:0, padding:0, width:"80%", marginLeft:"auto", marginRight:"auto"}}>
        <img src={Header2} style={{position:"relative", top:"0", left:"0", width:"100%",margin:0, padding:0}}/>
        <img src={Logo2} style={{position:"absolute",left:"0",bottom:"0", marginLeft:"2%",marginBottom:"1%", borderRadius:"5px", padding:"0", width:"25%"}}/>

      </div>
{/*
        <div>
          <img src={Top} className="headerpic" style={{margin:"0", padding:"0", display:"block", position:"relative", top:"0", left:"0" }}/>
          <img src={Logo2} style={{position:"absolute",left:"0",bottom:"0", marginLeft:"10%",marginBottom:"10px", borderRadius:"5px"}}/>
        </div>
        <img src={Middle} style={{margin:"0", padding:"0", display:"block", opacity:"0.4"}}/>
        <img src={Bottom} style={{margin:"0", padding:"0", display:"block", opacity:"0.4"}}/>

        This works
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" style="width:80%;  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.4)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));">
      
*/}
    
    {/*content */}
      <div style={{ width: "80%", backgroundColor: "#8AA7CC" , marginLeft:"auto", marginRight:"auto", display:"flex"}}>
        <div className="block" >
          What would you like to do?
        </div>
        <div style={{padding:"10px"}}>
          <BrowserRouter>
            <Switch>
              <Route path='/transfer' component={Transfer} />
              <Route path='/deposit' component={Deposit} />
              <Route path='/withdraw' component={Withdraw} /> 
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Welcome} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
      {/*}
      <div>
lksjdlkdfj<br/>
        text<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
      </div>
*/}
    {/*Footer*/}
    <div style={{bottom:0 , position:"fixed",width:"80%", marginLeft:"10%", marginBottom:0, padding:0, display:"flex"}}>
      <img src={Footer} style={{width:"100%", margin:0, padding:0}}/>
      <div style={{position:"absolute",left:"0",top:"0", marginLeft:"5%",marginBottom:"1%", borderRadius:"5px", padding:"0", width:"25%"}}>

        <table style={{color:"white", fontSize:"0.5em"}}>
          <tr> <a href= "https://github.com/Donkey-Kong-and-M-Ms"> GitHub</a></tr>
          <tr>Front-End</tr>
          <tr>test</tr>
          <tr>Back-End</tr>
          <tr>test</tr>

        </table>

      </div>
    </div>



    </div>





  
  );
}

export default App;
