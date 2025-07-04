export const logOutUser = () => {
        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('userLogged', '');
        alert('A cerrado sesión.')
        window.location.reload();
    }