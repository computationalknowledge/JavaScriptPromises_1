console.log("Before timeout: " + new Date());

function f() {
   console.log("After timeout: " + new Date());
}
setTimeout(f, 60*1000); // one minute
console.log("I happen after setTimeout!");
console.log("Me too!");

code segment 2:

function countdown() {
   let i;                     // note we declare let outside of the for loop
   console.log("Countdown:");
   for(i=5; i>=0; i--) {
      setTimeout(function() {
         console.log(i===0 ? "GO!" : i);
      }, (5-i)*1000);
   }
}
countdown();



