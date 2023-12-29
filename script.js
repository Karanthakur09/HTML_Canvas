
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');//we get hold of CanvasRenderingContext2d object which has some predefined properties
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//to make it not change shape on resizing the browser we add eventListner
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})
function drawCircle() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();//if there are any previous it is broken and new lines are drawn
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}
function animate()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    requestAnimationFrame(animate);//will call this function again and again 
}
animate();

