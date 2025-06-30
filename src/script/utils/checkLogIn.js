import { getElem } from "./getElem.js"

export const checkLogIn = elem => {
    const inputUserName = getElem('#user-login-name');
    const inputPassword = getElem('#user-login-password');

    const userNameValue = inputUserName.value;
    const passwordValue = inputPassword.value;

    if(userNameValue.trim() === '' || passwordValue.trim() === '') return alert("Tiene que completar los campos");

    if(localStorage.length === 0) return alert('Al parecer aun no hay usuarios');

    const localStorageData = JSON.parse(localStorage.getItem('usersList'));

    const checkUserLog = localStorageData.find(elem => elem.userName === userNameValue && elem.password === passwordValue);

    if(!checkUserLog) return alert('No se ha encontrado el usuario');

    alert(`Usuario '${userNameValue}' validado correctamente`);
    
    inputUserName.value = '';
    inputPassword.value = '';

    return checkUserLog;
}