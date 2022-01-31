// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.youtube.com");

// link.innerText = "yt website";

// const msg = document.querySelector("p");

// console.log(msg.getAttribute("class"));
// msg.setAttribute("class", "success");

// console.log(msg.getAttribute("class"));

// msg.setAttribute("style", "color:red");

//new

// const title = document.querySelector("h1");

// // title.setAttribute('style',"margin:50px");
// //we observe previous style is gone
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";

// // title.style.font = "";
// title.style.color = "crimson";

// title.style.fontSize = "70px";

// //to remove
// title.style.margin = "";

//new

// const content1 = document.querySelector("p");

// console.log(content1.classList);
// content1.classList.add("working");
// //adding class working to the classes of content1
// content1.classList.remove("working");
// //to remove

// content1.classList.add("success");

const parass = document.querySelectorAll("p");

parass.forEach((p) => {
  if (p.textContent.includes("error")) {
    //searches for visible text content
    p.classList.add("error");
  }
  //   if (p.textContent.includes("success")) {
  //     p.classList.add("success");
  //   }
  if (p.innerText.includes("success")) {
    //can find it even it is not transparent
    p.classList.add("success");
  }
});

const titlei = document.querySelector(".title");

titlei.classList.toggle("test");
titlei.classList.toggle("test");
