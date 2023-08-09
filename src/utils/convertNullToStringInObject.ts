export const convertNullToStringInObject = (obj:any)=>{
    for(let key in obj){
        if(obj[key]===null){
            obj[key]=''
        }
        if(typeof obj[key]==='object'){
            convertNullToStringInObject(obj[key])
        }
    }
    return obj
}