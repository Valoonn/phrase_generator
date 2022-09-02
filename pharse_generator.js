var words = require('./words.js');
var prompt = require("prompt");
var colors = require("@colors/colors/safe");

prompt.message = "";
prompt.delimiter = " : ";
console.log(colors.blue("Hi !"));
console.log(colors.blue("Welcome to the phrase generator\n"));
prompt.start();

const main = async () => {
    const result = await prompt.get({
        properties: {
            length: {
                description: colors.green("Length of the phrase"),
            }
        }
    })
    var phrase = "";
    var length = parseInt(result.length);

    for (var i = 0; i < length; i++) {
        phrase += words[Math.floor(Math.random() * words.length)] + " ";
    }
    console.log(colors.white("\n\n" + phrase));
    console.log(colors.red("\n\nBye !\ncreated by Valoon"));
    console.log('\nPress any key to exit');

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
}


main()
