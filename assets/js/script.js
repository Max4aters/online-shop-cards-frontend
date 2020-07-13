// svg (- и +) помещены в кнопку, благодаря чему область клика увеличивается. ни грамма js-кода в HTML!
document.querySelectorAll('.options__quantity_changer').forEach(quantityChangerBtn => {
    let signSvg = quantityChangerBtn.children[0];
    quantityChangerBtn.onmousedown = () => {
        signSvg.classList.toggle('options__quantity_sign_active');
    }
    quantityChangerBtn.onmouseup = () => {
        signSvg.classList.toggle('options__quantity_sign_active');
    }
})

let buyButton = document.querySelector('.options__buy-button');
buyButton.onmousedown = () => {
    buyButton.classList.toggle('options__buy-button_active');
}
buyButton.onmouseup = () => {
    buyButton.classList.toggle('options__buy-button_active');
}

let minusBtnPoneveira = document.getElementById('backen-ponevira-minus');
let plusBtnPoneveira = document.getElementById('backen-ponevira-plus');
minusBtnPoneveira.onclick = () => {
    let valueElement = document.getElementById('backen-ponevira-value');
    let numberToBuy = parseInt(valueElement.innerText);
    // в корзину будет нельзя добавить количество товаров меньше 1
    if (numberToBuy > 1) {
        valueElement.innerText = (--numberToBuy).toString();
    }
}
plusBtnPoneveira.onclick = () => {
    let valueElement = document.getElementById('backen-ponevira-value');
    let numberToBuy = parseInt(valueElement.innerText);
    valueElement.innerText = (++numberToBuy).toString();
}
