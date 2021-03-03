let credits = [
    {
        Nombre: "Andres",
        Apellido: "Marquez",
        NumeroDocumento: "1052410750",
        Edad: 23,
        Celular: "3102462947",
        Correo: "kamitriana7@gmail.com",
        Departamento: "Boyaca",
        Ciudad: "Duitama",
        Direccion: "Calle 25A # 26-31",
        TrabajoActual: "SI",
        Profesion: "Tecnico en instalaciones electricas",
        PuestoActual: "Asistente en instalaciones electricas",
        IngresosMensuales: 1500000,
        SaldoCredito: 7400000,
        NumeroCuotas: 24,
        CuotaMensual: 308000
    },
    {
        Nombre: "Angie",
        Apellido: "Lopez",
        NumeroDocumento: "1043620350",
        Edad: 43,
        Celular: "3204567898",
        Correo: "angielopez2020@gmail.com",
        Departamento: "Boyaca",
        Ciudad: "Duitama",
        Direccion: "Calle 15 # 22-12",
        TrabajoActual: "SI",
        Profesion: "Secretaria",
        PuestoActual: "Secretaria de Indumil",
        IngresosMensuales: 2300000,
        SaldoCredito: 2480000,
        NumeroCuotas: 12,
        CuotaMensual: 206000
    },
    {
        Nombre: "Juan",
        Apellido: "Martinez",
        NumeroDocumento: "4206087",
        Edad: 23,
        Celular: "3133237895",
        Correo: "martinezjuan02@gmail.com",
        Departamento: "Boyaca",
        Ciudad: "Santa Rosa de viterbo",
        Direccion: "Carrera 2 # 13-13",
        TrabajoActual: "SI",
        Profesion: "Oficial de policia",
        PuestoActual: "oficial de policia",
        IngresosMensuales: 2000000,
        SaldoCredito: 12040000,
        NumeroCuotas: 36,
        CuotaMensual: 334000
    }
];

const botonConsultar = document.getElementById("consultar");
const botonConsignar = document.getElementById("consignar");
const botonSolicitar = document.getElementById("solicitar");
botonConsultar.addEventListener("click", consult);
botonConsignar.addEventListener("click", pay);
botonSolicitar.addEventListener("click", add);

//La siguiente funcion permite buscar informacion de un credito por numero de documento
function consult() {
    event.preventDefault();
    const consultarDocumento = document.getElementById("consultarDocumento");
    if (!consultarDocumento.value) {
        window.alert("!!! Debe ingresar un numero de documento !!!");
    }
    else {
        consulta = credits.find(lista => lista.NumeroDocumento === consultarDocumento.value);
        if (consulta) {
            const cadena = "<br><br><h1>INFORMACION DEL CREDITO:</h1>" + "<hr><h5>Nombre: " + consulta.Nombre + "<hr>Apellido: " + consulta.Apellido
                + "<hr>Numero de documento: " + consulta.NumeroDocumento + "<hr>Saldo del credito: $" + consulta.SaldoCredito
                + "<hr>Cuotas restantes: " + consulta.NumeroCuotas + "</h5><hr>";
            document.getElementById("formularioConsulta").reset();
            document.getElementById("proteccionConsulta").style.display = "inline";
            document.getElementById('proteccionConsulta').innerHTML = cadena;
        }
        else {
            alert("!!! El documento ingresado no es valido o no tiene un credito asociado !!!");
        }
    }
}

//La siguiente funcion permite abonar o pagar un cuota del credito por numero de documento (Esta accion solo la puede realizar el administrador)
function pay() {
    event.preventDefault();
    const saldoDocumento = document.getElementById("saldoDocumento");
    const csaldoDocumento = document.getElementById("csaldoDocumento");
    const vconsignar = document.getElementById("vconsignar");

    if ((!saldoDocumento.value) || (!csaldoDocumento.value) || (!vconsignar.value)) {
        window.alert("!!! Debe llenar todos los campos !!!");
    }
    else {
        if (saldoDocumento.value === csaldoDocumento.value) {
            consulta = credits.find(lista => lista.NumeroDocumento === saldoDocumento.value);
            if (consulta) {
                var saldo = consulta.SaldoCredito - vconsignar.value;
                var numcuotas = consulta.NumeroCuotas - 1;
                if (saldo <= 0) {
                    consulta.SaldoCredito = 0;
                    alert("Felicidades a terminado de pagar su credito con exito");
                    let pos = credits.indexOf(saldoDocumento.value);
                    credits.splice(pos, 1);
                    document.getElementById("formularioSaldo").reset();
                }
                else {
                    consulta.SaldoCredito = saldo;
                    consulta.NumeroCuotas = numcuotas;
                    alert("CONSIGNACION EXITOSA: " +"\nDocumento: " + consulta.NumeroDocumento + "\nNuevo Saldo: $" + consulta.SaldoCredito + "\nNumero de cuotas restantes: " + consulta.NumeroCuotas);
                    document.getElementById("formularioSaldo").reset();
                }
            }
            else {
                alert("!!! El documento ingresado no es valido o no tiene un credito asociado !!!");
            }
        }
        else {
            alert("!!! El numero de documento debe ser igual !!!");
        }
    }
}

//La siguiente funcion permite gestionar un credito (Esta accion solo la puede realizar el administrador)
function add() {
    event.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const documento = document.getElementById("documento");
    const cdocumento = document.getElementById("cdocumento");
    const edad = document.getElementById("edad");
    const celular = document.getElementById("celular");
    const correo = document.getElementById("correo");
    const departamento = document.getElementById("departamento");
    const ciudad = document.getElementById("ciudad");
    const direccion = document.getElementById("direccion");
    const trabajo = document.getElementById("trabajo");
    const profesion = document.getElementById("profesion");
    const puesto = document.getElementById("puesto");
    const ingresos = document.getElementById("ingresos");
    const cingresos = document.getElementById("cingresos");
    const credito = document.getElementById("credito");
    const ccredito = document.getElementById("ccredito");
    const ncuotas = document.getElementById("ncuotas");

    if ((!nombre.value) || (!apellido.value) || (!documento.value) || (!cdocumento.value) || (!edad.value)
        || (!celular.value) || (!correo.value) || (!departamento.value) || (!ciudad.value) || (!direccion.value)
        || (!trabajo.value) || (!profesion.value) || (!puesto.value) || (!ingresos.value) || (!cingresos.value) || (!credito.value) || (!ccredito.value) || (!ncuotas.value)) {
        alert("!!! Debe llenar todos los campos !!!")
    }
    else {
        if (documento.value === cdocumento.value) {
            var verificacion = credits.find(lista => lista.NumeroDocumento === documento.value);
            if (verificacion) {
                alert("!!! El documento ingresado ya cuenta con un credito !!!")
            }
            else {
                if (edad.value >= 18) {
                    if (trabajo.value === "1") {
                        if (ingresos.value === cingresos.value) {
                            if (ingresos.value >= 1000000) {
                                if (credito.value === ccredito.value) {
                                    if (credito.value <= 10000000) {
                                        var interes = (parseInt(credito.value) * 0.02) * parseInt(ncuotas.value);
                                        var totalCredito = parseInt(credito.value) + interes;
                                        var Mensualidad = totalCredito / parseInt(ncuotas.value);

                                        credits.push({
                                            Nombre: nombre.value,
                                            Apellido: apellido.value,
                                            NumeroDocumento: documento.value,
                                            Edad: edad.value,
                                            Celular: celular.value,
                                            Correo: correo.value,
                                            Departamento: departamento.value,
                                            Ciudad: ciudad.value,
                                            Direccion: direccion.value,
                                            TrabajoActual: "SI",
                                            Profesion: profesion.value,
                                            PuestoActual: puesto.value,
                                            IngresosMensuales: ingresos.value,
                                            SaldoCredito: totalCredito,
                                            NumeroCuotas: ncuotas.value,
                                            CuotaMensual: parseInt(Mensualidad)
                                        });
                                        alert("CREDITO ACEPTADO")
                                        document.getElementById("formulario").reset();
                                    }
                                    else {
                                        alert("!!! El credito maximo es de $10000000 !!!")
                                    }
                                }
                                else {
                                    alert("!!! El valor de los creditos debe ser igual  !!!")
                                }
                            }
                            else {
                                alert("!!! Los ingresos deben ser mayores  !!!")
                            }
                        }
                        else {
                            alert("!!! Los ingresos deben ser iguales !!!")
                        }
                    }
                    else {
                        alert("!!! Debes tener un trabajo estable !!!")
                    }
                }
                else {
                    alert("!!! No cumples con la edad requerida !!!")
                }
            }
        }
        else {
            alert("!!! El numero de documento debe ser igual !!!")
        }
    }
}