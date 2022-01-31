//DOCUMENT OBJECT MODEL

const para = document.querySelector("p");
// para.innerText = "hello bozoo";
// para.innerText += "hello bozoo";
// console.log(para);

const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });

const content = document.querySelector(".content");

// content.innerHTML += "<h2> THIS IS A NEW H2";

const peo = ["amrio", "luigi", "jaffa"];

peo.forEach((people) => {
  content.innerHTML += `<p>${people}</p>`;
});
