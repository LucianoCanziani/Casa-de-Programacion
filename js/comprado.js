$(function () {
////////////////////////////// RECOGE DATOS DE LOCALSTORAGE PARA DAR UNA SALIDA PERSONALIZADA EN BASE AL CURSO ELEGIDO

    let datosCursoParseado = [], datosCursoParseado2 = [];

    datosCursoParseado = JSON.parse(localStorage.getItem('datosCursoMostrar'));
    $("#cursoElegido").text(datosCursoParseado.curso);

    datosCursoParseado2 = JSON.parse(localStorage.getItem('datosUsuario'));
    $("#email").text(datosCursoParseado2.email);

////////////////////////////// GENERA CONTRASEÑA PARA EL USUARIO

    let contraseña = JSON.parse(localStorage.getItem('contraseñaGenerada'));

    if (contraseña == null) {

        let contraseñaGeneradaa = {
            'contraseña': Math.trunc(Math.random() * 100000000) * 1777
        };

        localStorage.setItem('contraseñaGenerada', JSON.stringify(contraseñaGeneradaa));

        $("#contraseñaGenerada").text(contraseñaGeneradaa.contraseña);

    } else {
        contraseña = JSON.parse(localStorage.getItem('contraseñaGenerada'));
        $("#contraseñaGenerada").text(contraseña.contraseña);
    }

    ////////////////////////////// INGRESO A LA PLATAFORMA

    $('#plataforma').click(function () {
        window.location.href = "../plataforma/ingresar.html";
    });
});
