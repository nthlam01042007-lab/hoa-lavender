/* =========================
   MỞ MÓN QUÀ
========================= */

const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

openBtn.addEventListener("click", function () {

    intro.classList.add("hide");

    setTimeout(() => {
        main.classList.add("show");
    }, 500);

    startPetals();
    typeMessage();

});


/* =========================
   CÁNH HOA BAY
========================= */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.2 + Math.random() * 0.6;

    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}


function startPetals() {

    setInterval(() => {

        createPetal();

    }, 700);

}


/* =========================
   HIỆU ỨNG GÕ CHỮ
========================= */

const message =
    "Chúc mày sinh nhật vui vẻ nhé không nghĩ mới đó mà đã đến sinh nhật mày rồi. Thôi thì chúc mày luôn vui vẻ tràn ập niềm vui cuộc sống và có nhiều may mắn đến với bản thân.Mong là chúc kiểu này sẽ giúp có một niềm vui nho nhỏ trong ngày. Happy birthday Hằng nha";

function typeMessage() {

    const element =
        document.getElementById("typing");

    let index = 0;

    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, 35);

        }

    }

    type();
}
