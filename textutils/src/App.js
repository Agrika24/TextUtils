// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')//Wheter the dark mode is enable or not
 const  [alert, setAlert] = useState(null);

 const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
 }
//  const removeBodyClasses = ()=>{
//    document.body.classList.remove('bg-light')
//    document.body.classList.remove('bg-dark')
//    document.body.classList.remove('bg-success')
//    document.body.classList.remove('bg-danger')
//    document.body.classList.remove('bg-warning')
//    document.body.classList.remove('bg-primary')
   
//  }
  const toggleMode = ()=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#152353';
      showAlert("Dark Mode has been enabled","success");
      document.title = "Textutils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = "Textutils - Light Mode"
    }

   
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils" mode ={mode} toggleMode={toggleMode} aboutText="About" />
    <Alert alert={alert}/> 
    <div className="container" my-3>
    <Switch>
      <Route exact path="/about">
      <About mode={mode}/>
            
      </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          
          </Route>
    </Switch>
    </div>
    </Router>   
    </>
  );


}


export default App;
