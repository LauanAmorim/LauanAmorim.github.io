function enviar() {
  swal("Formulário enviado com sucesso!");
}

function easteregg() {
  document.getElementById("easteregg").style =
    "transform: rotate(360deg); transition: 1s;";
}

document.getElementById("easteregg").addEventListener("dblclick", easteregg);
