import { myaxios } from "./helper";

export const signup=(user) => {
    return myaxios.post("/user/savedata",user)
    .then((response)=>response.data)
}