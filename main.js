var respuesta = "blanco";
var respuesta_2 = "64";
var respuesta_22 = "sesenta y cuatro";
var contador = 0;
var contador_2 = 0;
var adv,
  adv2 = false;

function Verificar() {
  var rta = document.getElementById("resp").value;

  rta = rta.toLowerCase();

  console.log(rta);

  if (rta == respuesta) {
    document.getElementById("result").innerHTML =
      "<span class='alert alert-success'>Correcto</span>";

    var adv = true;
  } else {
    document.getElementById("result").innerHTML =
      "<span class='alert alert-danger'>Error</span>";

    contador++;

    if (contador < 4) {
      if (contador == 2) {
        document.getElementById("pista1").innerText = "1- Es un color claro";
      }
      if (contador == 3) {
        document.getElementById("pista2").innerText =
          "2- Lo contrario del negro";
      }
    } else {
      alert("Te quedaste sin intentos!");
      document.getElementById("respTrue").innerText = "El caballo era blanco";
      document.getElementById("boton").disabled = true;
    }

    document.getElementById("intentos").innerText = 4 - contador;
  }
}

function Verifiacar_2() {
  var rst = document.getElementById("resp_2").value;
  rst = rst.toLowerCase();

  if (rst === respuesta_2 || rst === respuesta_22) {
    document.getElementById("result_2").innerHTML =
      "<span class='alert alert-success'>Correcto</span>";

    var adv2 = true;
  } else {
    document.getElementById("result_2").innerHTML =
      "<span class='alert alert-danger'>Error</span>";

    contador_2++;

    if (contador_2 < 4) {
      if (contador_2 == 2) {
        document.getElementById("pista_12").innerText = "1- Esta entre 60 y 70";
      }
      if (contador_2 == 3) {
        document.getElementById("pista_22").innerText = "2- Esta entre 60 y 65";
      }
    } else {
      alert("Te quedaste sin intentos!");
      document.getElementById("respTrue_2").innerText =
        "La multipicacion es igual a 64";
      document.getElementById("boton_2").disabled = true;
    }

    document.getElementById("intentos_2").innerText = 4 - contador_2;
  }
}

if (adv && adv2) {
  document.getElementById("camp").innerText = "Sos el ganador definitivo!";
}
