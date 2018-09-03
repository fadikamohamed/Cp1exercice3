var c = document.getElementById('greenCar');
var ctx = c.getContext('2d');

ctx.fillStyle = "#00B353";
ctx.fillRect(120,80,200,60);

ctx.fillStyle = "#00B353";
ctx.fillRect(70,130,300,60);

ctx.beginPath();
ctx.arc(100,225,35,0,Math.PI*2,true);
ctx.fillStyle = "#CDCDCD";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(340,225,35,0,Math.PI*2,true);
ctx.fillStyle = "#CDCDCD";
ctx.fill();
ctx.stroke();
