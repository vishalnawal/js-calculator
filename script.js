
function takeValue(x) {
  document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
  document.getElementById('inputwindow').value = y;
}

function calculateResult() {
  var result = eval(document.getElementById('inputwindow').value);
  document.getElementById('inputwindow').value = result;
}



