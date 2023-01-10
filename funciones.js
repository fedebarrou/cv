function activate(item) {

    var nacionalidad = document.getElementById("nacionalidad").classList.remove("active");
    var correo = document.getElementById("correo").classList.remove("active");
    var nacimiento = document.getElementById("nacimiento").classList.remove("active");
    var direccion = document.getElementById("direccion").classList.remove("active");
    var telefono = document.getElementById("telefono").classList.remove("active");
    var linkedin = document.getElementById("linkedin").classList.remove("active");
    
    var change = document.getElementById(String(item)).classList.add("active");

    var subtitulo =document.getElementById("user_title").innerText = $("#"+String(item)).data("title") ;
    var dato =document.getElementById("user_value").innerText = $("#"+String(item)).data("value") ;

    
    
    }

