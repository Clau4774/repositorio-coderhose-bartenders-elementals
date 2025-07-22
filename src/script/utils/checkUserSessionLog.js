import { logUser } from "./logUser.js";

export const checkUserSessionLog = () => {
    const userIsLogged = localStorage.getItem('isLogged');

    if(userIsLogged === 'true') {
        const userLog = localStorage.getItem('userLogged');
        const parseUser = JSON.parse(userLog)
       logUser(parseUser);
       return true;
    }

    return false;
}