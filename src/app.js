/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let img = document.getElementById("img");
let pics = [
  "https://www.science.org/do/10.1126/science.aav0458/abs/0808_dogPee_16x9.jpg",
  "https://www.science.org/do/10.1126/science.aav0458/abs/0808_dogPee_16x9.jpg?w=5",
  "https://t3.ftcdn.net/jpg/02/39/42/00/360_F_239420088_yOXhuDymb8IBbggLrv8j8YZkICw934br.jpg",
  "https://people.com/thmb/6KHcx7O0J3Gwubg8b_c05YmnWdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/tmnt2-ff-003-2000-e2e7c744347046e8b4de53b25cdd2b00.jpg",
  "https://clipart-library.com/newhp/venus-raphael-leonardo-michelangelo-teenage-mutant-ninja-turtles-tmnt.jpg",
  "https://t3.ftcdn.net/jpg/03/49/32/28/360_F_349322868_pnh7gwrSXKmbCuu6ebDPjUjRi8QQ6uJm.jpg"
];
let who = ["The dog", "My grandma", "His turtle", "My bird"];
@@ -31,6 +31,7 @@ window.onload = function() {
let whatR = what[Math.floor(Math.random() * what.length)];
let whenR = when[Math.floor(Math.random() * when.length)];
img.src = picsR;

document.getElementById("excuse").innerHTML =
  whoR + " " + actionR + " " + whatR + " " + whenR;
};
6 changes: 4 additions & 2 deletions6  
src/index.html
@@ -8,9 +8,11 @@
  <script src="app.js"></script>
</head>
<body>
  <div class="centered-image">
    <img src="" id="img" />
  </div>
  <h1>OMG! you wont believe it but..</h1>
  <h2 id="excuse">My dog ate my homework</h1>
   <img src="" id="img">
  <h2 id="excuse">My dog ate my homework</h2>
</body>
</html>
<!-- //
10 changes: 9 additions & 1 deletion10  
src/style.css
@@ -6,9 +6,17 @@ h1 {
}
h2 {
text-align: center;
padding-top: 0;
padding-top: 50px;
text-decoration: solid;
}
body {
background-color: rgb(61, 85, 175);
}
.centered-image {
display: flex;
justify-content: center;
}
img {
height: 500px;
width: 560px;
}