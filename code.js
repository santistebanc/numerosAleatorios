//http://bit.ly/1C8St6j



//funcion del metodo del cuadrado medio
function cuadradoMedio(semilla, tamano, iteraciones) {
  //inicializar variables
  var sem = Number(semilla);
  var tam = Number(tamano);
  var ite = Number(iteraciones);
  var semillaiteracion = sem; //se inicializa una variable que va acontener la semilla tras cada iteración

  var contenido = ''; //inicializar variable que llevara el html de la tabla
  contenido += '<table><tr><th>Iteración</th><th>Semilla</th><th>Cuadrado</th><th>Número Generado</th></tr>'; //abrir tabla y agregar titulos

  //ciclo for por cada una de las iteraciones
  for (i = 0; i < ite; i++) {
    var cuadrado = semillaiteracion * semillaiteracion; // calcular cuadrado de la iteración
    var cuadradostring = cuadrado.toString(); //convertir número a String para mas fácil manipulacion
    var comienzo = Math.floor((cuadradostring.length - tam) / 2); //calcular comienzo de numero medio
    var medio = cuadradostring.substring(comienzo, (comienzo + tam)); //extraer numero medio
    contenido += '<tr class="animated fadeInLeft"><td>' + (i + 1) + '</td><td>' + semillaiteracion.toString() + '</td><td>' + cuadrado.toString() + '</td><td><b>' + medio + '</b></td></tr>'; //imprimir numero medio en tabla
    semillaiteracion = Number(cuadradostring.substring(Math.floor((cuadradostring.length - 4) / 2), Math.floor((cuadradostring.length - 4) / 2) + 4)); //cambiar siguiente semilla al número generado cortado a 4 digitos
  }
  contenido += '</table>'; //cerrar tabla
  $('#cuadrados').empty(); //vaciar resultados anteriores
  $('#cuadrados').append(contenido); //vaciar resultados anteriores
}

$('#generar1').click(function() {
  var semilla = $('[name="semilla"]').val();
  var tamano = $('[name="tamano"]').val();
  var iteraciones = $('[name="iteraciones"]').val();
  cuadradoMedio(semilla, tamano, iteraciones);
});

//funcion del metodo de congruencia lineal
function operacionResiduo(dividendo, divisor) {
  //inicializar variables
  var divid = Number(dividendo);
  var divis = Number(divisor);

  var contenido = ''; //inicializar variable que llevara el html de la tabla
  contenido += '<table><tr><th>Dividendo</th><th>Divisor</th><th>Número Generado</th></tr>'; //abrir tabla y agregar titulos

  var res = divid % divis; // calcular numero aleatorio con formula
  contenido += '<tr class="animated fadeInLeft"><td>' + divid.toString() + '</td><td>' + divis.toString() + '</td><td><b>' + res + '</b></td></tr>'; //imprimir numero generado en tabla
  contenido += '</table>'; //cerrar tabla
  $('#residuo').empty(); //vaciar resultados anteriores
  $('#residuo').append(contenido); //vaciar resultados anteriores
}

$('#generar2').click(function() {
  var dividendo = $('[name="dividendo"]').val();
  var divisor = $('[name="divisor"]').val();
  operacionResiduo(dividendo, divisor);
});


//funcion del metodo de congruencia lineal
function congruenciaLineal(modulo, multiplicador, corrimiento, semilla, iteraciones) {
  //inicializar variables
  var mod = Number(modulo);
  var mul = Number(multiplicador);
  var cor = Number(corrimiento);
  var sem = Number(semilla);
  var ite = Number(iteraciones);
  var semillaiteracion = sem; //se inicializa una variable que va acontener la semilla tras cada iteración

  var contenido = ''; //inicializar variable que llevara el html de la tabla
  contenido += '<table><tr><th>Iteración</th><th>Semilla</th><th>Número Generado</th></tr>'; //abrir tabla y agregar titulos

  //ciclo for por cada una de las iteraciones
  for (i = 0; i < ite; i++) {
    var res = ((semillaiteracion * mul) + cor) % mod; // calcular numero aleatorio con formula
    contenido += '<tr class="animated fadeInLeft"><td>' + (i + 1) + '</td><td>' + semillaiteracion.toString() + '</td><td><b>' + res + '</b></td></tr>'; //imprimir numero generado en tabla
    semillaiteracion = res; //cambiar siguiente semilla al número generado
  }
  contenido += '</table>'; //cerrar tabla
  $('#congruencia').empty(); //vaciar resultados anteriores
  $('#congruencia').append(contenido); //vaciar resultados anteriores
}

$('#generar3').click(function() {
  var modulo = $('[name="modulo"]').val();
  var multiplicador = $('[name="multiplicador"]').val();
  var corrimiento = $('[name="corrimiento"]').val();
  var semilla = $('[name="sem"]').val();
  var iteraciones = $('[name="iter"]').val();
  congruenciaLineal(modulo, multiplicador, corrimiento, semilla, iteraciones);
});
