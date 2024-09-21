import React from "react";
import styles from "./Input.module.css"
export const Input=({labelName,type,name,id,placeholder,errorMsg,handleChange,hasError,isRequired,value }: any)=>{
    return (<>
        <div className="mb-2">
            <label className={`control-label ${styles.labelNames}`}>{labelName} {isRequired && <span className="text-danger">*</span>}</label>
            <input type={type} className={`form-control ${styles.labelinput}`} name={name} id={id} placeholder={placeholder} onChange={handleChange} />
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
        </div>
           
    </>)
}