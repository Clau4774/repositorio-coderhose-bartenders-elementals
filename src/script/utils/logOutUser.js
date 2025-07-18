export const logOutUser = () => {
        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('userLogged', '');
        Swal.fire({
            title: 'Ha cerrado su cuenta de manera exitosa',
            icon: 'success'
        }).then(() => window.location.reload());
        
    }