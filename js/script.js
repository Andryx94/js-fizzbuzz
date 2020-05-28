//variabili
var lista = document.getElementById('lista')

//ciclo for
for (var i=1; i<=100; i++) {
  //se divisibile sia per 5 che per 3
  if (i % 15 == 0) {
    lista.innerHTML += '<li class="fizzbuzz">' + "FizzBuzz";
  }

  //se divisibile per 3
  else if (i % 3 == 0) {
    lista.innerHTML += '<li class="fizz">' + "Fizz";
  }

  //se divisibile per 5
  else if ( i % 5 == 0) {
    lista.innerHTML += '<li class="buzz">' + "Buzz";
  }

  else {
    lista.innerHTML += '<li>' + i;
  }
}
