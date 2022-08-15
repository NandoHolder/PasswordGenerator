
//Style
import './Password.css';
//Reload image 
import reload from '../images/reload.png';


const Password = ({caracter,retry,}) =>{ //hooks
    //Random generator 
    let result = '';
    let length=(caracter); //This hook pass the radio value for lenght 
    let chars="0123489abcdefghijklmnopqrs567tuvwxyzABCDEFGHIJ<:{}[]LMNOPQRSTUVWXYZ!@#$%^&*()+?>";
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    if(result < 6){                                  //catch unspect value 
      alert('Escolha a quantidade de caracteres.') 
        retry()
    }
    //console.log({result});
 
   //function for copy password (button copy) 
    const copy =(text)=> {
        navigator.clipboard.writeText(text)
      }
 
 return (


<div className='password'>

    <p>Prontinho! Sua senha é:</p>

    <h2>{result}</h2>       {/* show the result of random generator */}

    <button className='button' onClick={() => copy(result)}>COPIAR SENHA</button>   {/*copy value button */}

  <div>

    <button className='noclass'><img src={reload} onClick={() => retry()} className='reload' alt="logo" /></button>   {/*reload button*/}

  </div>

</div>

 )

}


export default Password;
