let isCelsius = true;
let inputvalue = "";
let outputvalue = "";
var titleElement = document.getElementById("conversion-title");
var textElement = document.getElementById("conversion-text");

document.getElementById('mainElement') .classList.add('show');

function celsiusToFareheit(celsius) {
    return (celsius * 9/5) + 32;
}

function farenheitToCelcius(farenheit) {
    return (farenheit - 32) * 5/9;
}

function doConvert {
    inputvalue = parseFloat(document.getElementById("Input").value);

    if (!isNaN(inputvalue)) {
        if (isCelsius) {
            resultValue = celsiusToFareheit(inputvalue);
        } else {
            resultValue = farenheitToCelcius(inputvalue);
        }
        document.getElementById("result").value = resultValue;
    } else {
        document.getElementById("result").value = ""
    }
}

document.getElementById("convert").addEventListener("click", doConvert);

document.getElementById("change").addEventListener("click", function() {
    isCelsius = !isCelsius;

    if (!isCelsius) {
    titleElement.textContent = 'Cara Conversi Dari Celcius(°C) Ke Farenheit(°F)';
    textElement.innerHTML = '
    Suhu <span class="superscript">S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class="superscript">S</span> dalam derajat Celcius (&deg;C) dikurangi 32 dikali 5/9
        <br></br>
        S<span class="subscript">(&deg;S)</span> - 32) x 5/9
        ';
    } else {
        titleElement.textContent = 'Cara Conversi Dari Celcius(°C) Ke Farenheit(°F)';
        textElement.innerHTML = '
        Suhu <span class="superscript">S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class="superscript">S</span> dalam derajat Celcius (&deg;C) kali 9/5 tambah 32
        <br></br>
        S<span class="subscript">(&deg;F)</span> = (S<span class="subscript">(&deg;S)</span> x 9/5) + 32
        <br></br>
        atau
        <br></br>
        S<span class="subscript">(&deg;F)</span> = (S<span class="subscript">(&deg;S)</span> x 1.8) + 32
        ';
    }
    if (isCelsius) {
        document.getElementById("input-text-temp").textContent = "Celsius";
        document.getElementById("input-logo-temp").textContent = "C";
        document.getElementById("result-text-temp").textContent = "Farenheit";
        document.getElementById("result-logo-temp").textContent = "F";
    } else {
        document.getElementById("input-text-temp").textContent = "Farenheit";
        document.getElementById("input-logo-temp").textContent = "F";
        document.getElementById("result-text-temp").textContent = "Celsius";
        document.getElementById("result-logo-temp").textContent = "C";
    }
    doConvert();
});

document.getElementById("input").addEventListener("input", doConvert);

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("result").value = "";
    document.getElementById("input").value = ""
});

