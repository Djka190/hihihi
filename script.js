let button = document.querySelector("button")


document.addEventListener("click", (el) => {
    let is_clicked = !!el.target.closest("button");
    let clicked = el.target.closest("button");

    if (is_clicked)
    {
        clicked.style.opacity = "0";
        let div = document.createElement("div")
        div.textContent = "TALKSY?";
        document.body.appendChild(div);
        clicked.remove()
    }
})

document.addEventListener("click", (ev) => {
    let is_clicked = !!ev.target.closest("p");
    let clicked = ev.target.closest("p");
    let div = document.querySelector("div")

    if (is_clicked)
    {
        if (clicked.innerText == "Polski")
        {
            button.textContent = "KLIKNIJ TU JEŚLI JESTEŚ WOLNA"
            div.textContent = "TALKSY?"
        }
        if (clicked.innerText == "Chiński")
        {
                button.textContent = "如果有空请点击这里"
                div.textContent = "会谈？"
        }
    }
})