function registrar() {
    let txt_nombre = $("#nombre").val();
    let txt_correo = $("#correo").val();
    let txt_contrasena = $("#contrasena").val();
    let txt_edad = $("#edad").val();
    let txt_pais = $("#pais").val();
    let txt_foto = $("#foto_perfil").val();
    let txt_datos = $("#datos_perfil").val();
    $.ajax({
        url:'http://localhost:8080/streamers',   // url
        dataType: 'text/json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            nombre: txt_nombre,
            correo: txt_correo,
            password: txt_contrasena,
            edad: txt_edad,
            pais: txt_pais,
            foto_perfil: txt_foto,
            datos_perfil: txt_datos,
        }, // data to be submit
        success: function( data, textStatus, jQxhr ){
            alert("Guardado!!!");
            cargar();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            cargar();
        }
    });
}

function cargar() {
    $.ajax({
        url:'http://localhost:8080/streamers',   // url
        type: 'get',
        success: function( data, textStatus, jQxhr ){
            let html = "";
            console.log(data);
            data[0].forEach(element => {
                console.log(element);
                html += '<li class="list-group-item d-flex justify-content-between lh-sm">' +
                            '<div>' +
                                '<h6 class="my-0">' + element.nombre +'</h6>' +
                                '<small class="text-muted">' + element.correo + '</small>'+
                            '</div>' +
                            '<span class="text-muted">$' + element.edad + '</span>' +
                        '</li>';
            $("#lista_productos").html(html);
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

$(document).ready(function(){
    cargar();
});