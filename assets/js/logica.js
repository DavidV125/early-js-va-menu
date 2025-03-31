// INICIO
var numero = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel.\nEstoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas:\n1.- Boletas y Pagos\n2.- Senal y Llamadas\n3.- Oferta Comercial\n4.- Otras Consultas"));

// SWITCH CASE
switch(numero) {
    case 1:
        // BOLETAS Y PAGOS
        numero = parseInt(prompt("Has seleccionado 'Boletas y Pagos'. Elige una opción:\n1.- Ver boleta\n2.- Pagar cuenta"));

        if (numero === 1) {
            alert("Descargar su boleta");
        }else if (numero === 2) {
            alert("Usted está siendo transferido, espere.");
        }else{
            alert("Opción no válida. Por favor ingrese 1 o 2.");
        }
        break;


     case 2:
           // SENAL Y LLAMADAS
           numero = parseInt(prompt("Has seleccionado 'Senal y Llamadas'. Elige una opción:\n1.- Problemas con la senal\n2.- Problemas con las llamadas"));
    
          if (numero === 1) {
            prompt("A continuación, escriba su solicitud:");
            alert("Su solicitud ha sido ingresada con éxito");
         }else if (numero === 2) {
            prompt("A continuación, escriba su solicitud:"); // editar caso dos, para que se ingrese solicitud
            alert("Su solicitud ha sido ingresada con éxito");
         }else{
            alert("Opción no válida. Por favor ingrese 1 o 2.");
            }
            break;

    case 3:
         // OFERTAS COMERCIALES
         answer = prompt("Mentel tiene una oferta acorde a tus necesidades.\nIngrese'SÍ' para que te contacte un ejecutivo, \nDe lo contrario ingrese 'NO'");
        
         if (answer === "SÍ") { // con tilde o sin o minusculas
             alert("Un ejecutivo se contactará con usted.");
         }else if (answer === "NO") {
            alert("Gracias por preferir nuestros servicios");
        }else{
            alert("Opción no válida. Por favor ingrese 'SÍ' o 'NO'.");
            }
            break;

    case 4:
         // OTRAS CONSULTAS
         answer2 = prompt("A continuación, ingrese su consulta");
            alert("Estimado usuario, su consulta: '" + answer2 + "' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
            break;

           
            default:
                alert("Opción no válida. Ingrese un número entre 1 y 4.");
                break;

   }