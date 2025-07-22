
import { getElem } from "./getElem.js"
import { logUser } from "./logUser.js";

export const checkLogIn = () => {

    const inputUserName = getElem('#user-login-name');
    const inputPassword = getElem('#user-login-password');

    const userNameValue = inputUserName.value;
    const passwordValue = inputPassword.value;

    if(userNameValue.trim() === '' || passwordValue.trim() === '') return Swal.fire({
        title: "Tienes que completar los campos",
        icon: "warning"
    });

    const hasUsers = localStorage.getItem('usersList');
    
    if(hasUsers === null) return Swal.fire({
        title: 'Al parecer aun no hay usuarios',
        icon: 'warning'
    })

    const localStorageData = JSON.parse(localStorage.getItem('usersList'));

    const checkUserLog = localStorageData.find(elem => elem.userName === userNameValue && elem.password === passwordValue);

    if(!checkUserLog) {
        inputUserName.value = '';
        inputPassword.value = '';
        return Swal.fire({
            title: 'No se ha encontrado el usuario',
            icon: 'error'
        })
    }

    logUser(checkUserLog);

    Swal.fire({
        title: `Usuario '${userNameValue}' validado correctamente`,
        icon: 'success'
    }).then(() => window.location.reload());
    
    inputUserName.value = '';
    inputPassword.value = '';

    return checkUserLog;
}