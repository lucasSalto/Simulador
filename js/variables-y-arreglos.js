// ----------------------- Variables Globales --------------

//variables de impuestos al vuelo
const impuestoIVA = 0.21;
const impuestoTasa = 0.15;
const impuestoPais = 0.10;
const impuestoMigraciones = 0.05;

//arreglo de vuelos
const vuelosAerolinea = [];

//arreglo de tipo de asientos del avion
const tiposDeAsientosDelAvion = [];

//select para buscar el vuelo
const inputIda = document.getElementById("ida");

const inputIdaYVuelta = document.getElementById("ida-y-vuelta");

const selectOrigen = document.getElementById("id-origen");

const selectDestino = document.getElementById("id-destino");

const selectPasajeros = document.getElementById("nro-de-pasajeros");

const selectTipoDeAsiento = document.getElementById("tipo-de-asiento");

const buscarVuelo = document.getElementById("buscar-vuelo");

const mostrarValorViaje = document.getElementById("mostrar");


//traigo input de reservas
const formularioReservas = document.getElementById("formulario-reservas");

const mostrarReserva = document.getElementById("mostrar-reserva");


//traigo input de sesion
const validarNombreUsuarioInput = document.getElementById("formGroupExampleInput");

const validarContraseniaInput = document.getElementById("formGroupExampleInput2");

const botonSesion = document.getElementById("boton-sesion");


//regristro de usuarios
const formularioRegistro = document.getElementById("registro");

let usuarios = [];

//traigo el JSON de usuarios y verifico si tiene algun dato guardado
fetch(`/usuarios.json`)
.then((Response)=>{
    return Response.json();
}).then((usuariosJSON)=>{

    for(const date of usuariosJSON){
        usuarios.push(new Usuarios(date.nombre, date.apellido, date.email, date.contrasenia, date.direccion, date.provincia, date.codigoPostal));
    }

    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

});


//traigo el JSON de reservas y verifico si tiene algun dato guardado 
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];


//Carga Arreglo Aerolinea
fetch(`/vuelos.json`)
.then((Response)=>{
    return Response.json();
}).then((vuelosJSON)=>{

    for(const vuelos of vuelosJSON){
        vuelosAerolinea.push(new Vuelos(vuelos.origen, vuelos.destino, vuelos.horasDeVuelo, vuelos.valorViaje, vuelos.cantDePasajesDisponibles));
    }
});

//llamo al achivo json de asientos 
fetch(`/asientos-de-avion.json`)
.then((Response)=>{
    return Response.json();
}).then((asientosJSON)=>{

    for(const clase of asientosJSON){
        tiposDeAsientosDelAvion.push(new Asientos(clase.tipoDeAsiento, clase.valorDelAsiento));
    }
})


