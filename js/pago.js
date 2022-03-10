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

    ////////////////////////////// CIERRA y ABRE OPCIONES DE PAGO

    $(".metodo-pago").on('click', function (e) {
        $('.metodo-pago-seleccionado').hide();
        $(e.currentTarget).children('.metodo-pago-seleccionado').toggle();
    });

    ////////////////////////////// RECOGE DATOS DE TARJETA DE CREDITO Y LOS ASIGNA A VARIABLES PARA SU COMPENSASION CON LAS ENTIDADES CORRESPONDIENTES
    ////////////////////////////// NO SE SUBE A LOCALSTORAGE AL SER DATOS SENSIBLES

    $('.confirmPurchase').click(function (e) {
        window.location.href = "comprado.html";
        e.preventDefault();
    });
    $('.btn-atras').click(function (e) {
        window.location.href = "datos.html";
        e.preventDefault();
    });
});