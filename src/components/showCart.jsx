import {background} from './showCart.module.css';


export default function ShowCart({name,age}){
  
    return(
       
      <><div className={background}><p>{name }</p>
      <p>{age}</p>
        </div>
      
        </>
    );
  }
  
  