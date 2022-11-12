// Objetos
class Vuelos{
    constructor(origen, destino, horasDeVuelo, valorViaje, cantDePasajesDisponibles){
        this.origen = origen;
        this.destino = destino;
        this.horasDeVuelo = horasDeVuelo;
        this.valorViaje = valorViaje;
        this.cantDePasajesDisponibles = cantDePasajesDisponibles;
    }

    verificarCantidadDePasajes(CantidadAVerificar){
        if(this.cantDePasajesDisponibles >= CantidadAVerificar){
            return 0;
        }
        return 1;
    }

    comprarPasaje(cantidadDePasajes){
        this.cantDePasajesDisponibles = this.cantDePasajesDisponibles - cantidadDePasajes;
    }
}

class Asientos{
    constructor(tipoDeAsiento, valorDelAsiento){
        this.tipoDeAsiento = tipoDeAsiento;
        this.valorDelAsiento = valorDelAsiento;
    }
}

class Reservas{
    constructor(nombre, apellido, dni, origenReserva, destinoReserva, horasDeVueloReserva, cantDeAsientosReservados, tipoDeAsientoReservado, precioFinal, codigoDeReserva){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.origenReserva = origenReserva;
        this.destinoReserva = destinoReserva;
        this.horasDeVueloReserva = horasDeVueloReserva;
        this.cantDeAsientosReservados = cantDeAsientosReservados;
        this.tipoDeAsientoReservado = tipoDeAsientoReservado;
        this.precioFinal = precioFinal;
        this.codigoDeReserva = codigoDeReserva;
    }
}

class Usuarios{
    constructor(nombreUsuario,apellidoUsuario,email,contrasenia,direccion,provincia,codidoPostal){
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.email = email;
        this.contrasenia = contrasenia;
        this.direccion = direccion;
        this.provincia = provincia;
        this.codidoPostal = codidoPostal;
    }
}