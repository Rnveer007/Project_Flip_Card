let main_box = document.querySelector(".container");
let game_btn = document.querySelector(".start_btn");
let card_back = document.querySelectorAll(".flip-card-back");
let card_front = document.querySelectorAll(".flip-card-front img");
let showTime = document.getElementById("dicrTime");
let flipCard = document.querySelectorAll(".flip-card");
let result = document.querySelector('.result');
let showCount = document.querySelector(".showCount");
let randomImg = [
    "project_imgs/apple.jpg",
    "project_imgs/cherries.webp",
    "project_imgs/mango.webp",
    "project_imgs/pomegranate.jpg",
    "project_imgs/orange.jpg",
    "project_imgs/raspberry-2635886_1280.jpg",
];
let actualImage = [...randomImg, ...randomImg]
let countImg = 0;
let timer = 60;
let imgStoreArry = [];
let tempArry = [];
let match = 0;
addImage();
startTime();

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

flipCard.forEach((suffle) => {
    suffle.addEventListener("click", () => {
        countImg++;
        suffle.children[0].classList.add("cardBackSide");
        imgStoreArry.push(suffle.children[0].children[1].children[0])

        if (countImg === 2) {
            if (imgStoreArry[0].src === imgStoreArry[1].src) {
                imgStoreArry.length = 0;
                countImg = 0;
                match++
            }
            else {
                setTimeout(() => {
                    imgStoreArry.forEach((img) => {
                        img.parentElement.parentElement.classList.remove("cardBackSide");
                    });
                    imgStoreArry.length = 0
                    countImg = 0
                },1000)
            }
        }
    })

});


function randomvalue() {
    let randomItem = Math.floor(Math.random() * actualImage.length);
    if (tempArry.includes(randomItem)) { return randomvalue() }
    else {
        tempArry.push(randomItem);
        return randomItem;
    }
};



function startTime(){
    let interval = setInterval(()=>{
        showTime.innerHTML = --timer;
        if(timer === 0){
            main_box.style.display = "none";
            result.style.display = "block"
            clearInterval(interval);
        }
    },1000)
}


