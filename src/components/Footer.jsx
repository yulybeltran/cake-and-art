import style from "../styles/footer.module.css"
 
function Footer() {
    return(

        <div>
        <div className={style.footer}>
        <a className="appWhatsapp" href="https://instagram.com/cakeandartec?utm_medium=copy_link" target="_blank" rel="noreferrer"><img   src="https://drive.google.com/uc?export=download&id=14cWCMUDp37bQZRFfgCkkgDJuBTO5bl8t" alt="Instagam" /></a>
        <a href="https:///api.whatsapp.com/send?phone=[593 98 982 5141]" target="_blank" rel="noreferrer"> <img  src="https://drive.google.com/uc?export=download&id=1XhrmH1nna8YDUkxgI3yzGpavtM712XUI" alt="Watssapp" /></a> 
        <a href="https://www.facebook.com/cakeandartec/" target="_blank" rel="noreferrer"><img  src="https://drive.google.com/uc?export=download&id=1MR9FZC99PcFm1mgxl9Nr6UWDtDtNgnu5" alt="Facebbok" /></a> 
       </div>

       <h1 className={style.direction}>Dirección: Cdla Los Esteros Mz 14A Villa 40 <br></br>
            Guayaquil - Ecuador</h1>
       <div  className={style.footerCopy}>&copy; Cake & Art - Todos los Derechos Reservados</div>
       </div>
    )
}

export {Footer}