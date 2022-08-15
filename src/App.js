//Style
import './App.css';
import logo from './images/rabbit.png'
import heart from './images/heart.png'
//Components
import Menu from './components/Menu';
import BtnGerador from './components/BtnGerador';
import Password from './components/Password';

//Hook
import { useState } from 'react';


//Aplication stages
const stages = [
  {id: 1 , name:"start" },
  {id:2, name:"senha"},
];



function App() {

//Initial Stage 
  const[appStage, setAppStage] = useState(stages[0].name);

//State initial value of radio
  const [caracter, setCaracter] = useState(0)

//Set the next stage  
const getPassword = () => {
  setAppStage(stages[1].name)
}

//Reload for initial stage
const retry = () =>{
  setAppStage(stages[0].name)
  setCaracter(0)
}


return (
    <div className='container'>
    <div className="App">
      
       <h1 className="h1">YOUSAFE</h1>
       
       <div className='basetext'>
       
           <p>As melhores senhas pra você </p>
           <img className="img" alt="Heart" src={heart}/>
          
       </div>
     
     {/*Conditional of first stage*/} 
    {appStage === 'start' && <><Menu setCaracter={setCaracter}/>  <BtnGerador getPassword={getPassword}/> </>}
    
    {/*Conditional of second stage */}
    {appStage === 'senha' && <> <Menu/>  <BtnGerador getPassword={getPassword}/> <Password caracter={caracter} retry={retry} getPassword={getPassword}/></>}
     
   
          </div>
          <img src={logo}  className="logo" alt="logo" />
  </div>
  
  );
}

export default App;
