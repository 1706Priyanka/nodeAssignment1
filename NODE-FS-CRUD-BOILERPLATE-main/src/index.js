const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    const data = await fs.writeFile(fileName, fileContent);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const myFileReader = async (fileName) => {
  // write code here
  // dont change function name
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    const data = await fs.appendFile(fileName, fileContent);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont change function name

  try {
    const data = await fs.unlink(fileName);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

//module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

myFileWriter("input.txt", "hello world");
myFileReader("input.txt");
myFileUpdater("input2.txt", "hello Priyanka");
myFileDeleter("input.txt");
