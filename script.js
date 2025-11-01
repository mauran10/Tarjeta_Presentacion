function openQrModal() {
    var modal = document.getElementById("qrModal");
    var qrImage = document.getElementById("qrImage");
    var modalQrImage = document.getElementById("modalQrImage");

    // Copia la fuente de la imagen pequeña a la grande por si hay cambios
    modalQrImage.src = qrImage.src;
    
    // Muestra el modal
    modal.style.display = "block";
}

function closeQrModal() {
    var modal = document.getElementById("qrModal");
    // Oculta el modal
    modal.style.display = "none";
}

// Cierra la modal si el usuario hace clic fuera de la imagen (en el fondo oscuro)
window.onclick = function(event) {
    var modal = document.getElementById("qrModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}