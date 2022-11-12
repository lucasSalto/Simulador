
//Eventos

inputIda.addEventListener("click", ()=>{

    selectDestino.addEventListener("change", selectores);

    selectOrigen.addEventListener("change", selectores);

    selectPasajeros.addEventListener("change", cantDePasajeros);

    selectTipoDeAsiento.addEventListener("change", buscarTipoDeAsiento);

    buscarVuelo.addEventListener("click", ()=>{

        let arrayDestinoEncontrado = selectores();
    
        let nroTotalDePasajeros= cantDePasajeros();
    
        let claseElegidaDeAvion = buscarTipoDeAsiento();
    
        let pasajerosPorTipoClaseAvion = nroTotalDePasajeros * claseElegidaDeAvion[0].valorDelAsiento;
    
        let sumaTotalPasaje = pasajerosPorTipoClaseAvion + arrayDestinoEncontrado[0].valorViaje;
    
        mostrarViaje(arrayDestinoEncontrado, sumaTotalPasaje, nroTotalDePasajeros, claseElegidaDeAvion);
     
    });

});

//Input ida y vuelta multiplica por dos el valor del viaje
inputIdaYVuelta.addEventListener("click", ()=>{

    selectDestino.addEventListener("change", selectores);

    selectOrigen.addEventListener("change", selectores);

    selectPasajeros.addEventListener("change", cantDePasajeros);

    selectTipoDeAsiento.addEventListener("change", buscarTipoDeAsiento);

    buscarVuelo.addEventListener("click", ()=>{

        let arrayDestinoEncontrado = selectores();
    
        let nroTotalDePasajeros= cantDePasajeros();
    
        let claseElegidaDeAvion = buscarTipoDeAsiento();
    
        let pasajerosPorTipoClaseAvion = nroTotalDePasajeros * claseElegidaDeAvion[0].valorDelAsiento;
    
        let sumaTotalPasaje = pasajerosPorTipoClaseAvion + arrayDestinoEncontrado[0].valorViaje;

        sumaTotalPasaje = sumaTotalPasaje * 2;
    
        mostrarViaje(arrayDestinoEncontrado, sumaTotalPasaje, nroTotalDePasajeros, claseElegidaDeAvion);
     
    });
});


