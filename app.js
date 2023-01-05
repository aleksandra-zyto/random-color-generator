const button = document.querySelector("#generate");
const heading = document.querySelector("#heading");

button.addEventListener("click", () => {
    document.body.style.backgroundImage = "none";
})

button.addEventListener("click", () => {
    const newColor = makeRandCol()
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;
})



const makeRandCol = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

