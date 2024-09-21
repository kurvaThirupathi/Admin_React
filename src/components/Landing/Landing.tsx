import React, { useContext } from "react";
import { Home } from "../Home";
import { Login } from "../Login";
import { apptxt } from "@/context/appCtx";
export const Landing=()=>{
        const {state}=useContext(apptxt)
    return (
        <div>
            {state?.isLoggedIn?<Home />:<Login />}
        </div>
    )
}