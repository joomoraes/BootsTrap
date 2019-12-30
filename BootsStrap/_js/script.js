var cores = ['black','white','blue'];

function mudarCor() {
  var el = document.getElementById('trocar');
  var proximoIndex = Math.floor(Math.random() * cores.length);
  var cor = cores[proximoIndex];
  el.style.backgroundColor = cor;
}

function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
    $('.navbar-collapse').collapse('hide');
}