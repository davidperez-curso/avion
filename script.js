$(document).ready(function () {

    $('.flechas').mouseover(function () { 
        $('.imagen-avion').css("position","relative");
        $('.avion-contenedor').css("position","relative");
    });

    // funciones boton up
    $('.up').click(function (e) { 
        $('.imagen-avion').css("bottom", "50px");
    });
    $('.up').mouseleave(function () { 
        $('.imagen-avion').css("bottom", "0");
    });

    // funciones boton left
    $('.left').click(function (e) { 
        $('.imagen-avion').css("right", "50px");
    });
    $('.left').mouseleave(function () {
        $('.imagen-avion').css("right", "0");
    });

    // funciones boton right
    $('.right').click(function (e) { 
        $('.avion-contenedor').css("left", "50px");
    });
    $('.right').mouseleave(function () { 
        $('.avion-contenedor').css("left", "0");
    });

    // funciones boton down
    $('.down').click(function (e) { 
        $('.avion-contenedor').css("top", "50px");
    });
    $('.down').mouseleave(function () { 
        $('.avion-contenedor').css("top", "0");
    });

    // función tamaños - ampliar
    $('.ampliar').click(function (e) { 
        e.preventDefault();
        $('.imagen-avion').css("width", "400px");
    });
    // - normal
    $('.normal').click(function (e) { 
        e.preventDefault();
        $('.imagen-avion').css("width", "100%");
        
    });
    // - reducir
    $('.reducir').click(function (e) { 
        e.preventDefault();
        $('.imagen-avion').css("width", "50%");
    });

    // función visible
    $('.show').click(function (e) { 
        e.preventDefault();
        $('.imagen-avion').show(); 
    });

    // función invisible
    $('.hide').click(function (e) { 
        e.preventDefault();
        $('.imagen-avion').hide();
        
    });
});