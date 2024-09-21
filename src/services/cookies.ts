import { getDate } from "./functions";
import { getCookieObj } from "./functions";
import { getPrevioustDate } from "./functions";
export class AppCookies {

    static setCookie(key:string,value:string,days:number){
        if(days){
            document.cookie=`${key}=${value};expires=${getDate(days)}`;
        }
        else{
                document.cookie=`${key}=${value}`;
        }
    }
    static getCookie(key:string){
       const cookieObj=getCookieObj();
       return cookieObj[key]

    }
    static getAllCookies(){
        return getCookieObj()
    }
    static deleteCookie(key:string){
        document.cookie=`${key}=;expires=${getPrevioustDate()}`;
    }
    static deleteAllCookies(){
        const cookieObj=getCookieObj();
        for(const key in cookieObj){
            document.cookie=`${key}=;expires=${getPrevioustDate()}`;
        }
        
    }
    static isUserLoggedIn() {
        const { userId } = getCookieObj()
        return userId ? true : false
    }
}
