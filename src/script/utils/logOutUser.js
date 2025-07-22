export const logOutUser = () => {
        const getLoggedUser = JSON.parse(localStorage.getItem('userLogged'));
        const getUsersList = JSON.parse(localStorage.getItem('usersList'));
        const updatedUsersList = getUsersList.map(user => user.id === getLoggedUser.id ? user = {...getLoggedUser} : user)

        console.log(updatedUsersList)

        localStorage.setItem('usersList', JSON.stringify(updatedUsersList));

        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('userLogged', '');

        Swal.fire({
            title: 'Ha cerrado su cuenta de manera exitosa',
            icon: 'success'
        }).then(() => window.location.reload());
        
    }