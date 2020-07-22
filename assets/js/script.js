window.onload = () => {
    document.querySelectorAll('.quantity__changer').forEach(button => {
        button.onclick = () => {
            let parent = button.parentElement; // <div class="quantity">
            let span = parent.children[1]; // <span class="quantity__value-container">
            let input = span.children[0]; // <input class="quantity__value" type="text" name="quantity">
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
    document.querySelectorAll('.quantity__value').forEach(input => {
        input.onblur = () => {
            let inputStr = input.value.replace(/[^\d]/g, '');
            if (inputStr !== '') {
                let number = parseInt(inputStr, 10);
                if (!isNaN(number)) {
                    input.value = number;
                }
            }
            else {
                input.value = 1;
            }
        }
    })
}
