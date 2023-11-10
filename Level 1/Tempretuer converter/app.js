const tempField1 = document.querySelector("#temp-1");
const tempField2 = document.querySelector("#temp-2");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const result = document.querySelector(".result-heading");

window.addEventListener("load", () => {
    tempField1.innerHTML = "";
    tempField2.innerHTML = "";
});

convertBtn.addEventListener("click", () => {
    convertTemp();
    
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
        result.style.visibility = ("visible");
    }, 1000);
    
});

function convertTemp() {
    let inputValue = degree.value;

    setTimeout(() => {
        if (tempType.value === "celsius") {

            let cTemp = parseFloat(inputValue);

            const celsiusToFahrenheit = (inputValue * (9 / 5)) + 32;

            tempField1.innerHTML = `${celsiusToFahrenheit.toFixed(3)} &deg;F`;

            const celsiusToKelvin = cTemp + 273.15;

            tempField2.innerHTML = `${celsiusToKelvin.toFixed(3)} &deg;K`;


        } else if (tempType.value === "fahrenheit") {
            let fTemp = parseFloat(inputValue);
            const FahrenheitToCelsius = (fTemp - 32) * (5 / 9);

            tempField1.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;

            const FahrenheitToKelvin = (fTemp - 32) * (5 / 9) + 273.15;

            tempField2.innerHTML = `${FahrenheitToKelvin.toFixed(3)} &deg;K`;


        } else if (tempType.value === "kelvin") {
            let kTemp = parseFloat(inputValue);

            const KelvinToCelsius = kTemp - 273.15;

            tempField1.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;

            const KelvinToFahrenheit = (kTemp - 273.15) * (9 / 5) + 32;

            tempField2.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;
        }
    }, 1200)
}