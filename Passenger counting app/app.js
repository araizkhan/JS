let countEl = document.getElementById("count-el");
console.log(countEl)
let count =0;
function increment ()
{
 count += 1;
 countEl.textContent = count;
}
let saveEl = document.getElementById("save-el");
function save()
{
  let savee = count + " - ";
  saveEl.textContent += savee;
  count = 0;
  countEl.textContent = 0;
  // console.log(count);
}

