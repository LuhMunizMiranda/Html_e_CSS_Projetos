const calculateButton = document.getElementById('calculate');
const valueElement = document.getElementById('value');
const descriptionElement = document.getElementById('description');
const infosElement = document.getElementById('infos');

calculateButton.addEventListener('click', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        console.error('Valores de peso e altura devem ser numéricos.');
        return;
    }

    const bmi = weight/(height*2);
    let description = '';

    infosElement.classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Abaixo do peso.';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal.';
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Você está sobrepeso.';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Você está com obesidade moderada.';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Você está com obesidade severa.';
    } else {
        description = 'Você está com obesidade mórbida.';
    }

    valueElement.textContent = bmi.toFixed(2);
    descriptionElement.textContent = description;
});