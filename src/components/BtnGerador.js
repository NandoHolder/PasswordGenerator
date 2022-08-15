

//style
import './btnGerador.css';



const BtnGerador = ({getPassword}) =>{ //hook for get the next stage and show up the password component
 return (

<div className='btnGerador'>

<button className='button' onClick={getPassword}>GERAR SUA SENHA</button> {/*Event of button for get the password*/}

</div>

 );

};



export default BtnGerador;
