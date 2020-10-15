function main(letter) {
    let command = "";
    let word = "";
    let sumSecretCommand = "";
    let i = 0;
    let currentLetter = letter[i] + " ";
    let newWord = "";

   
    while (command != "End")
    {
        command = console.log();
        if (command != "End")
        {
            currentLetter = currentLetter.parse(command);
            if ((currentLetter >= 65 && currentLetter <= 90) || (currentLetter >= 97 && currentLetter <= 122))
            {
                if (currentLetter == 'c' && !(sumSecretCommand.Contains("c")))
                {
                    sumSecretCommand += char.ToString(currentLetter);

                }
                else if (currentLetter == 'o' && !(sumSecretCommand.Contains("o")))
                {
                    sumSecretCommand += char.ToString(currentLetter);
                }
                else if (currentLetter == 'n' && !(sumSecretCommand.Contains("n")))
                {
                    sumSecretCommand += char.ToString(currentLetter);
                }
                else
                {
                    word += char.ToString(currentLetter);

                }
                if (sumSecretCommand.Contains("c") && sumSecretCommand.Contains("o") && sumSecretCommand.Contains("n"))
                {
                    word += " ";
                    newWord = word;
                    sumSecretCommand = "";
                }
            }
        }
        else
        {
            break;
        }
    }
    if (command == "End")
    {
        console.log(newWord);
    }
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