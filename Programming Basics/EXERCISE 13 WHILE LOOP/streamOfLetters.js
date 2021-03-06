function main(letters) {
	let word = "";
	let visited = "";
	let currentLetter = letters.shift();
	while (currentLetter != "End") {
		if (
			currentLetter == "c" ||
			currentLetter == "o" ||
			currentLetter == "n"
		) {
			if (visited == currentLetter) {
				word += currentLetter;
				currentLetter = letters.shift();
			} else {
				visited = currentLetter;
				currentLetter = letters.shift();
			}
		} else {
			word += currentLetter;
			currentLetter = letters.shift();
		}
	}
	console.log(word);
}

main(["H", "n", "e", "l", "l", "o", "o", "c"]);

/**
 * Write a program that reads a hidden message in a sequence of symbols.
You will receive each of them on a single line until the "End" command.
The words are initiated from the letters in the order of their reading.
Symbols which are not Latin letters should be ignored.
The words, hidden in the stream, are separated from a secret command by three letters - "c", "o" and "n".
When you first receive one of these letters, you have to mark it as visited, but it is not saved in the word.
Every time you receive the same letter, it is saved normally in the word.
After you have found all three symbols from the command, you have to print the word and a space " ".
A new word is started the same way, waiting for the secret command to be printed.
 */
