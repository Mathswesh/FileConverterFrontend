import { myaxios } from "./helper";

export const signup=(user) => {
    return myaxios.post("/user/savedata",user)
    .then((response)=>response.data)
}

export const upload=(upload) => {
    return myaxios.post("/converter/upload",upload)
    .then((response)=>response.data)
}
