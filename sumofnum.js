function SumOfDigitsUptoN() {
    const numInput = document.getElementById("NumInput").value;
    const resultSum = document.getElementById("result");

    let number = parseInt(numInput);

    if (isNaN(number) || number < 1 || number > 1000000) {
        resultSum.textContent = "Invalid number";
        resultSum.style.color = "red";
    } else {
        let sum = (number * (number + 1)) / 2;
        resultSum.textContent = `Sum of numbers up to ${number} is ${sum}`;
        resultSum.style.color = "green";
    }
}
