
var today = new Date();
var current = document.getElementById('currentDay');

current.textContent = today;

document.getElementById("btn-9").addEventListener('click', function(event){
   var id = event.target.id.split('-')[1];
//    console.log(`text-${id}`);
   var text = document.getElementById(`text-${id}`).value
console.log(text);
localStorage.setItem(id, text)


});

