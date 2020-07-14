document.querySelectorAll('.card__quantity_changer').forEach(button => {
    button.onclick = () => {
        let parent = button.parentElement; // <div class="card__quantity">
        let span = parent.children[1]; // <span class="card__value-to-buy">
        let input = span.children[0]; // <input type="text" name="product_quantity">
        let sign = button.classList[1];
        switch (sign) {
            case 'minus':
                if (input.value > 1) {
                    --input.value;
                }
                break;
            case 'plus':
                ++input.value;
                break;
        }
    }
})
