function SumOfDigitsUptoN() {
    const numberInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    let number = parseInt(numberInput);

    if (isNaN(number) || number < 1 || number > 1000000) {
        resultElement.textContent = "Invalid number";
        resultElement.style.color = "red";
    } else {
        let sum = (number * (number + 1)) / 2;
        resultElement.textContent = `Sum of numbers up to ${number} is ${sum}`;
        resultElement.style.color = "green";
    }
}
