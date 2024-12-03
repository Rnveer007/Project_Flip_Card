let main_box = document.querySelector(".container");
let game_btn = document.querySelector(".start_btn");
let card_back = document.querySelectorAll(".flip-card-back");
let card_front = document.querySelectorAll(".flip-card-front img");
let randomImg = [
    "project_imgs/apple.jpg",
    "project_imgs/cherries.webp",
    "project_imgs/mango.webp",
    "project_imgs/pomegranate.jpg",
    "project_imgs/orange.jpg",
    "project_imgs/raspberry-2635886_1280.jpg",
];

let actualImage = [...randomImg, ...randomImg]
console.log(actualImage);

let imgStoreArry = [];
let tempArry = [];
addImage();

game_btn.addEventListener("click", () => {
    main_box.style.display = "flex";
    game_btn.style.display = "none"
});


function addImage() {
    for (let i = 0; i < actualImage.length; i++) {
        let image = document.createElement("img");
        image.src = actualImage[randomvalue()];
        card_back[i].append(image);
        console.log(card_back)
    }
};

card_front.forEach((frontImage) => {
    frontImage.addEventListener("click", () => {
        frontImage.parentElement.parentElement.classList.add(".cardBackSide")
    })
    
});


function randomvalue() {
    let randomItem = Math.random(Math.floor() * actualImage.length);
    if (tempArry.includes(randomItem)) { return randomvalue() }
    else {
        tempArry.push(randomItem);
        return randomItem;
    }
};



