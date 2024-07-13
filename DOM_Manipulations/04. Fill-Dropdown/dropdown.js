function addItem() {
    const selectRef = document.getElementById('menu');

    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const textValue = textInput.value;
    const value = valueInput.value;


    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = textValue;

    selectRef.appendChild(newOption);

    textInput.value = '';
    valueInput.value = '';



}