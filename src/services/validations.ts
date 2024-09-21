const regEx:any={
    "Required":{
        "pattern":/./,
        "message":"This field required"
        },
    "Email":{
        "pattern":/^[a-zA-z]{1}[a-zA-Z0-9_./]*@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/,
        "message":"Please enter email formate Ex: abc@gmail.com"
    },
    "Min5Char":{
        "pattern":/^[a-zA-Z0-9]{5,}$/,
        "message":"Min 5 Characters should be enter"
    },
    "Phone":{
        "pattern":/^[0-9]{10}$/,
        "message":"Please enter 10 digit mobile number"
    }
}
function validate(inputObj:any){
    inputObj.errorMsg="";
              for(let val of inputObj?.criteria){
                    const {pattern,message}=regEx[val];
                    if(!pattern.test(inputObj?.value)){
                        inputObj.errorMsg=message;
                        break;
                    }
              }
}
export function handleFieldLevel(eve:any,inputControls:any,setInputControls:any){
         const {name,value}=eve?.target;
         const clonedInputControlls = JSON.parse(JSON.stringify(inputControls))
         let inputObj :any= clonedInputControlls.find((obj:any)=>{
                return obj.name === name
              })
             
              inputObj.value=value;
              validate(inputObj)
              //inputObj.hasError=!value;
              
             setInputControls(clonedInputControlls)
}

export function handleFormLevel(inputControls:any, setInputControls:any){
    const clonedInputControlls= JSON.parse(JSON.stringify(inputControls))
    const dataObj: any= {}
    clonedInputControlls.forEach((obj: any)=>{
      dataObj[obj.name]=obj.value;
      //obj.hasError=!obj.value;
      validate(obj)
    })
    const isInValid = clonedInputControlls.some((obj:any)=>obj.errorMsg);
    setInputControls(clonedInputControlls)
    //if(isInValid){
     //setInputControls(clonedInputControlls)
     //return;
    //}
    return [isInValid, dataObj]
}