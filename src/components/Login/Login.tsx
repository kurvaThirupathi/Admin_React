
import { apptxt } from "@/context/appCtx";
import React, { useContext,useState } from "react";
import styles from './Login.module.css';
import { Input } from "@/components/shared/Input";
import  config  from "./config.json";
import { handleFieldLevel, handleFormLevel} from "@/services/validations";
import axios from "axios";
import Ajax from "@/services/ajax";
import { updateStoreData } from "@/services/functions";
import { AppCookies } from "@/services/cookies";
const loginBody={
  backgroundImage: "URL(images/bg.jpg)",
 backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight:"100vh"
  

}
export const Login =()=>{
   
   
   const [inputControls, setInputControls]=useState(config);
    //const context=useContext(apptxt);
    const {dispatch}=useContext(apptxt);

    const btnLogin= async ()=>{
     //  alert("jjj");
     try{

     
     const [isInValid, data]:any=handleFormLevel(inputControls, setInputControls)
      if(isInValid) return;
      updateStoreData(dispatch,"LOADER",true)
      
       const res= await Ajax.post("auth/login",{data})
       
      if(res?.data?.length>0){
        updateStoreData(dispatch,"LOGIN",true)
            const { _id, userId } = res?.data?.[0] || {}
            AppCookies.setCookie("id", _id, 0)
            AppCookies.setCookie("userId", userId, 0)   
      }
      else{
       // alert("Please enter details")
        updateStoreData(dispatch, 'TOASTER', {
            isShowToaster: true,
            toasterMsg: 'Check ented uid or pwd',
            color: 'red'
         })
      }
    }
    catch(ex){

    }
    finally{
      updateStoreData(dispatch,"LOADER",false)
      
    }
        
    }
     const handleChange=(eve:any)=>{
        handleFieldLevel(eve,inputControls,setInputControls)
 }
    return (
    <div style={loginBody}>
        <section className={styles?.loginSection}>
        <div className="container-fluid p-3">
        <div className="row">
      <div className={`col-lg-5 ${styles?.loginFormData}`}>
       <div className="mt-3">
         <h3>Login</h3>
       </div>
       <div className="mt-4">
         <form>
          {
            inputControls.map((obj)=>{
              return <Input {...obj} key={obj.id} handleChange={handleChange}/>
            })
          }
          
         
           <div className="buttonWidth">
             <button type="button" className={`btn  btn-sm form-control ${styles?.btnView}`} onClick={btnLogin}>LOGIN</button>
           </div>

         </form>
       </div>
      </div>
      <div className="col-lg-5 offset-lg-1 mt-2">
       <img src="images/login.png" className="w-100" alt="img"/>
      </div>
      
    </div>
    
  </div>
  </section>
    </div>
    )
}