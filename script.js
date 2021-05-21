
//js variable
const a = document.querySelector("#increment");
const b = document.querySelector("#decrement");
const d = document.querySelector("#reset");
const c = document.querySelector(".number");
let i = 0;

//increment button event 
a.addEventListener("click", function () {
  i += 1;
  c.textContent = i;
});

// decrement button event 
b.addEventListener("click", function () {
  i -= 1;
  c.textContent = i;
});

// reset button event 
d.addEventListener("click", function () {
    i = 0;
  c.textContent = i;
});
