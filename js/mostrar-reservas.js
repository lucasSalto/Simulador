//Reservas

//mostrar reservas guardadas
formularioReservas.addEventListener("submit", (event)=>{

    event.preventDefault();

    //tomo el input codigo para buscar en reservas
    const inputCodigoReserva = document.getElementById("inputCodigoReservas");
    const inputCodigo = parseInt(inputCodigoReserva.value);

    //tomo el input apellido para buscar en reservas
    const inputApellidoReserva = document.getElementById("inputApellidoReservas");
    const inputApellido = inputApellidoReserva.value; 

    //comparo codigo con el arreglo reservas
    const codigoEncontrado = reservas.filter((el)=>{
        return el.codigoDeReserva === inputCodigo;
    });

    //verifico si se encontro 
    if(codigoEncontrado.length !== 0){

        //comparo apellido con el arreglo encontrado con el codigo
        const reservasEncontrado = codigoEncontrado.filter((el)=>{
            return el.apellido === inputApellido;
        });

        //verifico si se encontro por apellido
        if(reservasEncontrado.length !== 0){

            inputCodigoReserva.value="";
            inputApellidoReserva.value="";

            //Muestro los datos guardados en el arreglo encontrado
            mostrarReserva.innerHTML =`<h1> Estimado ${reservasEncontrado[0].nombre} ${reservasEncontrado[0].apellido}: </h1>
                <h2> Su reserva se realizo con exito. Su vuelo: </h2>
                <p><strong> Origen: </strong> ${reservasEncontrado[0].origenReserva} </p>
                <p><strong> Destino: </strong> ${reservasEncontrado[0].destinoReserva} </p>
                <p><strong> Horas de vuelo: </strong> ${reservasEncontrado[0].horasDeVueloReserva} Hs.</p>
                <p><strong> Cantidad de Pasajeros </strong> ${reservasEncontrado[0].cantDeAsientosReservados} </p>
                <p><strong> Tipo de Asiento: </strong> ${reservasEncontrado[0].tipoDeAsientoReservado} </p>
                <p><strong> Precio: </strong> $ ${reservasEncontrado[0].precioFinal} </p>`;

                //boton que limpia 
                const botonLimpiaReserva = document.createElement("button");

                botonLimpiaReserva.innerText="Volver";
                botonLimpiaReserva.className="btn btn-primary";

                mostrarReserva.append(botonLimpiaReserva);

                botonLimpiaReserva.addEventListener("click",()=>{
                    mostrarReserva.innerHTML="";
                });

        } else {

            inputCodigoReserva.value="";
            inputApellidoReserva.value="";

            Toastify({

                text: "El apellido ingresado es incorrecto",
                
                duration: 3000,

                style: {
                    background: "red",
                  }
                
                }).showToast();
        }

    } else {

        inputCodigoReserva.value="";
        inputApellidoReserva.value="";

        Toastify({

            text: "El codigo ingresado es incorrecto",
                
                duration: 3000,

                style: {
                    background: "red",
                  }
                
                }).showToast();

    }

});