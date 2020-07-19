window.onload = () => {
    document.querySelectorAll('.quantity__changer').forEach(button => {
        button.onclick = () => {
            let parent = button.parentElement; // <div class="quantity">
            let span = parent.children[1]; // <span class="quantity__value-to-buy-container">
            let input = span.children[0]; // <input class="quantity__value-to-buy" type="text" name="quantity">
            let sign = button.dataset.sign;
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
    document.querySelectorAll('.quantity__value-to-buy').forEach(input => {
        input.onblur = () => {
            if (parseInt(input.value) < 1 || !input.value) {
                input.value = 1;
            }
        }
    })
}
