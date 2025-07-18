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

    if(nombre.value.trim() === '' || apellido.value.trim() === '' || userName.value.trim() === '' || password.value.trim() === '' || passwordCheck.value.trim() === '') return Swal.fire({
        title: 'Algunos de los campos está vació, tenés que completarlos todos',
        icon: 'warning' 
    });

    const usersExist = localStorage.getItem('usersList');


    if(usersExist === null) {
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

    if(checkUserExists) {

        nombre.value = '';
        apellido.value = '';
        userName.value = '';
        password.value = '';
        passwordCheck.value = '';

        return Swal.fire({
        title: `El usuario '${user.userName}' ya se encuentra creado, utilice otro nombre de usuario`,
        icon: 'warning' 
    });
    }

    parsedData = [...parsedData, user];


    const jsonData = JSON.stringify(parsedData);
    
    localStorage.setItem('usersList',jsonData);

    Swal.fire({
        title: 'Usuario creado con éxito',
        icon: 'success'
    })
    
}