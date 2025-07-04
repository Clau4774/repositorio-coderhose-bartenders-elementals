import { createUserMenuLog } from "./createUserMenuLog.js";

export const logUser = (user = undefined) => {    
    localStorage.setItem('isLogged', 'true');
    if(user){
        localStorage.setItem('userLogged', JSON.stringify(user));
        return createUserMenuLog(user);
    }

    const currentUser = localStorage.getItem('userLogged');
    const parsedUser = JSON.parse(currentUser);
    
    return createUserMenuLog(parsedUser);
}