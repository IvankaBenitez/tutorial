let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff4d6d;"> Desarrollo sitios web y soy coach de robótica. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
