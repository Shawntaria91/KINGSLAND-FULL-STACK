// 3. Distance Converter
// Your task is to convert from one distance unit to another by adding a click event listener to a button.
// When it is clicked, read the value from the input field and get the selected option from the input and
// output units drop downs. Then calculate and display the converted value in the disabled output field.
// Example
// Hints
//  Multiply the incoming distance by the following conversion rates to convert to meter
//  Divide to convert from meters to the required output unit
//  To see which option is selected, read the properties of its parent: value gives you the value of the
// selected option (as displayed in the HTML), selectedIndex gives you the 0-based index of the
// selected option. For example, if miles are selected, inputUnits.value is "mi",
// inputUnits.selectedIndex is 4. Option text is irrelevant
//  Use the following table information to do that:
function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onBtnClick);

    function onBtnClick() {
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
        let inputToM = 0;
        let result = 0;
        switch (inputUnits) {
            case 'km':
                inputToM = inputDistance * 1000;
                break;
            case 'm':
                inputToM = inputDistance;
                break;
            case 'cm':
                inputToM = inputDistance * 0.01;
                break;
            case 'mm':
                inputToM = inputDistance * 0.001;
                break;
            case 'mi':
                inputToM = inputDistance * 1609.34;
                break;
            case 'yrd':
                inputToM = inputDistance * 0.9144;
                break;
            case 'ft':
                inputToM = inputDistance * 0.3048;
                break;
            case 'in':
                inputToM = inputDistance * 0.0254;
                break;
        }
        switch (outputUnits) {
            case 'km':
                result = inputToM / 1000;
                break;
            case 'm':
                result = inputToM;
                break;
            case 'cm':
                result = inputToM / 0.01;
                break;
            case 'mm':
                result = inputToM / 0.001;
                break;
            case 'mi':
                result = inputToM / 1609.34;
                break;
            case 'yrd':
                result = inputToM / 0.9144;
                break;
            case 'ft':
                result = inputToM / 0.3048;
                break;
            case 'in':
                result = inputToM / 0.0254;
                break;
        }
        outputDistance.value = result;
    }
}
// 1 km    1000 m
// 1 m     1 m
// 1 cm    0.01 m
// 1 mm    0.001 m
// 1 mi    1609.34 m
// 1 yrd   0.9144 m
// 1 ft    0.3048 m
// 1 in    0.0254 m
//