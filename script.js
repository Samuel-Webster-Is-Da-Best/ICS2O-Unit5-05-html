let side = 0
let total = 0

document.getElementById('button').addEventListener('click', math)

function math () {
  side = document.getElementById('leng').value
  total = side * side
  alert(total)
  document.getElementById('leng').value = ''
}
