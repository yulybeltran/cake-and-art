import React from "react";
import style from "../styles/category.module.css";


function Category () {

  


  return (
    <div className={style.category}>
      <div className={style.categories}>
        <button ><img
          src="https://drive.google.com/uc?export=download&id=12nGsPNOO2mgEGG-wymIIq3N3RDsV1H9R"
          alt="Imagen Gallery"
        /></button>
        <h2>Buttercream</h2>
      </div>

      <div className={style.categories}>
      <button>
        <img
          src="https://drive.google.com/uc?export=download&id=1O95-q9tMBpaigYTClpSK47tZlfXXiiP5"
          alt="Imagen Gallery"
        /></button>
        <h2>Fondant Planas</h2>
      </div>
      <div className={style.categories}>
      <button>
        <img
          src="https://drive.google.com/uc?export=download&id=1yNrMeI2PTLlm_kTmKhtKqdswpfYqLJCr"
          alt="Imagen Gallery"
        /></button>
        <h2>Fondant 3D</h2>
      </div>

      <div className={style.categories}>
      <button>
        <img
          src="https://drive.google.com/uc?export=download&id=1tAqvZMHRNZ6Lkknqp4mkgOZovpKpbm88"
          alt="Imagen Gallery"
        /></button>
        <h2>Tortas 3D</h2>
      </div>
    </div>
  );
}

export { Category };
