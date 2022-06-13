  // document.getElementById("count-el").innerText = 5;


//change the count-el in the HTML
let countEl = document.getElementById("count-el");
console.log(countEl)
let count =0;
function increment ()
{
 
 count = count + 1;
 countEl.innerText = count;
 console.log(count);
}
