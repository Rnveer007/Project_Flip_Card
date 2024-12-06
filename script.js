let main_box = document.querySelector(".container");
let gameBtn = document.querySelector(".start_btn");
let card_back = document.querySelectorAll(".flip-card-back");
let flipCard = document.querySelectorAll(".flip-card");
let showTime = document.getElementById("dicrTime");
let showCount = document.querySelector(".showCount")
let showGameResult = document.querySelector(".showGameResult")
let result = document.querySelector('.result');
let randomImg = [
    "project_imgs/apple.jpg",
    "project_imgs/cherries.webp",
    "project_imgs/mango.webp",
    "project_imgs/pomegranate.jpg",
    "project_imgs/orange.jpg",
    "project_imgs/raspberry-2635886_1280.jpg",
];
let actualImage = [...randomImg, ...randomImg];
let tempArry = [];
let imgStoreArry = [];
let countFllipedImg = 0;
let timer = 60;
let match = 0;
addImage();




gameBtn.addEventListener('click', () => {
    main_box.style.display = "flex";
    gameBtn.style.display = 'none';
    showGameResult.style.display = "block"
    startTime();


});

function randomvalue() {
    let randomItem = Math.floor(Math.random() * actualImage.length);
    if (tempArry.includes(randomItem)) {
        return randomvalue();
    } else {
        tempArry.push(randomItem);
        return randomItem;
    }
};

function addImage() {
    for (let i = 0; i < actualImage.length; i++) {
        let image = document.createElement("img");
        image.src = actualImage[randomvalue()];
        card_back[i].append(image);
    }
};

flipCard.forEach((suffle) => {
    suffle.addEventListener("click", () => {
        countFllipedImg++;
        suffle.children[0].classList.add("cardBackSide");
        imgStoreArry.push(suffle.children[0].children[1].children[0]);
        if (countFllipedImg === 2) {
            if (imgStoreArry[0].src === imgStoreArry[1].src) {
                imgStoreArry = [];
                countFllipedImg = 0;
                match++;
                showCount.innerHTML = `match : ${match}`;
            } else {
                setTimeout(() => {
                    imgStoreArry.forEach((img) => {
                        img.parentElement.parentElement.classList.remove("cardBackSide");
                    })
                    imgStoreArry = [];
                    countFllipedImg = 0;
                }, 1000)
            }
        }
    });
});


function startTime() {
    let interval = setInterval(() => {
        showTime.innerHTML = --timer;

        if (timer === 0 || match === 6) {
            main_box.style.display = "none";
            result.style.display = "block";
            showGameResult.style.display = "none";
            clearInterval(interval);
        }
    }, 1000)
};


