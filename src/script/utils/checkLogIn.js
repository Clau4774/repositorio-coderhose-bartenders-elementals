import { getElem } from "./getElem.js"
import { logUser } from "./logUser.js";

export const checkLogIn = () => {

    const inputUserName = getElem('#user-login-name');
    const inputPassword = getElem('#user-login-password');

    const userNameValue = inputUserName.value;
    const passwordValue = inputPassword.value;

    if(userNameValue.trim() === '' || passwordValue.trim() === '') return alert("Tiene que completar los campos");

    const hasUsers = localStorage.getItem('usersList');

    if(hasUsers === null) return alert('Al parecer aun no hay usuarios');

    const localStorageData = JSON.parse(localStorage.getItem('usersList'));

    const checkUserLog = localStorageData.find(elem => elem.userName === userNameValue && elem.password === passwordValue);

    if(!checkUserLog) {
        inputUserName.value = '';
        inputPassword.value = '';
        return alert('No se ha encontrado el usuario');
    }

    logUser(checkUserLog);

    alert(`Usuario '${userNameValue}' validado correctamente`);
    
    inputUserName.value = '';
    inputPassword.value = '';

    return checkUserLog;
}