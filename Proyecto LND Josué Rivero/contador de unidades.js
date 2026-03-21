let cont = 0;

function incrementar() {
    cont++;
    document.getElementById("contador").innerText = cont;
}

function decrementar() {
    if (cont > 0) cont--;
    document.getElementById("contador").innerText = cont;
}
