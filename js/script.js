//variabili
var lista = document.getElementById('lista')

//ciclo for
for (var i=1; i<=100; i++) {
  if ((i % 3 == 0) && ( i % 5 == 0)) {
    lista.innerHTML += '<li>' + "FizzBuzz";
  }

  else if (i % 3 == 0) {
    lista.innerHTML += '<li>' + "Fizz";
  }

  else if ( i % 5 == 0) {
    lista.innerHTML += '<li>' + "Buzz";
  }

  else {
    lista.innerHTML += '<li>' + i;
  }
}
