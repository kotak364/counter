const a = document.querySelector("#increment");
const b = document.querySelector("#decrement");
const d = document.querySelector("#reset");
let c = document.querySelector(".number");
let i = 0;


a.addEventListener("click",function () {
 i += 1; 
 c.textContent = i; 
    
} 


)

b.addEventListener("click",function () {
    i -= 1; 
    c.textContent = i; 
       
   } 
   
   
   )

   d.addEventListener("click",function () {
    i = 0; 
    c.textContent = i; 
       
   } 
   
   
   )