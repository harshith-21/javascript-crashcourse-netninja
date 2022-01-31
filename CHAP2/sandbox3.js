const ul = document.querySelector(".people");

const ppl = ["harshi", "luigi", "harshith", "maria"];

let html = ``;

// ppl.forEach(function (i) {
//   html += `<li style="color:purple">${i}</li>`;
// });

ppl.forEach((i) => {
  html += `<li style="color:purple">${i}</li>`;
});

console.log(html);
ul.innerHTML = html;
