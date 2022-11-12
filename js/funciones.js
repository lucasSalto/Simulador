//Funciones

//retorno cantidad de pasajeros selecionada
function cantDePasajeros(){

    const auxCantPasajeros = selectPasajeros.value;

    return auxCantPasajeros;
}

//retorno arreglos con el tipo de asiento
function buscarTipoDeAsiento(){

    const tipoAsientoABuscar = selectTipoDeAsiento.value;

    const auxTipoAsiento = tiposDeAsientosDelAvion.filter((el)=>{ return el.tipoDeAsiento === tipoAsientoABuscar});
    
    return auxTipoAsiento;
}

//genero funcion para buscar el arreglo con el origen y destino
function selectores(){

    const selectorOrigen = selectOrigen.value;

    const selectorDestino = selectDestino.value;

    limpiar();

    const arrayOrigen = vuelosAerolinea.filter((el) => { return el.origen === selectorOrigen});

    if(selectorOrigen !== selectorDestino){

        const arrayDestino = arrayOrigen.filter((el) =>{ return el.destino === selectorDestino});

        return arrayDestino;

    } else {

        alert("No se realizan vuelos locales");
    }

}

//muestro el valor del viaje y genero un boton para agregar un formulario en caso de querer comprar el boleto
function mostrarViaje (arregloAMostrar, valorDelPasaje, pasajeros, tipoAsiento){

        if(arregloAMostrar[0].verificarCantidadDePasajes(pasajeros) !== 1){

            let segregarImpuestoIVA = valorDelPasaje * impuestoIVA;

            let segregarImpuestoTasa = valorDelPasaje * impuestoTasa;

            let segregarImpuestoPais = valorDelPasaje * impuestoPais;

            let segregarImpuestoMigraciones = valorDelPasaje * impuestoMigraciones;

            let total = valorDelPasaje + segregarImpuestoIVA + segregarImpuestoTasa + segregarImpuestoMigraciones + segregarImpuestoPais;

            mostrarValorViaje.innerHTML = `
            <div class="flex">
                <div>
                    <h2> Vuelo: </h2>
                    <p>🛫 Origen: ${arregloAMostrar[0].origen} </p>
                    <p>🛬 Destino: ${arregloAMostrar[0].destino} </p>
                    <p>🕓 Horas de vuelo: ${arregloAMostrar[0].horasDeVuelo} Hs.</p>
                    <p> Nro. de Pasajeros: ${pasajeros} </p>
                    <p>💺 Tipo de Asiento: ${tipoAsiento[0].tipoDeAsiento} </p>
                </div>
                <div class ="recuadro-tarifa">
                    <p> Precio: $ ${valorDelPasaje} </p>
                    <p class="impuestos"> IVA (21%): $ ${segregarImpuestoIVA} </p>
                    <p class="impuestos"> Impuesto Tasa Aeropuertaria: $ ${segregarImpuestoTasa} </p>
                    <p class="impuestos"> Impuesto PAIS: $ ${segregarImpuestoPais} </p>
                    <p class="impuestos"> Impuesto Migratorio: $ ${segregarImpuestoMigraciones} </p>
                    <p > Precio Final: $ ${total} </p>
                </div>
            </div>`;


            const button = document.createElement("button");

            mostrarValorViaje.append(button);

            button.setAttribute("id","continuar");

            button.className = "btn btn-primary";

            button.innerText = "Continuar";

            const botonContinuar = document.getElementById("continuar");

            botonContinuar.addEventListener("click", (event)=>{

                event.preventDefault();

                limpiar();

                formulario(arregloAMostrar, total, pasajeros, tipoAsiento);

            });

        } else {

            mostrarValorViaje.innerHTML = "No hay asientos disponibles";

        }

}

//Armo en la funcion un formulario para luego guardar datos de la persona que compra
function formulario(arregloAReservar, precioDelVueloReserva, cantDePasajerosReserva, tipoDeAsientoReservado){

    const div = document.createElement("div");

    div.className ="mostrar-precio-viaje";

    mostrarValorViaje.append(div);

    //Genero el formulario
    const form = document.createElement("form");

    form.className ="formulario-compra";

    div.append(form);

    const titulo = document.createElement("h2");

    titulo.innerHTML ="Ingrese sus datos personales para confirmar la compra";

    form.append(titulo);

    const labelName = document.createElement("label");

    labelName.innerText ="Nombre: ";

    form.append(labelName);

    const inputName = document.createElement("input");

    inputName.setAttribute("placeholder", "Nombre");

    form.append(inputName);

    const labelApellido = document.createElement("label");

    labelApellido.innerText = "Apellido: ";

    form.append(labelApellido);

    const inputApellido = document.createElement("input");

    inputApellido.setAttribute("placeholder", "Apellido");

    form.append(inputApellido);

    const labelDni = document.createElement("label");

    labelDni.innerText = "DNI: ";

    form.append(labelDni);

    const inputDni = document.createElement("input");

    inputDni.setAttribute("placeholder", "DNI");

    form.append(inputDni);

    const botonCompra = document.createElement("button");

    botonCompra.setAttribute("type", "submit");

    botonCompra.className ="boton-compra";

    botonCompra.innerText = "COMPRAR";

    form.append(botonCompra);

    //evento del formulario
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const nombre = inputName.value;
        const apellido = inputApellido.value;
        const dni = inputDni.value;

        Swal.fire({

            title: '¿Desea confirmar la compra?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
            
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                title: 'Su compra se realizo con exito!',
                icon: 'success',
                 timer: 3000,
                showConfirmButton: false,
                });

                //Genero un codigo de Reserva Random
                const codigoReserva = Math.round( Math.random() * 50);

                //Descuento la cantidad de asientos disponibles
                arregloAReservar[0].comprarPasaje(cantDePasajerosReserva);

                //cargo el arreglo de reservas
                reservas.push(new Reservas(nombre, apellido, dni, arregloAReservar[0].origen, arregloAReservar[0].destino, 
                    arregloAReservar[0].horasDeVuelo, cantDePasajerosReserva, tipoDeAsientoReservado[0].tipoDeAsiento,
                    precioDelVueloReserva, codigoReserva));

                const pReserva = document.createElement("p");

                form.append(pReserva);

                pReserva.innerHTML = `Su compra ${nombre}, ${apellido} se realizo con exito. Su codigo de Reserva es: ${codigoReserva}`;

                //Guardo la reserva con localStorage
                let reservasJSON ="";

                reservasJSON = JSON.stringify(reservas);

                localStorage.setItem("reservas", reservasJSON);

                inputName.value ="";
                inputApellido.value ="";
                inputDni.value ="";


                //limpio la busqueda
                const botonVolver = document.createElement("button");

                botonVolver.className ="boton-volver";

                botonVolver.innerText ="Volver";

                form.append(botonVolver);

                botonVolver.addEventListener("click", ()=>{
                    limpiar();
                })

            } else {
                Swal.fire({
                    title: 'Se cancelo su compra',
                    icon: 'error',
                     timer: 3000,
                    showConfirmButton: false,
                });

                limpiar();
                
            }
        })

    });


}

//funcion que limpia
function limpiar (){
    mostrarValorViaje.innerHTML ="";
}

//------------------ Usuarios -------------------

function cargarUsuarios (){

    const nombreUsuarioInput = document.getElementById("name");
    const nombre = nombreUsuarioInput.value;
    const apellidoUsuarioInput = document.getElementById("surname");
    const apellido =apellidoUsuarioInput.value;
    const emailUsuarioInput = document.getElementById("inputEmail4");
    const email = emailUsuarioInput.value;
    const contraseniaUsuarioInput = document.getElementById("inputPassword4");
    const contrasenia = contraseniaUsuarioInput.value;
    const direccionUsuarioInput = document.getElementById("inputAddress");
    const direccion = direccionUsuarioInput.value;
    const provinciaUsuarioInput = document.getElementById("inputCity");
    const provincia = provinciaUsuarioInput.value;
    const codigoPostalUsuarioInput = document.getElementById("inputZip");
    const codigoPostal = codigoPostalUsuarioInput.value;

    let usuarioJSON = "";

    //cargo el arreglo con los datos del usuario
    usuarios.push(new Usuarios(nombre, apellido, email, contrasenia, direccion, provincia, codigoPostal));

    //guardo los datos del usuario con localStorage
    usuarioJSON = JSON.stringify(usuarios);

    localStorage.setItem("usuarios", usuarioJSON);

    Swal.fire({
        title: 'ENVIADO',
        text: 'El usuario se guardo correctamente!',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    //limpio el form
    nombreUsuarioInput.value ="";
    apellidoUsuarioInput.value ="";
    emailUsuarioInput.value ="";
    contraseniaUsuarioInput.value ="";
    direccionUsuarioInput.value ="";
    provinciaUsuarioInput.value ="";
    codigoPostalUsuarioInput.value ="";

}


//-------- funcion Iniciar Sesion -------

function iniciarSesion (){

    const validarNombre = validarNombreUsuarioInput.value;
    const validarContrasenia = validarContraseniaInput.value;

    const divUsuario = document.getElementById("mostrar-bienvenida");

    divUsuario.innerHTML="";

    const verificarNombreUsuario = usuarios.filter((el)=>{
        return el.nombreUsuario === validarNombre;
    });

    //Verifico si el usuario existe
    if(verificarNombreUsuario.length !== 0){

        const verificarContraseniaUsuario = verificarNombreUsuario.filter((el)=>{
            return el.contrasenia === validarContrasenia;
        });

        //Verifico si la contraseña existe
        if(verificarContraseniaUsuario.length !== 0){

            validarNombreUsuarioInput.value ="";
            validarContraseniaInput.value ="";

            Swal.fire({
                title: 'Bienvenido!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            //Bienvenida al usuario
            const pUsuario = document.createElement("p");

            pUsuario.className ="bienvenida";

            divUsuario.append(pUsuario);

            pUsuario.innerHTML=`- Bienvenido ${verificarContraseniaUsuario[0].nombreUsuario} - `;

        } else {

            validarNombreUsuarioInput.value ="";
            validarContraseniaInput.value ="";

            Toastify({

                text: "La contraseña ingresada es incorrecta",
                
                duration: 3000,
    
                style: {
                    background: "red",
                  }
                
                }).showToast();
            
        }

    } else {

        validarNombreUsuarioInput.value ="";
        validarContraseniaInput.value ="";

        Toastify({

            text: "El usuario ingresado es incorrecto",
            
            duration: 3000,

            style: {
                background: "red",
              }
            
            }).showToast();
    }
}

































