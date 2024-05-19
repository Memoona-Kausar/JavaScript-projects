const colors = ["red", "blue", "brown", "violet", "yellow"];

const btn = document.querySelector(".btn");
const color= document.querySelector("#color");

const randomNumer = () => {
    return Math.floor(Math.random () * colors.length);
};
btn.addEventListener("click", () => {
    const num = randomNumer();
    document.body.style.backgroundColor= colors[num];
    color.textContent = colors[num];
});