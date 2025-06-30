import { getElem } from "./getElem.js";

export const createUser = e => {

    e.preventDefault();    
    const inputs = {
        nombre: getElem('#nombre'),
        apellido: getElem('#apellido'),
        userName: getElem('#nombre-usuario'),
        password: getElem('#contraseña'),
        passwordCheck: getElem('#repita-contraseña')
    }

    const { nombre, apellido, userName, password, passwordCheck } = inputs;

    if(nombre.value.trim() === '' || apellido.value.trim() === '' || userName.value.trim() === '' || password.value.trim() === '' || passwordCheck.value.trim() === '') return alert('Algunos de los campos está vació, tenés que completarlos todos')



    if(localStorage.length === 0) {
        localStorage.setItem('usersList', '[]');
    }

    const storageData = localStorage.getItem('usersList');
    let parsedData = JSON.parse(storageData);

    const newId = parsedData.length + 1;

    const user = {
        id: newId,
        name: nombre.value,
        surName: apellido.value,
        userName: userName.value,
        password: password.value,
        favorites: []
    }

    const checkUserExists = parsedData.find(elem => elem.userName.includes(user.userName));

    if(checkUserExists) return alert(`El usuario '${user.userName}' ya se encuentra creado, utilice otro nombre de usuario`)

    parsedData = [...parsedData, user];


    const jsonData = JSON.stringify(parsedData);
    
    localStorage.setItem('usersList',jsonData);

    alert(`Se creo el usuario: ${user.userName}`);
    
}