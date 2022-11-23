const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your Name.")

    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!"
    }

    if(n.length > 0) {
        alert("What if di mo ko nakilala?");
        alert("What if hindi naging tayo?");
        alert("What if hindi nag krus ang landas natin?");
        alert("what if kung mag karon na tayo ng baby?");
        alert("what if kung tanungin kitang, Will you marry me?");
        main.style.display = 'block';
        break
    }
}