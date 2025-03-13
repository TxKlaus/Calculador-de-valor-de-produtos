function addItem(qtdElement) {
    let currentQuantity = parseInt(qtdElement.textContent, 10);
    qtdElement.textContent = currentQuantity + 1;
}

function removeItem(qtdElement) {
    let currentQuantity = parseInt(qtdElement.textContent, 10);
    if (currentQuantity > 0) {
        qtdElement.textContent = currentQuantity - 1;
    } 
}

function updateTotalQuantity(value) {
    const valueQuantity = document.querySelector("#ValueQuantity");
    
    if (valueQuantity) {
        let currentQuantity = parseFloat(valueQuantity.textContent.replace("Valor total: R$", "")) || 0;
        let newTotal = (currentQuantity + parseFloat(value)).toFixed(2);
        valueQuantity.textContent = `Valor total: R$${newTotal}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttonIncrement = document.querySelectorAll("#buttonIncrement"); // pega todos Buttons com id="buttonIncrement"
    const buttonDecrement = document.querySelectorAll("#buttonDecrement"); // pega todos Buttons com id="buttonDecrement"

    buttonIncrement.forEach((button) => { // passa por todos os Buttons de incremento
        button.addEventListener("click", () => { // pega o Button clicado
            const item = button.closest(".price"); // pega o container onde fica os Buttons e a Qtd
            if (item) {
                const qtdElement = item.querySelector("#qtd"); // pega o p ou span com o id="qtd" para incrementar
                const itemValue = parseFloat(button.getAttribute("data-value")) || 0; // pega o valor do produto que fica no data-value="16,50"
                addItem(qtdElement); // incremnta a qtd
                updateTotalQuantity(itemValue); // passa para a função o valor a incrementar
            }
        });
    });

    buttonDecrement.forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.closest(".price");
            if (item) {
                const qtdElement = item.querySelector("#qtd");
                const itemValue = parseFloat(button.getAttribute("data-value")) || 0;
                let currentQuantity = parseInt(qtdElement.textContent, 10);

                if (currentQuantity > 0) { // Só permite decrementar se for maior que 0
                    updateTotalQuantity(itemValue);
                    removeItem(qtdElement);
                }
                
            }
        });
    });
});
