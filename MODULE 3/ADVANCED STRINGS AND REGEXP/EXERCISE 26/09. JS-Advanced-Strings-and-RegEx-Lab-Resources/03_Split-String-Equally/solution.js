function solve() {
    let resultHTML = document.getElementById('result');
    let inputText = document.getElementById('text').value;
    let inputNum = document.getElementById('number').value;
    let willItSplit = inputText.length % inputNum;

    if (willItSplit == 0) {
        //console.log('It splits evenly');

        let splitEx = new RegExp(`.{1,${inputNum}}`, 'g');
        //console.log('custom regex based on input num is ', splitEx);

        let splitArr = inputText.match(splitEx);
        //console.log(splitArr);
        resultHTML.innerText = splitArr.join(' ');

    } else if (inputText.length < inputNum) {
        //console.log('Not even and short');

        let resultText = inputText;
        let i = 0;

        while (resultText.length < inputNum) {
            resultText += resultText[i];
            i++;
        }
        console.log(resultText);
        resultHTML.innerText = resultText;

    } else {
        console.log('long enough but not even');
        let splitRegex = new RegExp(`.{1,${inputNum}}`, 'g');
        let splitArr = inputText.match(splitRegex);
        console.log('split arr', splitArr);
        let resultText = splitArr[splitArr.length - 1];
        console.log('last element of arr is ', resultText);
        let i = 0;
        while (resultText.length < inputNum) {
            resultText += inputText[i];
            i++;
        }
        splitArr[splitArr.length -1] = resultText;
        console.log('new resr text', resultText);
        console.log(splitArr);
        resultHTML.innerText = splitArr.join(' ');
    }
}