$(function () {

////////////////////////////// RECOGE DATOS DE LOCALSTORAGE PARA DAR UNA SALIDA PERSONALIZADA EN BASE AL CURSO ELEGIDO

    let datosCursoParseado = [], infoCurso = [], datosCursoParseado2 = [];

    if (localStorage.getItem('datosCurso') != null) {

        datosCursoParseado = JSON.parse(localStorage.getItem('datosCurso'));

        localStorage.setItem('datosCursoMostrar', JSON.stringify(datosCursoParseado));

    }

    infoCurso = JSON.parse(localStorage.getItem('datosCurso2'));

    $("#cursoElegido").text(infoCurso.curso);
    $("#precio").text(infoCurso.precio);

    datosCursoParseado2 = JSON.parse(localStorage.getItem('fechaYhorario'));

    $("#duracion").text(datosCursoParseado2.duracion);
    $("#dias").text(datosCursoParseado2.dias);
    $("#horarios").text(datosCursoParseado2.horarios);

    ////////////////////////////// RECOGE DATOS PERSONALES DEL USUARIO Y LOS SUBE AL LOCALSTORAGE

    $('.btn-siguiente').click(function (e) {

        const userData = {
            'nombre': $('#nombre').val(),
            'apellido': $('#apellido').val(),
            'email': $('#email').val(),
            'telefono': $('#telefono').val(),
            'dni': $('#dni').val(),
            'provincia': $('#provincia').val(),
            'tributo': $('#condicionTributaria').val(),
            'term': $('#term').val()
        };

        localStorage.setItem('datosUsuario', JSON.stringify(userData));

        window.location.href = "pago.html";
        e.preventDefault()

    });

    ////////////////////////////// VUELVE HACIA ATRAS

    $('.btn-atras').click(function (e) {

        window.location.href = "plan-pago.html";
        e.preventDefault()

    });
});