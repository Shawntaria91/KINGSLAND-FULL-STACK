function main() {
    let counts = {};
    for (let arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);

        if (!counts[typeof(arg)]) {
            counts[typeof(arg)] = 1;
        } else {
            counts[typeof(arg)]++;
        }
        if (`${arg}` === 'null') {
            console.log(`undefined: undefined`);
            counts.undefined = 1;
        }
    }
    Object.keys(counts).sort((a, b) => counts[b] - counts[a]).forEach(k => console.log(`${k} = ${counts[k]}`));
}
main(true, null);
// string: Drogon
// string: Rhaegal
// string: Viserion
// string = 3

//main('cat', 42, function() { console.log('Hello world!'); });()=