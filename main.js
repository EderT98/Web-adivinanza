

var respuesta = "blanco";
var contador = 0; 

function Verificar() {
	
    var rta = document.getElementById("resp").value;
    
    rta = rta.toLowerCase();

    console.log(rta)

    if(rta == respuesta){

      alert('Correcto');

    }else{
        
        
       
        alert('Incorrecto');    
        
        contador++;

        if( contador < 4 ){
			if(contador == 2){
                document.getElementById('pista1').innerText = '1- Es un color claro';
			} 
            if(contador == 3){
            	document.getElementById('pista2').innerText = '2- Lo contrario del negro';
            }

        }else{
        	alert("Te quedaste sin intentos!");
            document.getElementById("boton").disabled = true;
        }
        
        document.getElementById("intentos").innerText = (4 - contador);

    };  
};
