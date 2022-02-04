import React, { useState } from 'react';
import style from '../styles/contador.module.css';


 function Accountant() {
   const [count, setCount] = useState(0);
   return (
     <div>
       <div  className={style.contador}>
      <button onClick={() => setCount(count - 1)}>
         -
       </button>
       <p>{count}</p>
       <button onClick={() => setCount(count + 1)}>
         +
       </button>
       </div>
     </div>
   );
 }

 export{Accountant}