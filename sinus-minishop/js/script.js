//Exercise 1
document.querySelector(".art-1>h3").innerText = "Potato";

//Exercise 2, 3 & 11
const aTags = document.querySelectorAll("a");
aTags.forEach((aTag) => {
  console.log(aTag.innerText);
  if (aTag.innerText === "Home") {
    aTag.innerText = "Start";
    aTag.classList.add("active");
  }
  if (aTag.innerText === "Contact") {
    aTag.innerText = "Mail Us";
  }
});

//Exercise 4
document.querySelector(".art-2>p").innerText = "Trololololo";

//Exercise 5
const theButton = document.querySelector(".art-3>button");

theButton.style.backgroundColor = "green";
theButton.innerText = "flaskpost";

//Exercise 6
document.querySelector(".art-1").style.backgroundColor = "purple";

//Exercise 7
document.querySelector("footer p").innerText = "Wam Bam thank you Mam";

//Exercise 8
const allParagraphs = document.querySelectorAll("p");
/* .style.color = "teal";
 */

allParagraphs.forEach((paragraph) => {
  paragraph.style.color = "brown";
});

//Exercise 9

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.innerText = "add to cart";
});

//Exercise 11
document.querySelector(".logo").classList.remove("logo");

//Exercise 12

const menuListHeader = document.querySelector("header nav");
const footerMenu = document.querySelector("footer article");
let newMenuOption = document.createElement("a");
let newMenuOption2 = document.createElement("a");
newMenuOption.innerText = "Baka kakor";
newMenuOption2.innerText = "Baka kakor";
menuListHeader.insertBefore(newMenuOption, menuListHeader.children[3]);
footerMenu.appendChild(newMenuOption2);

//Exercise 13
const main = document.querySelector("main");
const html = `
<article>
    <figure><img src="img/hoodie-forrest.png" alt="hoodie" /></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forest</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
        </p>
        <button>buy</button>
</article>
`;
main.insertAdjacentHTML("beforeend", html);

//Exercise 14
document.querySelector("header img").classList.add("logo");
const logo = document.querySelector(".logo");
logo.addEventListener("click", (e) => {
  console.log("found you!");
});

//Exercise 15
const articles = document.querySelectorAll("main article");
for (let i = 0; i < articles.length; i++) {
  const article = articles[i];
  const dynamicText = article.children[2].innerText;

  article.addEventListener("click", (e) => {
    console.log(`Hi, I'm article ${dynamicText}`);
  });
}
