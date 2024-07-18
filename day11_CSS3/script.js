const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('inputColor');
let circles = []; 

document.getElementById('clickMe').addEventListener('click', function() {
  const newColor = colorPicker.value;

  
  if (newColor !== circles[circles.length - 1]?.color || circles.length === 0) {
    circles = []; 
  }

  const numCircles = Math.floor(Math.random() * 20) + 1; 

  for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 60; 

    circles.push({
      x,
      y,
      radius,
      color: newColor
    });
  }

  drawCircles();
});

function drawCircles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = circle.color; 
    ctx.lineWidth = 2; 
    ctx.stroke(); 
  }
}

