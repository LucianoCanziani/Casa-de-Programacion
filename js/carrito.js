$(function () {

////////////////////////////// RECOGE DATOS DE LOCALSTORAGE PARA DAR UNA SALIDA PERSONALIZADA EN BASE AL CURSO ELEGIDO

        let infoCurso = [], infoCurso2 = [];
/*
        if (localStorage.getItem('datosCurso') != null) {

                datosCursoParseado = JSON.parse(localStorage.getItem('datosCurso'));

                localStorage.setItem('datosCursoMostrar', JSON.stringify(datosCursoParseado));

        }*/

        infoCurso = JSON.parse(localStorage.getItem('datosCursoMostrar'));

        $("#cursoElegido").text(infoCurso.curso);
        $("#precioBeca").text(Math.trunc(infoCurso.precio - (infoCurso.precio * 0.7)));
        $("#precioStandard").text(infoCurso.precio);

        infoCurso2 = JSON.parse(localStorage.getItem('fechaYhorario'));

        $("#duracion").text(infoCurso2.duracion);
        $("#dias").text(infoCurso2.dias);
        $("#horarios").text(infoCurso2.horarios);

//////////////////////////////// BECA O STANDARD /// EN CASO DE BECA REDEFINE LOCALSTORAGE

//////////////////////////////// PLAN BECA

        $('#planBeca').click(function (e) {

                let datosCurso2 = {
                        'precio': Math.trunc(infoCurso.precio - (infoCurso.precio * 0.7)),
                        'curso': infoCurso.curso
                };

                localStorage.removeItem('datosCurso');

                localStorage.setItem('datosCurso2', JSON.stringify(datosCurso2));

                window.location.href = "datos.html";

                e.preventDefault();
        });

//////////////////////////////// PLAN STANDARD, NO CAMBIA NADA

        $('#planStandard').click(function (e) {

                let datosCurso2 = infoCurso;

                localStorage.removeItem('datosCurso');

                localStorage.setItem('datosCurso2', JSON.stringify(datosCurso2));

                window.location.href = "datos.html";

                e.preventDefault();
        });
});
