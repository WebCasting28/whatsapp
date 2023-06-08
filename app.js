
let submit = document.getElementById("btn");
let message = document.getElementById("textbox");
let main = document.querySelector(".box");

let para;
let val;
let write;

submit.addEventListener('click', () => {

    val = message.value;
    message.value = "";
    add();
    ans();
});

function add() {
    para = document.createElement('p');
    para.innerText = val;
    main.appendChild(para);
    para.classList.add("style1");

}

function ans() {
    setTimeout(() => {
        write = document.createElement('p');
        main.appendChild(write);
        write.classList.add("style2");

        if (val == reply.a) {
            write.innerText = "Good morning";
        }
        else if (val == reply.b) {
            write.innerText = "I'm fine";
        }
        else if (val == reply.c || val == reply.d) {
            write.innerText = "My name is WebCasting and i'm a web developer";
        }
        else if (val == reply.e) {
            write.innerText = "hello";
        }
    }, 1000);
}
const reply = {
    a: "good morning",
    b: "How are you",
    c: "What's your name??",
    d: "what is your name",
    e: "hii",
}
