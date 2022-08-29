var last_postion_x, last_postion_y;

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


color= "pink";
Width_of_line= 5;


 var width= screen.width;
 var new_width= screen.width-70;
 var new_height= screen.height -300;

 if( width < 992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow="hidden";
 }

 canvas.addEventlistener("touchStart", my_touchStart);


 function my_touchStart (e) {

    console.log("my_Touchstart");
    color=document.getElementById("color").value;
    Width_of_line=document.getElementById("width_of_line").value;


    last_postion_x=e.touches[0].clientX- canvas.offsetLeft;
    last_postion_y=e.touches[0].clientY-canvas.offsetTop;
 }      


 canvas.addEventlistener("touchmove", my_touchmove);

 function my_touchmove(e) {
  console.log("My Touchmove")

   current_postion_x=e.touches[0].clientX- canvas.offsetLeft;
   current_postion_y=e.touches[0].clientY-canvas.offsetTop;

ctx.beginpath();
ctx.strokeStyle= color;
ctx.lineWidth= Width_of_line;

console.log ("Last postion of x and y coordanaties= ");
console.log("x=" +last_postion_x + "y= "+ last_postion_y);
ctx.moveTo(last_postion_x, last_postion_y);

console.log("Current postion o x and y coordanaties= ");
console.log("x=" + current_postion_x+ "y= "+ current_postion_y);
ctx.lineTo(current_postion_x, current_postion_y);
ctx.stroke();


last_postion_x= current_postion_x;
last_postion_y=current_postion_y;
 }

 function Clear_drawing() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
 }
