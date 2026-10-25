
//  VENTANA DE CONTACTO
    const btnContacto = document.getElementById("btnContacto");
    const ventanaContacto = document.getElementById("ventanaContacto");
    const cerrarContacto = document.getElementById("cerrarContacto");

    // Abrir ventana
    if (btnContacto) {
        btnContacto.addEventListener("click", () => {
            ventanaContacto.classList.add("abrir");
        });
    }

    // Cerrar ventana
    if (cerrarContacto) {
        cerrarContacto.addEventListener("click", () => {
            ventanaContacto.classList.remove("abrir");
        });
    }

//  BOTON SUBIR

document.addEventListener("DOMContentLoaded", () => {

    const botonSubir = document.getElementById("btnVolverArriba");

    window.addEventListener("scroll", () => {
        // Si sebaja mas de 40 píxeles mostramos
        if (window.scrollY > 40) {
            botonSubir.classList.add("mostrar");
        } else {
            botonSubir.classList.remove("mostrar");
        }
    });

    if (botonSubir) {
        botonSubir.addEventListener("click", () => {
            window.scrollTo({
                top: 0, /* posicion inicial de la pantalla */
                behavior: "smooth"
                
            });
        });
    }

});