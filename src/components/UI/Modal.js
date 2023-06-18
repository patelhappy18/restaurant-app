import styles from "./Modal.module.css";
import { Fragment, useState } from "react";
import ReactDOM, { unstable_batchedUpdates }  from "react-dom";

const Backdrop = props =>{
    return <div className={styles.backdrop}></div>

}

const ModalOverlay = props =>{
    return (
    <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');



const Modal = props =>{

   
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
       
    </Fragment>

    
}

export default Modal;