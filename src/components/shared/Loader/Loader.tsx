import React from "react";
import styles from "./Loader.module.css"
import Image from "next/image";
 export const Loader =()=>{
    return (<>
            <div className={styles?.loader}></div>
            <Image src="/loader.gif" alt="load" width={150} height={150} className={styles?.loaderImg}/>
    </>)
 }