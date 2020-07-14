// svg (- и +) помещены в кнопку, благодаря чему область клика увеличивается
document.querySelectorAll('.options__quantity_changer').forEach(quantityChangerBtn => {
    let signSvg = quantityChangerBtn.children[0];
    quantityChangerBtn.onmousedown = () => {
        signSvg.classList.toggle('options__quantity_sign_active');
    }
    quantityChangerBtn.onmouseup = () => {
        signSvg.classList.toggle('options__quantity_sign_active');
    }
})

let buyButtons = document.querySelectorAll('.options__buy-button');
buyButtons.forEach(button => {
    button.onmousedown = () => {
        button.classList.toggle('options__buy-button_active');
    }
    button.onmouseup = () => {
        button.classList.toggle('options__buy-button_active');
    }
})

let minusButtons = document.getElementsByClassName('minus');
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].onclick = () => {
        // на каждую кнопку "-" есть свое значение (товары для добавления в корзину). сопоставляем действие i-й кнопки i-му значению
        let valueElement = document.getElementsByClassName('options__quantity_current-value')[i];
        let numberToBuy = parseInt(valueElement.innerText);
        // в корзину будет нельзя добавить количество товаров меньше 1
        if (numberToBuy > 1) {
            valueElement.innerText = (--numberToBuy).toString();
        }
    }
}
let plusButtons = document.getElementsByClassName('plus');
for (let i = 0; i < minusButtons.length; i++) {
    plusButtons[i].onclick = () => {
        let valueElement = document.getElementsByClassName('options__quantity_current-value')[i];
        let numberToBuy = parseInt(valueElement.innerText);
        valueElement.innerText = (++numberToBuy).toString();
    }
}
