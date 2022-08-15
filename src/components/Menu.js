
//Style
import './Menu.css';


const Menu = ({setCaracter}) =>{ //Hook of radio value 
 

 

    return (

<div className='menu'>  {/*Choice Menu*/} 
<p>DE QUANTOS CARACTERES VOCÊ PRECISA?</p>

<div className='itensMenu'>
  
    <div className='six'>
    <input type = "radio"       //Radio input 
     className='check' 
     id = "" 
     name = "radio" 
     value = "6"
    onChange={(e)=>setCaracter(e.target.value)} // This event set the current radio value on state caracter   
     />
    <label > 6 CARACTRES </ label>
    </div>
  
    <div className='eight' >
    <input type = "radio"                      
    className='check'           //Radio input 
                 
     id = "" 
     name = "radio" 
     value = "8"
    onChange={(e)=>setCaracter(e.target.value)} // This event set the current radio value on state caracter 
    />
    <label > 8 CARACTRES </ label>
    
    </div>
</div>



</div>

 )

}


export default Menu;

