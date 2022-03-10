$(function(){
////////////////// CLASE CONSTRUCTORA PARA LOGIN LA PLATAFORMA
    class Plataforma{
        constructor(email, contraseña, emailLogin, contraseñaLogin, loginData){
            this.email = email;
            this.contraseña = contraseña;
            this.loginData = loginData;
        }
    }

    const inicioSesion = new Plataforma();
    
////////////////// EVENTO LOGIN
    
    $('.btn-ingresar').click(function(e){
    
        inicioSesion.loginData = {
            'emailLogin': $('#emailLogin').val(),
            'contraseñaLogin': $('#contraseñaLogin').val()
        };

        userEmail = JSON.parse(localStorage.getItem('datosUsuario'));
        inicioSesion.email = userEmail.email;
        console.log(inicioSesion.email);

        inicioSesion.contraseña = JSON.parse(localStorage.getItem('contraseñaGenerada'));
        console.log(inicioSesion.contraseña.contraseña);

        if (inicioSesion.email == inicioSesion.loginData.emailLogin && inicioSesion.contraseña.contraseña == inicioSesion.loginData.contraseñaLogin) {
            alert("Inicio de sesion exitoso!!!");
        } else {
            alert("El email o la contraseña no coinciden. Vuelva a intentarlo");
        }
    
        e.preventDefault()
    });
});