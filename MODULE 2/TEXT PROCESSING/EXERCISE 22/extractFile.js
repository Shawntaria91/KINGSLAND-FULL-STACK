// Write a function that receives a single string - the path to a file (the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak

// should be the file name, while pptx is the extension).



function main(filePath) {

    extractFile(filePath);
}

function extractFile(filePath) {

    let fileIdx = filePath.lastIndexOf("\\");

    let splitFile = filePath.substr(fileIdx + 1, 100);

    let lastPdIdx = splitFile.lastIndexOf(".");

    let fileName = splitFile.substr(0, lastPdIdx);

    console.log(`File name: ${fileName}`);

    let fileExt = splitFile.substr(lastPdIdx + 1, 10);

    console.log(`File extension: ${fileExt}`);
}
main();